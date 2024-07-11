import { useEffect, useState } from "react";

import GroupMeeting from "@/assets/ilustrations/groupMeeting.svg";
import WorkingTogether from "@/assets/ilustrations/workingTogether.svg";
import ReadingOnTopOfPileOfBooks from "@/assets/ilustrations/readingOnTopOfPileOfBooks.svg";
import star_filled from "@/assets/star_filled.svg";
import star_empty from "@/assets/star_empty.svg";
import flag from "@/assets/flag.svg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/AuthUser";
import { Menu } from "@/components/Menu";
import "./HomePage.css";
import { useCycle } from "@/hooks/useCycle";
import { useNavigate } from "react-router-dom";
import { getLastCycle } from "@/utils/getLastCycle";
import { getTuningByUserAndCycleId } from "@/utils/getTuningByUserAndCycleId";

import runAI from "../../../../gemini_api/index";
import { average } from "@/utils/average";
import { getTuningByCycleId } from "@/utils/getTuningByCycleId";
import { GetCollaboratorTuningDto } from "@/dto/GetCollaboratorTuningDto";
import { Cycle, getCycles } from "@/utils/getCycles";
import { getTuningsByUserId } from "@/utils/getTuningsByUserId";
import { GetTuningsByUserDto } from "@/dto/GetTuningsByUserDto";

function stars(fill: number) {
  const starArray = new Array(5).fill(null);

  return (
    <div className="flex flex-row space-x-[10px] justify-center">
      {starArray.map((_, index) => (
        <img
          key={index}
          src={index < fill ? star_filled : star_empty}
          alt="img"
          className="img"
        />
      ))}
    </div>
  );
}


const CustomDot = (props: any) => {
  const { cx, cy } = props;
  return <circle cx={cx} cy={cy} r={5} stroke="none" fill="#CCBFFF" />;
};


class Title_Grade {
  constructor(public title: string, public grade: number) {
    this.title = title;
    this.grade = grade;
  }
}

export default function CollaboratorHomePage(): JSX.Element {
  const { user, isAuthenticated, aiMessage, setAiMessage, token } = useAuth();
  const {
    _cycle,
    endDate,
    endTime,
    startDate,
    daysToFinish,
    callAllUpdates,
    selfEvalInfo,
  } = useCycle();
  const [ lastCycleId, setLastCycleId ] = useState(null);
  const [ lastTuning, setLastTuning ] = useState<any>(null);
  const [ lastCycleName, setLastCycleName ] = useState<string>("");
  const [ cycleId, setCycleId ] = useState<number | null>(null);
  const [ tuningData, setTuningData ] = useState<GetCollaboratorTuningDto | null>(null);
  const [ bestGrades, setBestGrades ] = useState<Title_Grade[]>([]); // 3 items {title: string; grade: Grade}
  const [ tunings, setTunings ] = useState<GetTuningsByUserDto[]>([]);

  const [prompt, setPrompt] = useState<number[] | null>(null); // array of grades or null if there is no tuning

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    if (user) {
      // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, token, true);
    }
  }, []);

  useEffect(() => {
    // setMenu(0);
    
    getLastCycle(token).then((cycle_res) => {
      setCycleId(cycle_res)
      if (cycle_res !== null) {
        setCycleId(cycle_res.id);
      }
      else {
        setCycleId(null);
      }
    });
    
  }, []); // runs once when the component is mounted


  useEffect(() => {
    if (user?.id && cycleId !== null) { // if a cycleId was found
      getTuningByUserAndCycleId(user.id, cycleId, token).then((data) => {
        setTuningData(data);
      });
    }
    else {
      setTuningData(null);
    }
  }, [user?.id, cycleId]); // runs when cycleId changes => guarantees that this happens after the first useEffect
  
  
  useEffect(() => {
    if (user) {
      getLastCycle(token).then((cycle) => {
        if (cycle) {
          setLastCycleId(cycle.id);
        }
      })
    }
  }, [user]);

  useEffect(() => {
    if (lastCycleId && user) {
      getTuningByUserAndCycleId(user.id, lastCycleId, token)
      .then((tuning) => {
        setLastTuning(tuning);
      })
    }
  }, [lastCycleId]);

  useEffect(() => {
    if (lastTuning && aiMessage === null) {
      // setting the prompt grades

      let auxPrompt: number[] = [];
      auxPrompt.push(lastTuning.ownershipMentalityGrade);
      auxPrompt.push(lastTuning.learningAgilityGrade);
      auxPrompt.push(lastTuning.resilienceAdversityGrade);
      auxPrompt.push(lastTuning.teamworkGrade);
      auxPrompt.push(lastTuning.outOfTheBoxThinkingBehavioralGrade);
      auxPrompt.push(lastTuning.deliveringQualityGrade);
      auxPrompt.push(lastTuning.meetingDeadlinesGrade);
      auxPrompt.push(lastTuning.doingMoreWithLessGrade);
      auxPrompt.push(lastTuning.outOfTheBoxThinkingExecutionGrade);
      console.log(auxPrompt);

      setPrompt(auxPrompt);
    }
  }, [lastTuning]);


  
  useEffect(() => { 

    if (!tuningData) {
      return;
    }

    console.log(">@>", tuningData);//Organização no trabalho

    let tile_grades: Title_Grade[] = [
      new Title_Grade("Sentimento de dono", tuningData.ownershipMentalityGrade),
      new Title_Grade("Capacidade de aprender", tuningData.learningAgilityGrade),
      new Title_Grade("Resiliência nas adversidades", tuningData.resilienceAdversityGrade), 
      new Title_Grade("Organização no trabalho", tuningData.outOfTheBoxThinkingBehavioralGrade),// Organização no trabalho
      new Title_Grade("Trabalho em equipe", tuningData.teamworkGrade),

      new Title_Grade("Entregar com qualidade", tuningData.deliveringQualityGrade),
      new Title_Grade("Fazer mais com menos", tuningData.doingMoreWithLessGrade),
      new Title_Grade("Atender aos prazos", tuningData.meetingDeadlinesGrade),
      new Title_Grade("Pensar fora da caixa", tuningData.outOfTheBoxThinkingExecutionGrade)
    ];

    // sorting the tile_grades in asc order
    tile_grades.sort((a, b) => b.grade - a.grade);
    
    console.log(tuningData);//Organização no trabalho
    console.log(">>> ", tile_grades.slice(0, 3));
    
    setLastCycleName(tuningData.cycle.cycleName);
    setBestGrades(tile_grades.slice(0, 3)); // getting the 3 best grades

  }, [tuningData]);


  useEffect(() => {
    if (prompt !== null && aiMessage === null && user) {
      runAI(prompt, user.role).then((response) => {
        setAiMessage(response);
      });
    }
  }, [prompt]);

  useEffect(() => {
    if (user?.id) {
      getTuningsByUserId(user.id, token).then((tunings) => {
        if (tunings) {
          let aux: GetTuningsByUserDto[] = [];
          for (let i = 0; i < tunings.length - 1; i++) { // ignores the current cycle
            aux.push(tunings[i]);
          } 
          setTunings(aux);
        }
      });
    }
  }, [user?.id]);
  

  const data = tunings.map(t => {
    const gradeMin = 0;
    const gradeMax = 5;
    // const normalizedGrade = (t.grade - gradeMin) / (gradeMax - gradeMin); 
    return(
      {
        name: t.cycle.cycleName,
        Media_da_Tuning: t.grade,
      }
    );
  });

  return (
    <main className="flex flex-row justify-center w-[1440px] h-screen max-h-screen p-6 bg-general-background text-white">
      <aside>
        <Menu></Menu>
      </aside>

      <div className="flex-1 p-6 bg-general-background h-[920px] w-[64.25rem]">
        <Header
          userName={user?.name || ""}
          profileImage={user?.imgUrl || ""}
          title="Página inicial"
        />

        <section className="flex flex-row mt-[27px] gap-x-[1rem]">
          <div className="flex flex-col p-4 pl-5 rounded-2xl w-[45rem] bg-content-background">
            <p className="font-bold text-28 leading-[42px] text-purple-text text-left">
              Bem vindo de volta, {user ? user.name : "Usuário"}!
            </p>
            <div className="flex items-start pt-8">
              <img src={flag} alt="flag" className="pr-3" />
              {daysToFinish > 0 ? (
                <p className="text-left">
                  O ciclo atual{" "}
                  <span className="text-purple-text">
                    fecha em {daysToFinish} dias
                  </span>{" "}
                  (Data de fechamento: {endDate})
                </p>
              ) : (
                <p className="text-left">
                  O ciclo atual{" "}
                  <span className="text-purple-text">fechou</span> (Data de
                  fechamento: {endDate})
                </p>
              )}
            </div>

            <div className="flex items-start pt-8">
              <img src={flag} alt="flag" className="pr-3" />
              <p className="text-left">
                Sua nota final do ciclo avaliativo de {_cycle?.cycleName} já
                está {/*TODO update to the last cycle, not the current*/}
                disponível na página Notas.
              </p>
            </div>
          </div>

          <div className="ml-auto bg-content-background pt-4 pl-4 pr-4 rounded-2xl w-[18.125rem] text-[12px]">
            <h2 className="text-center text-16 font-bold mb-4">Plano de melhoria</h2>
            <p className="pb-3">
              {lastTuning
                ? aiMessage
                  ? aiMessage
                  : "Aguarde..."
                : "Não há equalizações encontradas"}
            </p>
          </div>
        </section>

        <section className="mt-[14px] bg-content-background p-4 rounded-2xl">
          <h2 className="text-20 text-purple-text font-bold text-left mb-0">
            Suas maiores notas
          </h2>
          <p className="text-16 text-text text-left mb-4 ">
            Dados referentes ao último ciclo avaliativo realizado ({lastCycleName})
          </p>
          <div className="flex flex-row justify-between px-28">
            <div className="flex flex-col items-center bg-dark-zebra p-4 rounded-xl space-y-[8px] h-[220px]">
              <div className="w-full h-[120px] flex justify-center items-center overflow-hidden">
                <img
                  src={GroupMeeting}
                  alt="img"
                  className="h-full object-cover"
                />
              </div>
              <p className="font-normal text-16 leading-[24px]">
                {bestGrades[0]?.title}
              </p>
              {stars(bestGrades[0]?.grade)}
            </div>
            <div className="flex flex-col items-center bg-dark-zebra p-4 rounded-xl space-y-[8px] h-[220px]">
              <div className="w-full h-[120px] flex justify-center items-center overflow-hidden">
                <img
                  src={WorkingTogether}
                  alt="img"
                  className="h-full object-cover"
                />
              </div>
              <p className="font-normal text-16 leading-[24px]">
                {bestGrades[1]?.title}
              </p>
              {stars(bestGrades[1]?.grade)}
            </div>
            <div className="flex flex-col items-center bg-dark-zebra p-4 rounded-xl space-y-[8px] h-[220px]">
              <div className="w-full h-[120px] flex justify-center items-center overflow-hidden">
                <img
                  src={ReadingOnTopOfPileOfBooks}
                  alt="img"
                  className="h-full object-cover"
                />
              </div>
              <p className="font-normal text-16 leading-[24px]">
              {bestGrades[2]?.title}
              </p>
              {stars(bestGrades[2]?.grade)}
            </div>
          </div>
        </section>

        <section className="mt-[14px] bg-content-background p-4 rounded-2xl h-[268px]">
          <h2 className="text-20 text-purple-text font-bold text-left pb-2">
            Meu desempenho{" "}
            <span className="text-14 text-text font-normal ml-2">
              Confira seu desempenho de médias finais no último ciclo
            </span>
          </h2>
          <div className="">
            {/* Placeholder for a performance chart */}
            <div className="flex justify-center items-center h-full text-gray-500 ">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[1]} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Media_da_Tuning"
                    stroke="#8884d8"
                    fill="#A28BFE"
                    dot={<CustomDot />}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

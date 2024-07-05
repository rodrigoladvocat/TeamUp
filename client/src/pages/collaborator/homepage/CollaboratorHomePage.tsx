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

function stars(fill: 1 | 2 | 3 | 4 | 5) {
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

// TODO: como converter um inteiro em um ponto {uv, pv, amt} nesse array data ?
const data = [
  {
    name: "origin",
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2020.1",
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2020.2",
    uv: 2,
    pv: 1398,
    amt: 2210,
  },
  // {
  //   name: "2021.1",
  //   uv: 3,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: "2021.2",
  //   uv: 4,
  //   pv: 3908,
  //   amt: 2000,
  // },
  // {
  //   name: "2022.1",
  //   uv: 5,
  //   pv: 4800,
  //   amt: 2181,
  // },
  // {
  //   name: "2022.2",
  //   uv: 3,
  //   pv: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: "2023.1",
  //   uv: 3,
  //   pv: 4300,
  //   amt: 2100,
  // },
  // {
  //   name: "2023.2",
  //   uv: 5,
  //   pv: 4300,
  //   amt: 2100,
  // },
  // {
  //   name: "2024.1",
  //   uv: 1,
  //   pv: 4300,
  //   amt: 2100,
  // },
  // {
  //   name: "2024.2",
  //   uv: 2.5,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

const CustomDot = (props: any) => {
  const { cx, cy } = props;
  return <circle cx={cx} cy={cy} r={5} stroke="none" fill="#CCBFFF" />;
};

export default function CollaboratorHomePage(): JSX.Element {
  const { user, isAuthenticated, aiMessage, setAiMessage } = useAuth();
  const {
    _cycle,
    endDate,
    endTime,
    startDate,
    daysToFinish,
    callAllUpdates,
    selfEvalInfo,
  } = useCycle();
  const [lastCycleId, setLastCycleId] = useState(null);
  const [lastTuning, setLastTuning] = useState<any>(null);

  const [prompt, setPrompt] = useState<number[] | null>(null); // array of grades or null if there is no tuning

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    if (user) {
      // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, true);
    }
  }, []);

  useEffect(() => {
    if (user) {
      getLastCycle().then((cycle) => {
        if (cycle) {
          setLastCycleId(cycle.id);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    if (lastCycleId && user) {
      getTuningByUserAndCycleId(user.id, lastCycleId).then((tuning) => {
        setLastTuning(tuning);
      });
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
    if (prompt !== null && aiMessage === null && user) {
      runAI(prompt, user.role).then((response) => {
        setAiMessage(response);
      });
    }
  }, [prompt]);

  return (
    <main className="flex justify-center h-screen max-h-screen p-6 bg-general-background text-white">
      <div className="flex">
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
                Bem vindo de volta Pedro!
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
              <h2 className="text-left text-16 mb-4">Plano de melhoria</h2>
              <p>
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
              Dados referentes ao último ciclo avaliativo realizado (...)
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
                  Capacidade de aprender
                </p>
                {stars(2)}
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
                  Trabalho em equipe
                </p>
                {stars(5)}
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
                  Organização no trabalho
                </p>
                {stars(5)}
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
                    <YAxis domain={[1, 0.5, 5]} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
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
      </div>
    </main>
  );
}

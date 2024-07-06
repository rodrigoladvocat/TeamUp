import Header from "../../../components/Header";
import { Menu } from "../../../components/Menu";

import ProgressBar from "../../../components/ProgressBar";

import flag from "../../../assets/flag.svg";
import vector from "../../../assets/vector.svg";
import vector_horizontal from "../../../assets/vector_horizontal.svg";
import concept_icons from "../../../assets/concept_icons";
import { useState, useEffect } from "react";

import { getTuningByCycleId } from "../../../utils/getTuningByCycleId";
import { getLastCycle } from "../../../utils/getLastCycle";
import ProfilePictureSequence from "../../../components/ProfilePictureSequence";
// order grades and display the 4 best and 4 worst

import { average } from "@/utils/average";
import { useMenu } from "@/context/MenuContext";
import { useAuth } from "@/hooks/AuthUser";
import { useNavigate } from "react-router-dom";
import { useCycle } from "@/hooks/useCycle";
import { GetTunningByCycleDto } from "@/dto/GetTunningByCycleDto";

class Title_Grade {
  constructor(public title: string, public grade: number) {
    this.title = title;
    this.grade = grade;
  }
}

export default function ManagerHomePage(): JSX.Element {

    // const { setMenu } = useMenu();

    const {user, isAuthenticated} = useAuth();
    const [ cycleId, setCycleId ] = useState<number | null>(null);
    const [ cycle, setCycle ] = useState<any>(null);
    const [ tuningData, setTuningData ] = useState<GetTunningByCycleDto[]>([]);
    const [ picturesArrayExcepcional, setPicturesArrayExcepcional ] = useState<string[]>([]);
    const [ picturesArrayMuitoBom, setPicturesArrayMuitoBom ] = useState<string[]>([]);
    const [ picturesArrayFezOBasico, setPicturesArrayFezOBasico ] = useState<string[]>([]);
    const [ picturesArrayPrecisoMelhorar, setPicturesArrayPrecisoMelhorar ] = useState<string[]>([]); 
    const [ bestGrades, setBestGrades ] = useState<any[]>([]); // 4 items
    const [ worstGrades, setWorstGrades ] = useState<any[]>([]); // 4 items

    const { endDate, daysToFinish, callAllUpdates} = useCycle();

    const navigate = useNavigate();


    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
  
      if (user) { // user is always (should be) defined when isAuthenticated (true)
        callAllUpdates(user.id, true);
      }
    }, []);

    useEffect(() => {
      // setMenu(0);
      
      getLastCycle().then((_cycle) => {
        setCycle(_cycle)
        if (_cycle !== null) {
          setCycleId(_cycle.id);
        }
        else {
          setCycleId(null);
        }
      });
      
    }, []); // runs once when the component is mounted
    
    useEffect(() => {
      if (cycleId !== null) { // if a cycleId was found
        getTuningByCycleId(cycleId).then((data) => {
          if (data) {
            setTuningData(data);
          }
        });
      }
      else {
        setTuningData([]);
      }
    }, [cycleId]); // runs when cycleId changes => guarantees that this happens after the first useEffect

    useEffect(() => {

      // Populate picturesArrays whenever tuningData changes
      let _picturesArrayExcepcional: any[] = [];
      let _picturesArrayMuitoBom: any[] = [];
      let _picturesArrayFezOBasico: any[] = [];
      let _picturesArrayPrecisoMelhorar: any[] = [];

      tuningData.forEach((tuning: any) => {
        if (tuning.grade >= 4 && _picturesArrayExcepcional.length <= 3) {
          _picturesArrayExcepcional.push(tuning.evaluated.imgUrl);
        }
        else if (tuning.grade > 3 && _picturesArrayMuitoBom.length <= 3) {
          _picturesArrayMuitoBom.push(tuning.evaluated.imgUrl);
        }
        else if (tuning.grade > 2 && _picturesArrayFezOBasico.length <= 3) {
          _picturesArrayFezOBasico.push(tuning.evaluated.imgUrl);
        }
        else if ( _picturesArrayPrecisoMelhorar.length <= 3){
          _picturesArrayPrecisoMelhorar.push(tuning.evaluated.imgUrl);
      }})

      setPicturesArrayExcepcional(_picturesArrayExcepcional);
      setPicturesArrayMuitoBom(_picturesArrayMuitoBom);
      setPicturesArrayFezOBasico(_picturesArrayFezOBasico);
      setPicturesArrayPrecisoMelhorar(_picturesArrayPrecisoMelhorar);

    }, [tuningData]);


    // setting the best and worst grades
    useEffect(() => { 
      let ownerShipMentalityGrades: number[] = [];
      let learningAgilityGrades: number[] = [];
      let resilienceAdversityGrades: number[] = [];
      let teamworkGrades: number[] = [];
      let outOfTheBoxThinkingBehavioralGrades: number[] = [];
      let deliveringQualityGrades: number[] = [];
      let meetingDeadlinesGrades: number[] = [];
      let doingMoreWithLessGrades: number[] = [];
      let outOfTheBoxThinkingExecutionGrades: number[] = [];

      // averages
      let ownerShipMentalityAverage: number = 0;
      let learningAgilityAverage: number = 0;
      let resilienceAdversityAverage: number = 0;
      let teamworkAverage: number = 0;
      let outOfTheBoxThinkingBehavioralAverage: number = 0;
      let deliveringQualityAverage: number = 0;
      let meetingDeadlinesAverage: number = 0;
      let doingMoreWithLessAverage: number = 0;
      let outOfTheBoxThinkingExecutionAverage: number = 0;

      tuningData.forEach((tuning: any) => {
        ownerShipMentalityGrades.push(tuning.ownershipMentalityGrade);
        learningAgilityGrades.push(tuning.learningAgilityGrade);
        resilienceAdversityGrades.push(tuning.resilienceAdversityGrade);
        teamworkGrades.push(tuning.teamworkGrade);
        outOfTheBoxThinkingBehavioralGrades.push(tuning.outOfTheBoxThinkingBehavioralGrade);
        deliveringQualityGrades.push(tuning.deliveringQualityGrade);
        meetingDeadlinesGrades.push(tuning.meetingDeadlinesGrade);
        doingMoreWithLessGrades.push(tuning.doingMoreWithLessGrade);
        outOfTheBoxThinkingExecutionGrades.push(tuning.outOfTheBoxThinkingExecutionGrade);
      });

      // setting the averages for each criteria (returns 0 if there are no tunings)
      ownerShipMentalityAverage = average(ownerShipMentalityGrades);
      learningAgilityAverage = average(learningAgilityGrades);
      resilienceAdversityAverage = average(resilienceAdversityGrades);
      teamworkAverage = average(teamworkGrades);
      outOfTheBoxThinkingBehavioralAverage = average(outOfTheBoxThinkingBehavioralGrades);
      deliveringQualityAverage = average(deliveringQualityGrades);
      meetingDeadlinesAverage = average(meetingDeadlinesGrades);
      doingMoreWithLessAverage = average(doingMoreWithLessGrades);
      outOfTheBoxThinkingExecutionAverage = average(outOfTheBoxThinkingExecutionGrades);

      let averagesList: Title_Grade[] = [
        new Title_Grade("Sentimento de dono", ownerShipMentalityAverage),
        new Title_Grade("Learning Agility", learningAgilityAverage),
        new Title_Grade("Resilience Adversity", resilienceAdversityAverage),
        new Title_Grade("Teamwork", teamworkAverage),
        new Title_Grade("Out Of The Box Thinking Behavioral", outOfTheBoxThinkingBehavioralAverage),
        new Title_Grade("Delivering Quality", deliveringQualityAverage),
        new Title_Grade("Meeting Deadlines", meetingDeadlinesAverage),
        new Title_Grade("Doing More With Less", doingMoreWithLessAverage),
        new Title_Grade("Out Of The Box Thinking Execution", outOfTheBoxThinkingExecutionAverage)
      ];

      // sorting the averagesList in asc order
      averagesList.sort((a, b) => b.grade - a.grade);

      setBestGrades(averagesList.slice(0, 4)); // getting the 4 best grades
      setWorstGrades(averagesList.slice(averagesList.length - 4, averagesList.length)); // getting the 4 worst grades 

    }, [tuningData])

    return (
      <div className="flex flex-row justify-center w-[1440px] h-screen min-h-screen p-6 bg-general-background text-white">
        <aside>
          <Menu></Menu>
        </aside>

        <main className="flex-1 p-6 bg-general-background h-[920px]">

          <Header 
            userName={user ? user.name : "null"} 
            profileImage={user ? user.imgUrl : ""} 
            title="Página inicial"
          />
          
          <div className="flex flex-row gap-x-[1rem] max-w-[64.25rem] mb-6">
            <div className="flex-1 col-span-2 bg-content-background p-4 pl-5 rounded-2xl w-[45rem]">
              <p className="text-28 text-purple-text font-bold text-left">
                Bem vindo de volta, {user ? user.name : "usuario"}!
              </p>
              <div className="flex items-start pt-8">
                <img src={flag} alt="flag" className="pr-3" />
                {
                  daysToFinish > 0 ? <p className="text-left">
                    O ciclo atual{" "}
                    <span className="text-purple-text">fecha em {daysToFinish} dias</span>{" "}
                    (Data de fechamento: {endDate})
                  </p>
                  :
                  <p className="text-left">
                    O ciclo atual{" "}
                    <span className="text-purple-text">fechou</span>{" "}
                    (Data de fechamento: {endDate})
                  </p>
                }
              </div>

              <div className="flex items-start pt-8">
                <img src={flag} alt="flag" className="pr-3" />
                <p className="text-left">
                  As notas do ciclo {cycle ? cycle.cycleName : "not found"} já estão
                  disponíveis.
                </p>
              </div>
            </div>
            <div className="bg-content-background py-4 rounded-2xl w-[17rem]">
              <h2 className="text-16 mb-4">Avaliações entregues</h2>
              <div className="flex justify-center items-center">
                <div className="w-32 h-32">
                  <ProgressBar />
                </div>
              </div>
              <p className="text-12">Ciclo avaliativo {cycle !== null ? cycle.cycleName : "not found"}</p>
            </div>
          </div>

          <div className="flex align-center mb-6 h-[270px] bg-content-background pl-5 pr-4 rounded-2xl">
            <div className="flex-1">
                <h2 className="text-20 text-purple-text font-bold text-left mt-3">
                    Análise
                </h2>

                <div className="text-center mt-6 w-[400px]">
                    <ul>
                        <li className="text-left text-green font-bold mb-10">
                            <span>Critérios com as maiores notas</span>
                        </li>

                        {bestGrades.map((grade, index) => {
                          return (
                            <li className="flex justify-between" key={index}>
                              <span>{grade.title}</span>
                              <span>Média: {grade.grade.toFixed(1)}</span>
                            </li>
                          );
                        })}
                    </ul>
                </div>
            </div>

            <div>
              <img src={vector} alt="vector" className="my-3"/>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
                <div className="ml-8 mt-2 w-[400px]">
                    <ul>
                    <li className="text-left text-red font-bold mb-10">
                            <span>Critérios com as menores notas</span>
                    </li>
                    
                        {worstGrades.map((grade, index) => {
                          return (
                            <li className="flex justify-between" key={index}>
                              <span>{grade.title}</span>
                              <span>Média: {grade.grade.toFixed(1)}</span>
                            </li>
                          );
                        })}
                    </ul>
                </div>
            </div>
            
            </div>

            <div className="flex mb-6 h-[290px] bg-content-background pl-5 rounded-2xl">
              <div className="flex-1">
                <div className="mt-3">
                  <h2 className="text-20 text-purple-text font-bold text-left">
                      Conceitos
                  </h2>
                </div>

                <div className="flex-1 text-left">
                  <p>Referentes ao ciclo avaliativo {cycle !== null ? cycle.cycleName : "not found"}</p>
                </div>

                <div className="flex-1 flex flex-row mt-3">
                  <div className="">
                    {concept_icons.excepcional}
                  </div>

                  <div className="flex-2 my-4 mx-4">
                    <img src={vector_horizontal} alt="vector" />
                  </div>

                  <ProfilePictureSequence pictures={picturesArrayExcepcional}/>
                </div>

                <div className="flex-1 flex flex-row mt-4">
                    <div className="">
                      {concept_icons.muito_bom}
                    </div>

                    <div className="flex-2 my-4 mx-4">
                      <img src={vector_horizontal} alt="vector" />
                    </div>

                    <ProfilePictureSequence pictures={picturesArrayMuitoBom}/>
                </div>

                <div className="flex-1 flex flex-row mt-4">
                  <div className="">
                    {concept_icons.fez_o_basico}
                  </div>

                    <div className="flex-2 my-4 mx-4">
                      <img src={vector_horizontal} alt="vector" />
                    </div>

                    <ProfilePictureSequence pictures={picturesArrayFezOBasico}/>
                </div>

                <div className="flex-1 flex flex-row items-center mt-4">
                  <div className="">
                    {concept_icons.preciso_melhorar}
                  </div>

                    <div className="flex-2 my-4 mx-4">
                      <img src={vector_horizontal} alt="vector" />
                    </div>

                    <ProfilePictureSequence pictures={picturesArrayPrecisoMelhorar}/>
                </div>

              </div>  
            </div>
        </main>
    </div>
    );
}

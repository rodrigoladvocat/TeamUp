import Header from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { Button } from "@/components/ui/button";
// import { getCurrentCycle } from "@/utils/getCurrentCycle";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/AuthUser";
// import { getAutoEval } from "@/utils/getAutoEval";
// import { evaluatorGetsOthersEval } from "@/utils/evaluatorGetsOthersEval";
// import DateFormat from "@/utils/dateTime/DateFormat";
import { useCycle } from "@/hooks/useCycle";
import { useNavigate } from "react-router-dom";
import TagStage from "@/components/TagStage";
import { stage } from "@/utils/types/stageType";
import { useMenu } from "@/context/MenuContext";



export default function CycleCollaboratorPage(): JSX.Element {
  const navigate = useNavigate();
  const { _cycle, endDate, endTime, startDate, selfEvalInfo, othersEvalInfo, callAllUpdates } = useCycle();
  const { user, isAuthenticated } = useAuth();
  const [othersLastUpdated, setOthersLastUpdated] = useState(null);
  const [cycle, setCycle] = useState<any>(null);
  const {setMenu} = useMenu();

  const formatter = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });


  useEffect(() => {
    setMenu(2);

    if (!isAuthenticated) {
      navigate('/login');
    }

    if (user) { // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, false);
    }
  }, []);

  useEffect(() => {
    if (_cycle === null) {
      setCycle(null);
    }
    else if (new Date(_cycle.finalDate) < new Date()) {
      setCycle(null);
    }
    else {
      setCycle(_cycle);
    }
  }, [_cycle])

  useEffect(() => {
    let auxOthersLastUpdated: any = null;
    othersEvalInfo.othersLastUpdated.forEach((date: string) => {
      if (auxOthersLastUpdated === null) {
        auxOthersLastUpdated = date;
      } else {
        if (new Date(date) > new Date(auxOthersLastUpdated)) {
          auxOthersLastUpdated = date;
        }
      }
    });

    if (auxOthersLastUpdated !== null) {
      auxOthersLastUpdated = formatter.format(new Date(auxOthersLastUpdated));
    }
    setOthersLastUpdated(auxOthersLastUpdated)

  }, [othersEvalInfo])

  function calculateOthersStage(stages: stage[]): stage {

    if (stages.length === 0) {
      return "Não iniciado";
    }

    const isFinished = stages.every((stage) => stage === "Entregue")
    if ( isFinished ) {
      return "Entregue";
    } 
    
    // Considerando que não pode ter um estado salvo "Em andamento" no backend.
    // Nunca vai entrar nesse if
    const hasMadeProgress = stages.some((stage) => stage === "Em andamento" || stage === "Entregue")
    if ( hasMadeProgress ) {
      return "Em andamento"; 
    } 

    return "Não iniciado";
  }

  return (
      <div className="flex w-full p-6 min-h-screen text-white">
        <div className="flex">
          <aside>
            <Menu></Menu>
          </aside>

          <main className="flex-1 p-6 text-left font-poppins">
            
          <Header 
            userName={user?.name || ""} 
            subtitle={cycle === null ? "Aguarde o próximo período avaliativo" : `Período aberto em ${startDate} e termina em ${endDate} às ${endTime}`} 
            profileImage={user?.imgUrl || ""} 
            title="Sobre a Plataforma"
          />

            <div className="flex flex-col flex-1 p-6 gap-[3.5rem]">
                <p>
                    Escolha o tipo de avaliação que deseja realizar, lembrando que é necessário que todos os colaboradores realizem ambas as avaliações, que ficam abertas e sujeitas a edição até o final do ciclo avaliativo.
                </p>

                <div className="flex flex-col">
                    <div className="text-28 text-purple-text font-bold">
                        Recomendações 
                    </div>

                    <div className="mt-2">
                        A sua avaliação é muito importante para nós, então reserve um tempo para respondê-la para que o ciclo consiga ser o mais proveitoso possível e também deixamos aqui algumas recomendações:
                    </div>

                    <div className="mt-4">
                        <span className="text-purple-text text-20">Seja Objetivo e Honesto:</span>
                        <span> Ao avaliar, seja claro e específico em suas observações, destacando fatos e exemplos concretos. A honestidade é crucial para identificar pontos fortes e áreas de melhoria.</span>
                    </div>

                    <div className="mt-4">
                        <span className="text-purple-text text-20">Equilíbrio:</span>
                        <span> Balanceie os feedbacks positivos e negativos. Reconhecer realizações e esforços é tão importante quanto identificar áreas de melhoria.</span>
                    </div>

                    <div className="mt-4">
                        <span className="text-purple-text text-20">Feedback Construtivo:</span>
                        <span> Ao apontar áreas de melhoria, forneça sugestões práticas e construtivas para o desenvolvimento do colaborador. O objetivo é ajudar na evolução profissional e pessoal.</span>
                    </div>
                </div>
              {
              cycle ?
              
                <div className="p-6 rounded-xl border border-purple-text mt-5">
                  <div className="text-purple-text text-[20px] font-bold ml-[5.5rem]">
                    Ciclo avaliativo {cycle ? cycle.cycleName : "cycle not found"}
                  </div>
                  <div className="space-y-9 mt-7">
                    <div className="flex items-center justify-between">
                    <div className="flex-1 flex items-center justify-center">
                        <span className="text-purple-text">Tipo de avaliação:</span>
                        </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-purple-text">Última atualização:</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-purple-text">Status:</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-center">
                        <Button variant="default" size="default" 
                          className="text-black w-[168px] h-[48px]" 
                          onClick={() => {navigate("/self-evaluation")}}
                        >
                          Autoavaliação
                        </Button>
                      </div>
                      <div className="flex-1 flex items-center justify-center text-[#D3C8FF]">
                        <p>{selfEvalInfo.selfLastUpdated || "----"}</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <TagStage stage={selfEvalInfo.selfEvalStage}/>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-center">
                        <Button variant="default" size="default" 
                          className="text-black w-[168px] h-[48px]" 
                          onClick={() => {navigate("/others-evaluation")}}
                        >
                          Avaliação 360°
                        </Button>
                      </div>
                      <div className="flex-1 flex items-center justify-center text-[#D3C8FF]">
                        <p>{othersLastUpdated === null ? "----" : othersLastUpdated}</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <TagStage stage={calculateOthersStage(othersEvalInfo.othersEvalStage)}/>
                      </div>
                    </div>
                  </div>
                </div>

                :
                <div className="flex flex-col justify-center p-6 rounded-xl border border-purple-text h-[18rem]">
                  <div className="text-purple-text text-center text-32 font-bold">
                    Ciclo avaliativo finalizado.
                  </div>
                </div>
              }
            </div>
          </main>
        </div>
      </div>
  );
};


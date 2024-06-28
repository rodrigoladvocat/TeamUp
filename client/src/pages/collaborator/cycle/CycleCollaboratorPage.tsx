import Header from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { useMenu } from "../../../context/MenuContext";
import { Button } from "@/components/ui/button";
import { getCurrentCycle } from "@/utils/getCurrentCycle";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/AuthUser";
import { getAutoEval } from "@/utils/getAutoEval";
import { evaluatorGetsOthersEval } from "@/utils/evaluatorGetsOthersEval";
import DateFormat from "@/utils/dateformat/DateFormat";

const Page = () => {
  const { setMenu } = useMenu();
  const { user } = useAuth(); // user has to be logged in
  const [ cycle_dates_message, setcycle_dates_message ] = useState<string>("");
  const [ autoEval, setAutoEval] = useState<any>(null);                         // autoeval object or null
  const [ othersEval, setOthersEval] = useState<any>([]);
  const [ lastUpdatedDateEval, setLastUpdatedDateEval ] = useState<Date | null>(null);

  setMenu(2);

  const [cycle, setCycle] = useState<any>(-1); // either -1 for no cycle or the cycle object

  // sets the current cycle
  useEffect(() => {
    getCurrentCycle().then( (_cycle) => {
      setCycle(_cycle);
    })

  }, []);

  // if the cycle is found, sets the cycle_dates_message
  useEffect(() => {
    let finalDate= new Date(cycle.finalDate);
    let initialDate= new Date(cycle.initialDate);

    if(cycle !== -1) {
      setcycle_dates_message(`Período aberto em ${DateFormat(initialDate)} e termina em ${DateFormat(finalDate)}`);
    }

  }, [cycle]);

  // if the user is logged in and the cycle is found, gets the autoeval and othersEval
  useEffect(() => {
    if (user !== null && cycle !== -1){
      getAutoEval(user?.id, cycle.id).then(
        (response) => {
          setAutoEval(response);
        }
      );

      evaluatorGetsOthersEval(user?.id, cycle.id).then((response) => {
        setOthersEval(response);
      }
    );
    }
  }, [cycle]);

  // gets the last updated date of the othersEval
  useEffect(() => {
    let lastUpdatedDate: Date | null = null;
    othersEval.forEach((evaluation: any) => {
      if (lastUpdatedDate === null || evaluation.lastUpdated > lastUpdatedDate) {
        lastUpdatedDate = evaluation.lastUpdated;
      }
    });
    setLastUpdatedDateEval(lastUpdatedDate);  
  }, [othersEval]);

  return (
      <div className="flex w-full p-6 min-h-screen text-white">
        <div className="flex">
          <aside>
            <div>
              <Menu></Menu>
            </div>
          </aside>

          <main className="flex-1 p-6 text-left font-poppins">
            
          <Header userName="Pedro Almeida" subtitle={cycle_dates_message} profileImage="/profile.jpg" title="Sobre a Plataforma"/>

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
                        <Button variant="default" size="default" className="text-black" onClick={() => {{/*navigate to autoeval*/}}}>
                          Autoavaliação
                        </Button>
                      </div>
                      <div className="flex-1 flex items-center justify-center text-[#D3C8FF]">
                        <p>{autoEval !== null ? DateFormat(autoEval.lastUpdated) : "----"}</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="inline-block px-2 py-1 text-sm font-medium text-yellow-900 rounded-md">
                          {autoEval !== null ? "Em andamento" : "Não iniciado"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-center">
                        <Button variant="default" size="default" className="text-black" onClick={() => {{/*navigate to otherseval*/}}}>
                          Avaliação 360°
                        </Button>
                      </div>
                      <div className="flex-1 flex items-center justify-center text-[#D3C8FF]">
                        <p>{lastUpdatedDateEval !== null ? DateFormat(new Date(lastUpdatedDateEval)) : "----"}</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="inline-block px-2 py-1 text-sm font-medium text-gray-900 bg-gray-500 rounded-md">
                          {othersEval.length === 0 ? "Não iniciado" : "Em andamento"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </main>
        </div>
      </div>
  );
};

export default Page;


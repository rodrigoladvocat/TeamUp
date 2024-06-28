import Header from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { useMenu } from "../../../context/MenuContext";
import { Button } from "@/components/ui/button";

// missing backend integration!

const Page = () => {
  const { setMenu } = useMenu();
  setMenu(1);
  
  return (
      <div className="flex w-full p-6 min-h-screen text-white">
        <div className="flex">
          <aside>
            <div>
              <Menu></Menu>
            </div>
          </aside>

          <main className="flex-1 p-6 text-left font-poppins">
            
          <Header userName="Pedro Almeida" subtitle="*data de inicio e fim do ciclo atual" profileImage="/profile.jpg" title="Sobre a Plataforma"/>

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
                    Ciclo avaliativo 2023.2
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
                        <Button variant="default" size="default">
                          Autoavaliação
                        </Button>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <p>31/05/2024 às 22:35</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="inline-block px-2 py-1 text-sm font-medium text-yellow-900 bg-yellow-500 rounded-md">
                          Em andamento
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-center">
                        <Button variant="default" size="default">
                          Avaliação 360°
                        </Button>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <p>31/05/2024 às 22:40</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="inline-block px-2 py-1 text-sm font-medium text-gray-900 bg-gray-500 rounded-md">
                          Não iniciado
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

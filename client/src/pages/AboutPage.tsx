import { useAuth } from "@/hooks/AuthUser";
import img_evaluation from "../assets/img_evaluation.svg";
import img_historic from "../assets/img_historic.svg";
import img_performance_analysis from "../assets/img_performance_analysis.svg";
import img_tracking from "../assets/tracking.svg";
import Header from "../components/Header";
import { Menu } from "../components/Menu";
import { useMenu } from "@/context/MenuContext";
import { useEffect } from "react";

export default function AboutPage(): JSX.Element {
  const { user } = useAuth();
  const { setMenu } = useMenu();

  useEffect(() => {
    setMenu(3);
  }, []);

  return (
      <div className="flex flex-row w-screen h-screen justify-center max-h-screen p-6 bg-general-background text-white">
        <div className="flex">
          <aside>
            <Menu></Menu>
          </aside>

          <main className="flex-1 p-6 bg-general-background h-[920px] w-[64.25rem]">
            
          <Header userName={user?.name || ""} profileImage={user?.imgUrl || ""} title="Sobre a Plataforma"/>

            <div className="flex-1 bg-content-background h-[830px] max-w-[64.25rem]">
              <div className="flex-1 bg-content-background p-8 pt-4 pb-2 ">
                <div className="text-left text-32 text-purple-text font-poppins font-bold">
                  Propósito
                </div>

                <div className="text-left font-poppins text-base">
                  A plataforma TeamUp! tem como principal objetivo ser uma
                  ferramenta eficaz para o gerenciamento e a gestão da
                  performance dos colaboradores de uma empresa. Através dela, é
                  possível registrar o desempenho individual e compartilhar a
                  visão que um colaborador tem sobre o outro, permitindo que
                  todos conheçam seus pontos fortes e identifiquem áreas de
                  melhoria. Tudo isso é feito de maneira confidencial e
                  discreta, garantindo a privacidade dos colaboradores.Com uma
                  gestão aprimorada do desempenho, as empresas podem desenvolver
                  estratégias para maximizar o potencial de cada colaborador,
                  fortalecendo sua posição no mercado e impulsionando o sucesso
                  organizacional.
                </div>
              </div>

              <div className="flex-1 bg-content-background p-8 pt-2">
                <div className="text-left text-32 text-purple-text font-poppins font-bold">
                  Funcionalidades
                </div>

                <div className="grid grid-cols-3 pb-8 place-items-center">
                  <div className="p-4 text-center w-[14.313rem] h-[12.5rem]">
                    <div className="flex justify-center">
                      <img src={img_evaluation} alt="img" className="img w-[197px] h-[197px]" />
                    </div>
                    <p className="text-28 p-2 pt-0 text-purple-text font-poppins h-[74px] text-center pt-3 font-bold">
                      Avaliação
                    </p>

                    <p className="pt-6 font-poppins">
                      { 
                        !user?.isManager ?
                        "Realize avaliações pessoais e a respeito dos seus colegas de trabalho através de critérios e dados qualitativos."
                        :
                        "Realize avaliações a respeito dos colaboradores através de critérios e dados qualitativos."
                      }
                    </p>
                  </div>

                  <div className="p-4 text-center h-[12.5rem]">
                    {!user?.isManager ?
                      <div className="w-[14.313rem]"> 
                        <div className="flex justify-center ">
                          <img src={img_historic} alt="img" className="img w-[197px] h-[197px]" />
                        </div>
                        <p className="text-28 p-2 text-purple-text font-poppins h-[74px] text-center pt-3 font-bold">
                          Histórico
                        </p>

                        <p className="pt-6 font-poppins">
                          Acompanhe o resultado de todas as avaliações que você
                          participou ao longo dos anos.
                        </p>
                      </div>
                      : 
                      <> 
                        <div className="flex justify-center items-center">
                          <img src={img_historic} alt="img" className="img w-[197px] h-[197px]" />
                        </div>
                        <p className="text-[28px] text-purple-text font-poppins h-[74px] text-center pt-3 font-bold">
                          Acompanhamento
                        </p>

                        <p className="pt-6 font-poppins">
                          Acompanhe o andamento do ciclo avaliativo e tenha acesso as notas e feedbacks de cada colaborador.
                        </p>
                      </>
                    }
                  </div>

                  <div className=" p-4 text-center w-[14.313rem] h-[12.5rem]">
                    <div className="flex justify-center">
                      <img
                        src={img_performance_analysis}
                        alt="img"
                        className="img w-[197px] h-[197px]"
                      />
                    </div>
                    <p className="text-28 p-2 pt-0 text-purple-text font-poppins h-[74px] text-center font-bold">
                      Análise de desempenho
                    </p>

                    <p className="pt-6 font-poppins">
                      {
                        !user?.isManager ?
                        "Observe com detalhes a sua evolução ao longo dos anos por critérios avaliativo e saiba em que ponto melhorar para elevar o seu nível profissional."
                        :
                        "Observe com detalhes a  evolução do seu time ao longo dos anos por critérios avaliativo e tenha informações para insights para aperfeiçoar a performance deles."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
};

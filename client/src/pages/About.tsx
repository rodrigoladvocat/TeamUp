import { Menu } from "../components/Menu";
import { useMenu } from "../context/MenuContext";
import img_evaluation from "../assets/img_evaluation.svg";
import img_historic from "../assets/img_historic.svg";
import img_performance_analysis from "../assets/img_performance_analysis.svg";

const About = () => {
  const { setMenu } = useMenu();
  setMenu(3);
  return (
    <div className="flex">
      <div>
        <Menu></Menu>
      </div>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="flex">
          <aside></aside>

          <main className="flex-1 p-6 bg-general-background h-[920px]">
            <header className="flex justify-between items-center mb-6">
              <h1 className="text-32 text-purple-text font-poppins">
                Sobre a plataforma
              </h1>
              <div className="flex items-center">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span>Pedro Almeida</span>
              </div>
            </header>
            <div className="flex-1 bg-content-background h-[830px]">
              <div className="flex-1 bg-content-background p-8 pt-4 pb-2 ">
                <div className="text-left text-32 text-purple-text font-poppins">
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
                <div className="text-left text-32 text-purple-text font-poppins">
                  Funcionalidades
                </div>

                <div className="grid grid-cols-3 pb-8 ml-5">
                  <div className="p-4 text-center w-[14.313rem] h-[12.5rem]">
                    <div className="flex justify-center">
                      <img src={img_evaluation} alt="img" className="img" />
                    </div>
                    <p className="text-28 p-2 pt-0 text-purple-text font-poppins h-[74px] text-center pt-3">
                      Avaliação
                    </p>

                    <p className="pt-6 font-poppins">
                      Realize avaliações pessoais e a respeito dos seus colegas
                      de trabalho através de critérios e dados qualitativos.
                    </p>
                  </div>

                  <div className="p-4 text-center w-[14.313rem] h-[12.5rem]">
                    <div className="flex justify-center">
                      <img src={img_historic} alt="img" className="img" />
                    </div>
                    <p className="text-28 p-2 pt-0 text-purple-text font-poppins h-[74px] text-center pt-3">
                      Histórico
                    </p>

                    <p className="pt-6 font-poppins">
                      Acompanhe o resultado de todas as avaliações que você
                      participou ao longo dos anos.
                    </p>
                  </div>

                  <div className=" p-4 text-center w-[14.313rem] h-[12.5rem]">
                    <div className="flex justify-center">
                      <img
                        src={img_performance_analysis}
                        alt="img"
                        className="img"
                      />
                    </div>
                    <p className="text-28 p-2 pt-0 text-purple-text font-poppins h-[74px] text-center">
                      Análise de desempenho
                    </p>

                    <p className="pt-6 font-poppins">
                      Observe com detalhes a sua evolução ao longo dos anos por
                      critérios avaliativo e saiba em que ponto melhorar para
                      elevar o seu nível profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;

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
    <div className="flex flex-row w-[1440px] justify-center h-screen max-h-screen p-6 bg-general-background text-white">
        <aside>
          <Menu></Menu>
        </aside>

        <main className="p-6 bg-general-background">
          <Header
            userName={user?.name || ""}
            profileImage={user?.imgUrl || ""}
            title="Sobre a Plataforma"
          />
          <div className="overflow-y-scroll h-[813px] mt-8">
            <div className="flex-1 bg-content-background h-[820px] max-w-[64.25rem]">
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
                      <img
                        src={img_evaluation}
                        alt="img"
                        className="img w-[197px] h-[197px]"
                      />
                    </div>
                    <div className="text-28 p-2 text-purple-text font-poppins h-[74px] text-center pt-3 font-bold">
                      Avaliações
                    </div>

                    <p className="pt-6 font-poppins">
                      {!user?.isManager
                        ? "Realize avaliações pessoais e a respeito dos seus colegas de trabalho através de critérios e dados qualitativos."
                        : "Realize avaliações a respeito dos colaboradores através de critérios e dados qualitativos."}
                    </p>
                  </div>

                  <div className="p-4 text-center h-[12.5rem]">
                    {!user?.isManager ? (
                      <div className="w-[14.313rem]">
                        <div className="flex justify-center ">
                          <img
                            src={img_historic}
                            alt="img"
                            className="img w-[197px] h-[197px]"
                          />
                        </div>
                        <p className="text-28 p-2 text-purple-text font-poppins h-[74px] text-center pt-3 font-bold">
                          Histórico
                        </p>

                        <p className="pt-6 font-poppins">
                          Acompanhe o resultado de todas as avaliações que você
                          participou ao longo dos anos.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-center items-center">
                          <img
                            src={img_historic}
                            alt="img"
                            className="img w-[197px] h-[197px]"
                          />
                        </div>
                        <p className="text-[28px] text-purple-text font-poppins h-[74px] text-center pt-3 font-bold">
                          Acompanhamento
                        </p>

                        <p className="pt-6 font-poppins">
                          Acompanhe o andamento do ciclo avaliativo e tenha
                          acesso as notas e feedbacks de cada colaborador.
                        </p>
                      </>
                    )}
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
                      {!user?.isManager
                        ? "Observe com detalhes a sua evolução ao longo dos anos por critérios avaliativo e saiba em que ponto melhorar para elevar o seu nível profissional."
                        : "Observe com detalhes a  evolução do seu time ao longo dos anos por critérios avaliativo e tenha informações para insights para aperfeiçoar a performance deles."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-content-background text-white p-8">
              <div className="text-left text-32 text-purple-text font-poppins font-bold pb-6">
                Processo de avaliação
              </div>
              <div className="relative">
                <div className="absolute border-l-4 border-white h-[90%] left-1/2 transform -translate-x-1/2"></div>
                <div className="mb-[118px]">
                  <div className="flex justify-between items-start w-full">
                    <div className="w-1/2 flex items-center justify-end pr-8">
                      <div className="bg-primary h-[48px] w-[48px] rounded-full transform translate-x-14 flex items-center justify-center">
                        <div className="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <image
                              id="image0"
                              width="32"
                              height="32"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEY0lEQVR4nO2dXYhVVRTHfyo65aSIpUkqKeljqBDNGEQIjkwQmA+hSFEYWSgkqVAGkg9FA75UKlgIokRlMpSKvilkUCCVRqj00hA5UUmZpjlj6o4Na+Aw3HPvOfd83HX2XT/4wzAc7jn7v+7Zn2vvC4ZhGIZhGIZhGIZhGIZhGAoYA9wHLAJ6gJXAOuBV0WZgWasfMgQ6gUeBDcBO4BhwHrgOuAT6sNUFqBLjgIeA9cBe4AfgZkKj68m/IUYMM4C1wEHgzxzMrqXX4m7ezqZvAE4CtwoyPaotrS6wluplKfApcKME06PaSBszWXokv5RselQv0obcDfQBf7fQ+BE9RRsxUfrhlxQYP6IltAkrgUEFho/WQgJnFnBEgdFx8r2uYHkWuKzA5Dhdk2mL4LgDeFeBwY3kR9PB8QDwvQJzk+gwgfGg0oY2Tu8QEEuU1/e15Cf2guBxYEiBoWnVTQB0AVcLMGdIGvIumffvlL/fyynY/wF3UnHmARcLMP8CsKDOfRfKNVnucYaK0wF8V9A3v5750SBkeRP2UHF2FVQv+2onKTsy3OclKsT9wBpZQz1dUJ0/oodTPFd3hvv4BXvVTJflurMFmu1q6K4UzzipyXv4dmssSpkqA5RrJRvvSgzAxyjl6YJ6NU5ZFfQcCns0H7TYeCfy/fwiG2Hf/78HRYwHDikw3omGEi6S+GuGm/j84yjLRjiowHQ3ShcaBCHLQMynKKphiwKzXYyGpYrplobZa7H8bzjDZ05DCYsyFMRVVP5tV8NJBYa4ktWLoulj12b6Sdo8FXyhwBBXsl5GCfOB2woMcSXqr5Qj7EJ5Q4EhrmS9iSJOteG3fyqKspHLyLl3iuSzr9XwmAJDXIn6WZLE1PCCAlNciVqBMjYrMMWVpH4UslSBMa4EXZJ9wirZ3+Dhf5PczqOSuuEqqNUop0eqI5+at1xmHGfJ2kCU1xWY6VJqNwGxTIGhLoW+1dbryYN+Bca6BPoVmEuATJA8eqdYl6uQ5xNqEIZDPO9hXEzmxDEFhruIrmpaZMmLRyQbbo7yIPyRMoeoEtwr4wBfwAHFQfhG9qIFx+h6XmMQdsj9g+OJmAJrCsKVUPf1jmmw2SJuTr2j5CD4qidI6o14bzTIpewoMQj+qLIgOVCn0F8rGic8Q4B0NjhlcF/k2mlSHc1p0ZswkwDpbVDoMzKFfSpynNhAnSAUNXfkp8iD5O0mDRmICUJ0ujvPXZSbCJQsdfdAnSCQY5X0jxxzFiQ/ZjTnbJ2cy7xW1LYTMFn2hA3K8QFx/J6D+X5qZAoB0+xu8/4Gmx3G55QEtorAGWxiNNqb4HNn52D++7QBfQmM+Bf4KOXCR1dG8z8PddKt1ii2T96EIWkTzgGfAW/JNIU/7zMtT2Yw/5MaGRpGStY3Ybwf6G3TtJOlyryS0vwvEx5TY+SYBul36pywnxMpNw3yJvAVsDXUZUVt9Mi80PPyey9q9moZhmEYhmEYhmEYhmEYhoF+/gdWVZUD+xQXywAAAABJRU5ErkJggg=="
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-11 text-left">
                      <h3 className="auto-blur text-20 text-primary font-bold pb-2">
                        Início
                      </h3>
                      <p className="auto-show text-16 w-[247px]">
                        O ciclo avaliativo começa e todos os colaboradores são
                        sinalizados da data de início e fim do ciclo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-[118px]">
                  <div className="flex justify-between items-start">
                    <div className="w-1/2 text-right pr-11 flex flex-col items-end">
                      <h3 className="auto-blur text-20 text-primary font-bold pb-2">
                        Avaliações
                      </h3>
                      <p className="auto-show text-16 w-[373px]">
                        O colaborador recebe dois tipos de avaliações para
                        preenchimento. A autoavaliação e a avaliação 360º para
                        avaliar seus companheiros de trabalho.
                      </p>
                    </div>
                    <div className="w-1/2 flex items-start">
                      <div className="bg-primary h-[48px] w-[48px] rounded-full transform -translate-x-1/2 flex items-center justify-center">
                        <div className="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <image
                              id="image0"
                              width="32"
                              height="32"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADeUlEQVR4nO2dMWsUQRiGH4wkEPSsjKJJY6H/IYiNFtoY/BvGWCjiP9DSM2BhkYAgCRYKKYz/IMbCxEYFBQX9BWLsTEZGRjiWzXq525lvdu994YXATW7ne5/M7O3x7Qaaq3PAQ+A98CvY/9wFzlpPbpQ0BtwHfgNuH/vX7oWxUkQdAp5VgCh6NfyOFEl3DwDjn++IRhydAHYKYftzxlXgaPAc8KEw5icwJSj163YJjE7JuGPAx8LYW6MAZAJYADZL/nJTeK5ibtcM5rMTsrgBjJNYp4F3BkW7Hvstaj91jOe2HTJKtjKsYXzrY57fjee4lWql3MwAxuU+5nkljLWc63wCHryJXERqxazldYoC/MdIAaGvDHxW0RV7madW4+tpfAFtq6fxBbStnsYX0LZ6YhfgWmYBwR6CgGAfvIBgH7aAYB+wgGAfqoBgH6SAYB+egGQQmBMQ+5CcgNgH4wTEPgyXgfXVCfYQBAT74AUE+7AFBPuABQT7UAUE+yAFhLy8BpwBZoDn2rIwhfEZmOy5gDgpIJjB2AUuFK7mBAQ7IIsll9bdId5PV+oMHt4X4Eghwdn/3GAqIMRZGXvApQIMfx75NOT7ZrtCXka6iWUaWK847otwj6H3SsW4RyXv/aAG0NE16MR8cLE0U3Hc4z3j/C3ST0rGfC3Zqs6HE7yA1AykeAeuf5jA08JWdTHCVpX9ClmPtEpmgFcVx10peXjAWHiogH/9caStKnsgll4qgXI4BN+JtFUJCNXBLPfxmI06tyoBYXgow1wACgj1Qhn2AlBAqA9KjK1KWxYHC2o1fOqbDl+1u0iOrlgTdy21gGAPQUCwD15AsA9bQLAPWECwD1VAsA9SQLAPT0AyCMwJiH1ITkCa5zV1LpKN1bmYkXfVuZiXF0u+DVTnIjYw1LmYkffUuViPptW5ONhfoDoXI6lpQKYKY9W5GIJR52IkuQZ6SZ2L+XlZnYvNg9KNcMzoci2FMqvOxXygTKpz0X6lrKpzcTQdXdYFuoZZQLCHICDYBy8g2IctINgHLCDYhyog2AcpINiHJyAZBOYExD4kJyD2wTgBsQ/DZWB9dcKIAYn977tdi/wjBZDNDAp1DfFGCiALGRTqGuLrKYBMANsZFOsy91tgnETyTxfdyqBolzGMUySWpz8f9kmd6PmbwUbYppKtDEmSJEki6A+B22nnt+2Z1QAAAABJRU5ErkJggg=="
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[118px]">
                  <div className="flex justify-between items-start w-full">
                    <div className="w-1/2 flex items-center justify-end pr-8">
                      <div className="bg-primary h-[48px] w-[48px] rounded-full transform translate-x-14 flex items-center justify-center">
                        <div className="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <image
                              id="image0"
                              width="32"
                              height="32"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nO2aW4hNURjHfzO5jrwxRJjkUq65l5RLEimDohCFkhC5veBBcn2gRhq3GjIYMw8oScjlUXiQ4sGliYRmpNwm99FX69TXap/D2bPWsTb7V1/NnLX3/7vss9bZ6wIpKSkpKQWnDJgOrAL2AmeB28Aj4CnwBngL/AQG8g/QFpgFVAMvgeY8bCsJpgTYDLzKM2ltD0goE4BnLUhcW+K6wRLgm6PkE9cNZgDfHSafqG5QCjQ6Tj5jz4GlBM5eT8lrk5/PIGkHvCtAAaQ7FBEgswuQfMZGESD7CliALQTIdSvIKjMoTgbWAQeAC8B9oN686n4Fvpi/5RX4DlAL7DTfqO7AnogCnCNAnqoA5R2gqyPdYuCWVQApYnC8VwHecKw9xSrACwLkqwpwk2PtIvMekNFvIkCalZV70D9i+QiOZmUDPOivSFIBOnvQH5ekArTyoN8zSQXwQYf/vQCEXICxf6EA4jMYalVgNR791Cg/4jMYXhZo/W6Q8iM+g+GzCkxWgn1RovyIz2B4rAIb7dHPGOVHNlGC4bgK7KKZwblGNC9Z0+1gGA78UMEd8uDjkNIXX8MIjD1WgH0davezCryLACm2VoUqPT396566mBMmq0BlfWCwA82h1i7TJALnigpWlrJat0CrjVknzOhdJgH0Bz6qoGUxNC4Hlc4HMxYkggXWe/vqGBprLY35JIyDKng56bEsj3uXm3t8DKgFo4v1BCWhbb/Z1pK27RH7AKKVOPpEJCJ20uwj2shnp7PcI1qJY0yWZDIbnCPVtUOAezmu9zm/8MY0lcA1YLfVr3PZYeCm+n8qCWR+xCJJudkHzJa4bK/PNdeeUZ/PI4GszDKKl5lxoEm1N5kjdL3UdZWqXbQSRalJKJPAjhgaO9T91UYzaHoDa4CrESfE1sfQ22BpyGzwrjkxNoIAKDaBbDWjeq5BbXHMo3a5NGU7vsJMwHxsxETS3jisyPPIa9RmqWyf1ZlDE90i2mfmoS9ni08Ac4COOKbUHE87D3zKIyht4y1NCbRBtTeYzzTjY/r6ZGJd2pJxo3eO/hzH7IlMXcQ1tb+ZUMWx2ONGgwPn2mRvX9MJeK3aGyOe1lHHMUhOf8xNx85l2dymXLXbX3/hieMY8jq2U+HYuViPiNPkmTb5W9PDg//9+RRgoocAFlo+buR4Oos8+LeLnBOZl59yHEBVlqcfFeAxx77r4hyvbQNsBB46+iWoz/L0o74F9Q78fTOxb2zhwmxKSkpKCv8qvwDGAnSy+IIxBwAAAABJRU5ErkJggg=="
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-11 text-left">
                      <h3 className="auto-blur text-20 text-primary font-bold pb-2">
                        Gestor
                      </h3>
                      <p className="auto-show text-16 w-[247px]">
                        Após o final do ciclo avaliativo, as avaliações são
                        enviadas para os gestores para que agora eles avaliem os
                        colaboradores.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-[73px]">
                  <div className="flex justify-between items-start">
                    <div className="w-1/2 text-right pr-11 flex flex-col items-end">
                      <h3 className="auto-blur text-20 text-primary font-bold pb-2">
                        Avaliação Final
                      </h3>
                      <p className="auto-show text-16 w-[373px]">
                        Com todas as notas e dados qualitativos extraídos das
                        avaliações é realizado um processo de avaliação final que
                        gera uma nota final condizente com toda a informação
                        obtida a respeito de cada colaborador.
                      </p>
                    </div>
                    <div className="w-1/2 flex items-start">
                      <div className="bg-primary h-[48px] w-[48px] rounded-full transform -translate-x-1/2 flex items-center justify-center">
                        <div className="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <image
                              id="image0"
                              width="32"
                              height="32"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuUlEQVR4nO2b32vNYRzHXyjOXIyacKXk6NxMCeUCt/sHLCzaNJkLC7lwO8Qoty6UkIiSTZgruZh2ITdSyhSp3SzJj2Yr7MfRp57V6fT9Od/Pd8/3ec6rPrf7PO/Xds73eT7Pd9CgQYMFMgo8A9rxkE1AtabO4RmH6gTMAK14xP06AVJ9eMJK4FeAgAE8oSsgvNQjPGCZ+fYPEnANDzgcEl6qF8dpAb5ECNiJ4zyICP8HaMJheiPCSz3HYXYAv2MEnMJRVgOfYsJLbcZBlgCDCcInrSlgCChTEE5mGL62JoogYav5Zq8q1VMsZgXwVjG81CQWc1E5/HxZy0AO4eewmMs5CJjFYo7kIEAmSNayJwcB01jMWksELAW6gatAP3AG6AH2AW3m9FkB1gOlrCX8VBYge4woSmbknuZnynnlA3AP6PhfKa+VBYzF9L+TQY/vwBUzx0jNXWUBLyN678+41w+gM62APmUBNyJ2oZ8V+g2nFdChLEAmy0EcVeo3nlbAdmUBG0L6vlLs2ZxGQLPiQkZCem5Uli6/1FSMKy1ERutBdCsLkI91KoYVFiHjteUh/W4pC0h9d9lpHiFZLmJvRL8RZQHyaE9Ni9lMfMtgATdjeo0pC5DN3YIpAQfMDm00wZi8vh5H/OnPozmCq5rtfaaUzEGkYg4mbeag0mMOLv3mINNlDjZxTCsLkFqHxczkIGA3FjObgwB51FrLXA4CLmEx1RzqIZ4LuIDFTCmHf5PgUbyoDCmGl33LFiynbC5ONQQcpyCUzcXpZIbh5dUeJ6kkCP8RWIWjnE7wud+Gw7yIEXAMh2kC/kaEl5e5nWZXRPivwBoc50SEgIN4wPWQ8O8Szh4Kz5MQAfKfLF4wGBB+wvX3lWs5GyDgNh7RGjBCS33xUXTO1wmQqzXvaDfH6PeLvZAGDSgm/wDqd58Wa1X9iAAAAABJRU5ErkJggg=="
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[268px]">
                  <div className="flex justify-between items-start w-full">
                    <div className="w-1/2 flex items-center justify-end pr-8">
                      <div className="bg-primary h-[48px] w-[48px] rounded-full transform translate-x-14 flex items-center justify-center">
                        <div className="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <image
                              id="image0"
                              width="32"
                              height="32"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nO2aW4hNURjHfzO5jrwxRJjkUq65l5RLEimDohCFkhC5veBBcn2gRhq3GjIYMw8oScjlUXiQ4sGliYRmpNwm99FX69TXap/D2bPWsTb7V1/NnLX3/7vss9bZ6wIpKSkpKQWnDJgOrAL2AmeB28Aj4CnwBngL/AQG8g/QFpgFVAMvgeY8bCsJpgTYDLzKM2ltD0goE4BnLUhcW+K6wRLgm6PkE9cNZgDfHSafqG5QCjQ6Tj5jz4GlBM5eT8lrk5/PIGkHvCtAAaQ7FBEgswuQfMZGESD7CliALQTIdSvIKjMoTgbWAQeAC8B9oN686n4Fvpi/5RX4DlAL7DTfqO7AnogCnCNAnqoA5R2gqyPdYuCWVQApYnC8VwHecKw9xSrACwLkqwpwk2PtIvMekNFvIkCalZV70D9i+QiOZmUDPOivSFIBOnvQH5ekArTyoN8zSQXwQYf/vQCEXICxf6EA4jMYalVgNR791Cg/4jMYXhZo/W6Q8iM+g+GzCkxWgn1RovyIz2B4rAIb7dHPGOVHNlGC4bgK7KKZwblGNC9Z0+1gGA78UMEd8uDjkNIXX8MIjD1WgH0davezCryLACm2VoUqPT396566mBMmq0BlfWCwA82h1i7TJALnigpWlrJat0CrjVknzOhdJgH0Bz6qoGUxNC4Hlc4HMxYkggXWe/vqGBprLY35JIyDKng56bEsj3uXm3t8DKgFo4v1BCWhbb/Z1pK27RH7AKKVOPpEJCJ20uwj2shnp7PcI1qJY0yWZDIbnCPVtUOAezmu9zm/8MY0lcA1YLfVr3PZYeCm+n8qCWR+xCJJudkHzJa4bK/PNdeeUZ/PI4GszDKKl5lxoEm1N5kjdL3UdZWqXbQSRalJKJPAjhgaO9T91UYzaHoDa4CrESfE1sfQ22BpyGzwrjkxNoIAKDaBbDWjeq5BbXHMo3a5NGU7vsJMwHxsxETS3jisyPPIa9RmqWyf1ZlDE90i2mfmoS9ni08Ac4COOKbUHE87D3zKIyht4y1NCbRBtTeYzzTjY/r6ZGJd2pJxo3eO/hzH7IlMXcQ1tb+ZUMWx2ONGgwPn2mRvX9MJeK3aGyOe1lHHMUhOf8xNx85l2dymXLXbX3/hieMY8jq2U+HYuViPiNPkmTb5W9PDg//9+RRgoocAFlo+buR4Oos8+LeLnBOZl59yHEBVlqcfFeAxx77r4hyvbQNsBB46+iWoz/L0o74F9Q78fTOxb2zhwmxKSkpKCv8qvwDGAnSy+IIxBwAAAABJRU5ErkJggg=="
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-11 text-left">
                      <h3 className="auto-blur text-20 text-primary font-bold pb-2">
                        Gestor
                      </h3>
                      <p className="auto-show text-16 w-[247px]">
                        Após o final do ciclo avaliativo, as avaliações são
                        enviadas para os gestores para que agora eles avaliem os
                        colaboradores.
                      </p>
                    </div>
                    <div className="h-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}

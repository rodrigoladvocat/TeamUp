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

export default function ManagerHomePage(): JSX.Element {

    const [ cycleId, setCycleId ] = useState<number | null>(null);
    const [cycle, setCycle] = useState<any>(null);
    const [ tuningData, setTuningData ] = useState<string[]>([]);
    const [ picturesArrayExcepcional, setPicturesArrayExcepcional ] = useState<string[]>([]);
    const [ picturesArrayMuitoBom, setPicturesArrayMuitoBom ] = useState<string[]>([]);
    const [ picturesArrayFezOBasico, setPicturesArrayFezOBasico ] = useState<string[]>([]);
    const [ picturesArrayPrecisoMelhorar, setPicturesArrayPrecisoMelhorar ] = useState<string[]>([]);



    useEffect(() => {
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
          setTuningData(data);
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
        if (tuning.grade >= 4) {
          _picturesArrayExcepcional.push(tuning.evaluated.imgUrl);
        }
        else if (tuning.grade > 3) {
          _picturesArrayMuitoBom.push(tuning.evaluated.imgUrl);
        }
        else if (tuning.grade > 2) {
          _picturesArrayFezOBasico.push(tuning.evaluated.imgUrl);
        }
        else {
          _picturesArrayPrecisoMelhorar.push(tuning.evaluated.imgUrl);
      }})

      setPicturesArrayExcepcional(_picturesArrayExcepcional);
      setPicturesArrayMuitoBom(_picturesArrayMuitoBom);
      setPicturesArrayFezOBasico(_picturesArrayFezOBasico);
      setPicturesArrayPrecisoMelhorar(_picturesArrayPrecisoMelhorar);

    }, [tuningData]);

    return (
      <div className="flex flex-row w-screen h-screen min-h-screen p-6 bg-gray-900 text-white">
        <aside>
          <Menu></Menu>
        </aside>

        <main className="flex-1 p-6 bg-general-background h-[920px]">

          <Header userName="Pedro Almeida" subtitle="teste subtitulo" profileImage="/profile.jpg" title="Página inicial"/>
          
          <div className="flex mb-6">
            <div className="col-span-2 bg-content-background p-4 pl-5 rounded-2xl w-[45rem]">
              <p className="text-28 text-purple-text font-bold text-left">
                Bem vindo de volta Pedro!
              </p>
              <div className="flex items-start pt-8">
                <img src={flag} alt="flag" className="pr-3" />
                <p className="text-left">
                  O ciclo atual{" "}
                  <span className="text-purple-text">fecha em 10 dias</span>{" "}
                  (Data de fechamento: 10/06/24)
                </p>
              </div>

              <div className="flex items-start pt-8">
                <img src={flag} alt="flag" className="pr-3" />
                <p className="text-left">
                  Sua nota final do ciclo avaliativo de 2023.2 já está
                  disponível na página Notas.
                </p>
              </div>
            </div>
            <div className="ml-auto bg-content-background pt-4 pl-4 pr-4 rounded-2xl  w-[18.125rem]">
              <h2 className="text-16 mb-4">Avaliações entregues</h2>
              <div className="flex justify-center items-center">
                <div className="w-32 h-32">
                  <ProgressBar />
                </div>
              </div>
              <p className="text-12">Ciclo avaliativo {cycle !== null ? cycle.cycleName : "not found"}</p>
            </div>
          </div>

          <div className="flex align-center mb-6 w-[64.25rem] h-[290px] bg-content-background pl-5 pr-4 rounded-2xl">
            <div className="flex-1">
                <h2 className="text-20 text-purple-text font-bold text-left mt-3">
                    Análise
                </h2>

                <div className="text-center mt-8 w-[400px]">
                    <ul>
                        <li className="text-left text-green font-bold mb-10">
                            <span>Critérios com as maiores notas</span>
                        </li>
                        <li className="flex justify-between">
                        <span>Resiliência nas adversidades</span>
                        <span>Média: 3.0</span>
                        </li>
                        <li className="flex justify-between">
                        <span>Fazer mais com menos</span>
                        <span>Média: 2.8</span>
                        </li>
                        <li className="flex justify-between">
                        <span>Trabalhar em equipe</span>
                        <span>Média: 2.5</span>
                        </li>
                        <li className="flex justify-between">
                        <span>Sentimento de dono</span>
                        <span>Média: 2.0</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
              <img src={vector} alt="vector" className="my-5"/>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
                <div className="ml-8 mt-5 w-[400px]">
                    <ul>
                    <li className="text-left text-red font-bold mb-10">
                            <span>Critérios com as menores notas</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Resiliência nas adversidades</span>
                        <span>Média: 3.0</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Fazer mais com menos</span>
                        <span>Média: 2.8</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Trabalhar em equipe</span>
                        <span>Média: 2.5</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Sentimento de dono</span>
                        <span>Média: 2.0</span>
                    </li>
                    </ul>
                </div>
            </div>
            
            </div>

            <div className="flex mb-6 w-[64.25rem] h-[290px] bg-content-background pl-5 rounded-2xl">
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

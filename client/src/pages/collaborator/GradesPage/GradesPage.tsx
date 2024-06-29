import React from "react";
import Home from "../../Home";
import Header from "../../../components/Header";
import Accordion from "../../../components/Accordion";
import { useMenu } from "../../../context/MenuContext";

const Tabs: React.FC = () => {
  const { setMenu } = useMenu();
  setMenu(0);

  return (
    <div className="flex w-full p-6 min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <aside>
          <Home></Home>
        </aside>

        <main className="flex-1 p-6 bg-general-background h-[920px]">
          <Header
            userName="Pedro Almeida"
            profileImage="/profile.jpg"
            title="Notas"
          />

          <div className="mb-6 w-[64.25rem] h-full">
            <div className="h-[51.5rem] bg-content-background p-4 rounded-2xl mb-4 overflow-auto">
              <p className="text-30 text-purple-text font-bold text-left pl-[10px] mb-0">
                Meu desempenho
              </p>
              <p className="text-16 text-text text-left pl-[10px] mb-4">
                Acompanhe a sua evolução em cada critério ao longo do tempo.
              </p>
              <p className="text-28 text-white font-bold text-left pl-[10px] pt-[1.813rem] mb-0">
                Critérios comportamentais
              </p>
              <div className="grid grid-cols-2 gap-x-[4.563rem] gap-y-[2rem] pl-[10px] pt-[2.375rem]">
                <Accordion title="1. Sentimento de dono" />
                <Accordion title="4. Capacidade de aprender" />
                <Accordion title="2. Resiliência nas adversidades" />
                <Accordion title="5. Trabalho em equipe" />
                <Accordion title="3. Organização no trabalho" />
              </div>
              <p className="text-28 text-white font-bold text-left mb-0 pl-[10px] pt-[2.438rem]">
                Critérios de execução
              </p>
              <div className="grid grid-cols-2 gap-x-[4.563rem] gap-y-[2rem] pl-[10px] pt-[2.375rem]">
                <Accordion title="1. Entregar com qualidade" />
                <Accordion title="4. Pensar fora da caixa" />
                <Accordion title="2. Atender aos prazos" />
                <Accordion title="3. Fazer mais com menos" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tabs;

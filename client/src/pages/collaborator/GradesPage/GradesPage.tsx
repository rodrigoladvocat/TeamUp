import React, { useState } from "react";
import { Menu } from "../../../components/Menu";
import Tabs from "../../../components/Tabs";
import Header from "../../../components/Header";
import Accordion from "../../../components/Accordion";


import ReadOnlyEvaluation from "../../../components/ReadOnlyEvaluation";
import GradePicker from "../../../components/GradePicker";
import TagGrade from "../../../components/TagGrade";

import { useMenu } from "../../../context/MenuContext";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

  

const GradesPage: React.FC = () => {
  const { setMenu } = useMenu();
  setMenu(0);

  const tabLabels = ["Análise", "Histórico"];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  function handleChangeTab(newIndex: number) {
    console.log("Selecionada a aba:", newIndex);
    setSelectedTabIndex(newIndex);
  }
  const handleOnChange = (index: number) => {
    console.log(`Selected index: ${index}`);
  };

  return (
    <div className="flex w-full p-6 min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <aside>
          <Menu />
        </aside>
        <main className="flex-1 p-6 bg-general-background h-[920px]">
          <Header
            userName="Pedro Almeida"
            profileImage="/profile.jpg"
            title="Notas"
          />

          <div className="mb-6 w-[64.25rem] h-full">
            <Tabs type="default" tabs={tabLabels} onChange={handleChangeTab} />
            <div className="h-[51.5rem] bg-content-background p-4 rounded-2xl mb-4 overflow-auto">
              {selectedTabIndex === 0 && (
                <>
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
                </>
              )}
             {selectedTabIndex === 1 && (
                <>
                  <p className="text-20 text-white text-left pt-[35px] pb-[32px] pl-[10px] mb-0">
                    Selecione o ciclo que você deseja consultar
                  </p>
                  <Select>
                      <SelectTrigger className="border-2 border-[#A28BFE] rounded-2xl bg-content-background h-[52px] w-[288px]">
                        <SelectValue placeholder="Selecione o semestre" />
                      </SelectTrigger>
                      <SelectContent className="bg-content-background">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                  </Select>
                  <div className="flex items-center pl-[10px] pt-[38px] pb-[1.375rem]">
                    <p className="pb-5 text-28 text-purple-text font-bold text-left mb-0 flex-shrink-0">
                      Autoavaliação
                    </p>
                    <div className="border-2 border-[#A28BFE] gap-[57px] rounded-2xl flex items-center space-x-2 p-2 ml-auto">
                        <p className="flex-1 font-16">Média final: 4</p>
                        <TagGrade grade={10}/>
                    </div>
                  </div>

                  
                  <Table>
                      <TableHeader className="bg-[#444444]">
                        <TableRow>
                          <TableHead className="text-20 font-bold">Critérios comportamentais</TableHead>
                          <TableHead className="text-18 text-center font-bold">Nota da autoavaliação</TableHead>
                          <TableHead className="text-18 text-center font-bold">Nota final</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-18 text-left">1. Sentimento de dono</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-18 text-left">2. Resiliência nas adversidades</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-18 text-left">3. Organização no trabalho</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-18 text-left">4. Capacidade de aprender</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-18 text-left">5. Trabalho em equipe</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                      </TableBody>
                      <div className="pt-[1.75rem] "></div>
                      <TableHeader className="bg-[#444444]">
                        <TableRow>
                          <TableHead className="text-20 font-bold">Critérios de execução</TableHead>
                          <TableHead className="text-18 text-center font-semibold font-bold">Nota da autoavaliação</TableHead>
                          <TableHead className="text-18 text-center font-semibold font-bold">Nota final</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-18 text-left">1. Entregar com qualidade</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-18 text-left">2. Atender aos prazos </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-18 text-left">3. Fazer mais com menos</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="text-18 text-left">4. Pensar fora da caixa</TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                          <TableCell className="text-16 text-center">0 </TableCell>
                        </TableRow>
                      </TableBody>
                      
                  </Table>
                  <p className="pb-5 text-28 text-purple-text font-bold text-left pl-[10px] pt-[1.813rem] mb-0">
                    Avaliação 360°
                  </p>
                  <p className="text-16 text-text text-left pl-[10px] mb-4">
                    Veja abaixo as avaliações que você fez dos demais colaboradores neste ciclo.
                  </p>
                    <div className="flex items-center justify-center pt-10">
                    <ReadOnlyEvaluation profileUrl="toma" name="Maria Beatriz dos Santos" role="Designer de produto" comment="Invalid">
                        <GradePicker
                              gradeOptions={[1, 2, 3, 4, 5]}
                              type="circles"
                              initialValueIndex={-1}
                              onChange={handleOnChange}
                              />
                    </ReadOnlyEvaluation>
                    </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GradesPage;

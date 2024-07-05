import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Menu } from "@/components/Menu";
import Tabs from "@/components/Tabs";
import Header from "@/components/Header";
import Accordion from "@/components/Accordion";
import TagGrade from "@/components/TagGrade";
import RoundEvaluationForm from "@/components/RoundEvaluationForm";

import { getAutoEval } from "@/utils/getAutoEval";
import { getTuningByUserAndCycleId } from "@/utils/getTuningByUserAndCycleId";
import { Cycle, getCycles } from "@/utils/getCycles";
import { getOthersEvalByUID } from "@/utils/getOthersEvalByUID";
import { getCollaboratorsById } from "@/utils/getCollaboratorsById";


import { useMenu } from "@/context/MenuContext";
import { useAuth } from "@/hooks/AuthUser";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GradesPage: React.FC = () => {
  const { setMenu } = useMenu();
  setMenu(1);

  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const tabLabels = ["Análise", "Histórico"];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedCycleId, setSelectedCycleId] = useState<number | null>(null);

  const [tableData, setTableData] = useState<any>(null);
  const [othersEvalData, setOthersEvalData] = useState<any[]>([]);
  const [accordionData, setAccordionData] = useState<any>(null);
  

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [ tabCycles, setTabCycles ] = useState<Cycle[]>([]);

  const handleChangeTab = (newIndex: number) => {
    setSelectedTabIndex(newIndex);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getCycles().then((cycles) => {
      let aux: Cycle[] = [];
      for (let i = 0; i < cycles.length - 1; i++) { // ignores the current cycle
        aux.push(cycles[i]);
      } 
      setCycles(aux);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const data = await Promise.all(
          cycles.map(async (cycle) => {
            const autoEval = await getAutoEval(user.id, cycle.id);
            const tuning = await getTuningByUserAndCycleId(user.id, cycle.id);
            return {
              cycleId: cycle.id,
              cycleName: cycle.cycleName,
              autoEval: autoEval || {},
              tuning: tuning || {}
            };
          })
        );
        setAccordionData(data);
      };
      fetchData();
    }
  }, [user, cycles]);

  useEffect(() => {
    if (selectedCycleId && accordionData) {
      const cycleData = accordionData.find((data: any) => data.cycleId === selectedCycleId);
      if (cycleData) {
        setTableData({
          autoEval: cycleData.autoEval,
          tuning: cycleData.tuning
        });
      }
    }
  }, [selectedCycleId, accordionData]);

  useEffect(() => {
    if (user) {
      const fetchOthersEvalData = async () => {
        const evals = await getOthersEvalByUID(user.id);
        const data = await Promise.all(
          evals.map(async (evalData: any) => {
            const userData = await getCollaboratorsById(evalData.evaluatedUserId);
            return {
              ...evalData,
              ...userData
            };
          })
        );
        setOthersEvalData(data);
      };
      fetchOthersEvalData();
    }
  }, [user]);

  const getAccordionData = (criteria: string) => {
    if (!accordionData) return [];

    return accordionData.map((cycleData: any) => {
      return {
        cycle: cycleData.cycleName,
        pv: cycleData.autoEval[criteria] || 0,
        uv: cycleData.tuning[criteria] || 0
      };
    });
  };

  return (
    <div className="flex w-full p-6 min-h-screen bg-general-background text-white">
      <div className="flex">
        <aside>
          <Menu />
        </aside>
        <main className="flex-1 p-6 bg-general-background h-[920px]">
          <Header userName={user ? user.name : "null"} profileImage={user ? user.imgUrl : "null"} title="Notas" />
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
                    <Accordion title="1. Sentimento de dono" data={getAccordionData('ownershipMentalityGrade')} />
                    <Accordion title="4. Capacidade de aprender" data={getAccordionData('learningAgilityGrade')} />
                    <Accordion title="2. Resiliência nas adversidades" data={getAccordionData('resilienceAdversityGrade')} />
                    <Accordion title="5. Trabalho em equipe" data={getAccordionData('teamworkGrade')} />
                    <Accordion title="3. Organização no trabalho" data={getAccordionData('outOfTheBoxThinkingBehavioralGrade')} />
                  </div>
                  <p className="text-28 text-white font-bold text-left mb-0 pl-[10px] pt-[2.438rem]">
                    Critérios de execução
                  </p>
                  <div className="grid grid-cols-2 gap-x-[4.563rem] gap-y-[2rem] pl-[10px] pt-[2.375rem]">
                    <Accordion title="1. Entregar com qualidade" data={getAccordionData('deliveringQualityGrade')} />
                    <Accordion title="3. Fazer mais com menos" data={getAccordionData('doingMoreWithLessGrade')} />
                    <Accordion title="2. Atender aos prazos" data={getAccordionData('meetingDeadlinesGrade')} />
                    <Accordion title="4. Pensar fora da caixa" data={getAccordionData('outOfTheBoxThinkingExecutionGrade')} />
                  </div>
                </>
              )}
              {selectedTabIndex === 1 && (
                <>
                  <p className="text-20 text-white text-left pt-[35px] pb-[32px] pl-[10px] mb-0">
                    Selecione o ciclo que você deseja consultar
                  </p>
                  <Select onValueChange={value => setSelectedCycleId(Number(value))}>
                    <SelectTrigger className="border-2 border-[#A28BFE] rounded-2xl bg-content-background h-[52px] w-[288px]">
                      <SelectValue placeholder="Selecione o semestre" />
                    </SelectTrigger>
                    <SelectContent className="bg-content-background">
                      {cycles.map((cycle) => (
                        <SelectItem key={cycle.id} value={cycle.id.toString()}>{cycle.cycleName}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {tableData && (
                    <>
                      <div className="flex items-center pl-[10px] pt-[38px] pb-[1.375rem]">
                        <p className="pb-5 text-28 text-purple-text font-bold text-left mb-0 flex-shrink-0">
                          Autoavaliação
                        </p>
                        <div className="border-2 border-[#A28BFE] gap-[57px] rounded-2xl flex items-center space-x-2 p-2 ml-auto">
                          <p className="flex-1 font-16">Média final: {tableData.tuning.grade ? tableData.tuning.grade.toFixed(2) : 'N/A'}</p>
                          <TagGrade grade={tableData.tuning.grade} />
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
                            <TableCell className="text-16 text-center">{tableData.autoEval.ownershipMentalityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.ownershipMentalityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">2. Resiliência nas adversidades</TableCell>
                            <TableCell className="text-16 text-center">{tableData.autoEval.resilienceAdversityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.resilienceAdversityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">3. Organização no trabalho</TableCell>
                            <TableCell className="text-16 text-center">{tableData.autoEval.outOfTheBoxThinkingBehavioralGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.outOfTheBoxThinkingBehavioralGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">4. Capacidade de aprender</TableCell>
                            <TableCell className="text-16 text-center">{tableData.autoEval.learningAgilityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.learningAgilityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">5. Trabalho em equipe</TableCell>
                            <TableCell className="text-16 text-center">{tableData.autoEval.teamworkGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.teamworkGrade}</TableCell>
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
                            <TableCell className="text-16 text-center">{tableData.autoEval.deliveringQualityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.deliveringQualityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">2. Atender aos prazos</TableCell>
                            <TableCell className="text-16 text-center">{tableData.autoEval.meetingDeadlinesGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.meetingDeadlinesGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">3. Fazer mais com menos</TableCell>
                            <TableCell className="text-16 text-center">{tableData.autoEval.doingMoreWithLessGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.doingMoreWithLessGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">4. Pensar fora da caixa</TableCell>
                            <TableCell className="text-16 text-center">{tableData.autoEval.outOfTheBoxThinkingExecutionGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tableData.tuning.outOfTheBoxThinkingExecutionGrade}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                  { othersEvalData.length > 0 && // doesnt bug if there are no evaluations (this happens )
                  <>
                  <p className="pb-5 text-28 text-purple-text font-bold text-left pl-[10px] pt-[1.813rem] mb-0">
                    Avaliação 360°
                  </p>
                  <p className="text-16 text-text text-left pl-[10px] mb-4">
                    Veja abaixo as avaliações que você fez dos demais colaboradores neste ciclo.
                  </p>
                  <div className="flex flex-col items-center justify-center pt-3 space-y-4">
                    {othersEvalData.map((evalData: any) => (
                      evalData.cycleId == selectedCycleId && // filter by selected cycle
                      <RoundEvaluationForm
                        key={evalData.evaluatedUserId}
                        profileUrl={evalData.imgUrl}
                        name={evalData.name}
                        role={evalData.role}
                        grade={evalData.grade}
                        text={evalData.comment}
                      />
                    ))}
                  </div>
                  </>
                  }       
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

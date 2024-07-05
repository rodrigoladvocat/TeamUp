import React, { useState, useEffect } from "react";
import { Menu } from "../../../components/Menu";
import Tabs from "../../../components/Tabs";
import Header from "../../../components/Header";
import Accordion from "../../../components/Accordion";

import ReadOnlyEvaluation from "../../../components/ReadOnlyEvaluation";
import GradePicker from "../../../components/GradePicker";
import TagGrade from "../../../components/TagGrade";
import B from "../../../components/GradeForm";

import { getAutoEval } from "@/utils/getAutoEval";
import { getTuningByUserAndCycleId } from "@/utils/getTuningByUserAndCycleId";
import { Cycle, getCycles } from "@/utils/getCycles";

import { useAuth } from "@/hooks/AuthUser";

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
  setMenu(1);

  const tabLabels = ["Análise", "Histórico"];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [autoEvalData, setAutoEvalData] = useState<any>(null);
  const [tuningData, setTuningData] = useState<any>(null);
  const [selectedCycleId, setSelectedCycleId] = useState<number | null>(null);

  const {user} = useAuth();

  const [cycles, setCycles] = useState<Cycle[]>([]);


  function handleChangeTab(newIndex: number) {
    console.log("Selecionada a aba:", newIndex);
    setSelectedTabIndex(newIndex);
  }
  const handleGradeChange = (comment: any, grade: any) => {
    console.log("Comentário recebido:", comment);
    console.log("Nota recebida:", grade);
  };

  useEffect(() => {
    getCycles().then(setCycles);
  }, []);

  useEffect(() => {
    if (user && selectedCycleId) {
      getAutoEval(user.id, selectedCycleId).then((autoEvalData) => {
        if (autoEvalData === null) {
          setAutoEvalData({
            ownershipMentalityGrade: 0,
            learningAgilityGrade: 0,
            resilienceAdversityGrade: 0,
            teamworkGrade: 0,
            outOfTheBoxThinkingBehavioralGrade: 0,
            deliveringQualityGrade: 0,
            meetingDeadlinesGrade: 0,
            doingMoreWithLessGrade: 0,
            outOfTheBoxThinkingExecutionGrade: 0
          });
        } else {
          setAutoEvalData(autoEvalData);
        }
      });
    }
  }, [user, selectedCycleId]);
  
  useEffect(() => {
    if (user && selectedCycleId) {
      getTuningByUserAndCycleId(user.id, selectedCycleId).then((tuningData) => {
        if (tuningData === null) {
          setTuningData({
            ownershipMentalityGrade: 0,
            learningAgilityGrade: 0,
            resilienceAdversityGrade: 0,
            teamworkGrade: 0,
            outOfTheBoxThinkingBehavioralGrade: 0,
            deliveringQualityGrade: 0,
            meetingDeadlinesGrade: 0,
            doingMoreWithLessGrade: 0,
            outOfTheBoxThinkingExecutionGrade: 0
          });
        } else {
          setTuningData(tuningData);
        }
      });
    }
  }, [user, selectedCycleId]);

  const ownershipMentalityData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.ownershipMentalityGrade : 0,
    uv: tuningData ? tuningData.ownershipMentalityGrade : 0
  }));

  const learningAgilityData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.learningAgilityGrade : 0,
    uv: tuningData ? tuningData.learningAgilityGrade : 0
  }));

  const resilienceAdversityData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.resilienceAdversityGrade : 0,
    uv: tuningData ? tuningData.resilienceAdversityGrade : 0
  }));

  const teamworkData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.teamworkGrade : 0,
    uv: tuningData ? tuningData.teamworkGrade : 0
  }));
  
  const outOfTheBoxThinkingBehavioralData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.outOfTheBoxThinkingBehavioralGrade : 0,
    uv: tuningData ? tuningData.outOfTheBoxThinkingBehavioralGrade : 0
  }));

  const deliveringQualityData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.deliveringQualityGrade : 0,
    uv: tuningData ? tuningData.deliveringQualityGrade : 0
  }));

  const meetingDeadlinesData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.meetingDeadlinesGrade : 0,
    uv: tuningData ? tuningData.meetingDeadlinesGrade : 0
  }));

  const doingMoreWithLessData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.doingMoreWithLessGrade : 0,
    uv: tuningData ? tuningData.doingMoreWithLessGrade : 0
  }));

  const outOfTheBoxThinkingExecutionData = cycles.map(cycle => ({
    cicle: cycle.cycleName,
    pv: autoEvalData ? autoEvalData.outOfTheBoxThinkingExecutionGrade : 0,
    uv: tuningData ? tuningData.outOfTheBoxThinkingExecutionGrade : 0
  }));


    

  return (
    <div className="flex w-full p-6 min-h-screen bg-general-background text-white">
      <div className="flex">
        <aside>
          <Menu />
        </aside>
        <main className="flex-1 p-6 bg-general-background h-[920px]">

          <Header userName={ user ? user.name : "null" } profileImage={ user ? user.imgUrl : "null" } title="Notas"/>

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
                    <Accordion title="1. Sentimento de dono" data={ownershipMentalityData}/>
                    <Accordion title="4. Capacidade de aprender" data={learningAgilityData} />
                    <Accordion title="2. Resiliência nas adversidades" data={resilienceAdversityData} />
                    <Accordion title="5. Trabalho em equipe" data={teamworkData} />
                    <Accordion title="3. Organização no trabalho" data={outOfTheBoxThinkingBehavioralData} />
                  </div>
                  <p className="text-28 text-white font-bold text-left mb-0 pl-[10px] pt-[2.438rem]">
                    Critérios de execução
                  </p>
                  <div className="grid grid-cols-2 gap-x-[4.563rem] gap-y-[2rem] pl-[10px] pt-[2.375rem]">
                    <Accordion title="1. Entregar com qualidade" data={deliveringQualityData} />
                    <Accordion title="4. Pensar fora da caixa "data={outOfTheBoxThinkingExecutionData} />
                    <Accordion title="2. Atender aos prazos" data={meetingDeadlinesData} />
                    <Accordion title="3. Fazer mais com menos"data={doingMoreWithLessData} />
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
                  {autoEvalData && tuningData && (
                    <>
                  
                  <div className="flex items-center pl-[10px] pt-[38px] pb-[1.375rem]">
                    <p className="pb-5 text-28 text-purple-text font-bold text-left mb-0 flex-shrink-0">
                      Autoavaliação
                    </p>
                    <div className="border-2 border-[#A28BFE] gap-[57px] rounded-2xl flex items-center space-x-2 p-2 ml-auto">
                        <p className="flex-1 font-16">Média final: {tuningData.grade ? tuningData.grade.toFixed(2) : 'N/A'}</p>
                        <TagGrade grade={tuningData.grade}/>
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
                            <TableCell className="text-16 text-center">{autoEvalData.ownershipMentalityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.ownershipMentalityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">2. Resiliência nas adversidades</TableCell>
                            <TableCell className="text-16 text-center">{autoEvalData.resilienceAdversityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.resilienceAdversityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">3. Organização no trabalho</TableCell>
                            <TableCell className="text-16 text-center">{autoEvalData.outOfTheBoxThinkingBehavioralGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.outOfTheBoxThinkingBehavioralGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">4. Capacidade de aprender</TableCell>
                            <TableCell className="text-16 text-center">{autoEvalData.learningAgilityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.learningAgilityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">5. Trabalho em equipe</TableCell>
                            <TableCell className="text-16 text-center">{autoEvalData.teamworkGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.teamworkGrade}</TableCell>
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
                            <TableCell className="text-16 text-center">{autoEvalData.deliveringQualityGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.deliveringQualityGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">2. Atender aos prazos</TableCell>
                            <TableCell className="text-16 text-center">{autoEvalData.meetingDeadlinesGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.meetingDeadlinesGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">3. Fazer mais com menos</TableCell>
                            <TableCell className="text-16 text-center">{autoEvalData.doingMoreWithLessGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.doingMoreWithLessGrade}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-18 text-left">4. Pensar fora da caixa</TableCell>
                            <TableCell className="text-16 text-center">{autoEvalData.outOfTheBoxThinkingExecutionGrade}</TableCell>
                            <TableCell className="text-16 text-center">{tuningData.outOfTheBoxThinkingExecutionGrade}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                  
                  <p className="pb-5 text-28 text-purple-text font-bold text-left pl-[10px] pt-[1.813rem] mb-0">
                    Avaliação 360°
                  </p>
                  <p className="text-16 text-text text-left pl-[10px] mb-4">
                    Veja abaixo as avaliações que você fez dos demais colaboradores neste ciclo.
                  </p>
                    <div className="flex items-center justify-center pt-10">

                    <B
                        profileUrl="https://example.com/profile.jpg"
                        name="João Silva"
                        role="Desenvolvedor"
                        onChange={handleGradeChange}/>
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

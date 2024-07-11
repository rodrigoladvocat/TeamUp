import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentCycle } from "@/utils/getCurrentCycle";
import { getAutoEval } from "@/utils/getAutoEval";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TipSpeechBubble from "@/components/TipSpeechBubble";
import CardeDeNota from "@/components/CardDeNota";
import { GetSelffEvalByUserCycleIdsDto } from "@/dto/GetSelfEvalByUserCycleIdsDto";
import Tabs from "@/components/Tabs";
import { useAuth } from "@/hooks/AuthUser";

interface SProps {
  index: number;
  title: string;
  subtitle: string;
  tip: string;
  gradeInitialOption: number;
  commentInitialValue: string;
}

function transformDataToArray(data: GetSelffEvalByUserCycleIdsDto) {
  return [
    {
      category: "Sentimento de dono",
      tip: "É um sentimento de pertencimento, responsabilidade e engajamento, no qual os colaboradores se sentem investidos nos objetivos e resultados da organização.",
      grade: data.ownershipMentalityGrade,
      comment: data.ownershipMentalityComment,
    },
    {
      category: "Resiliência nas adversidades",
      tip: "Capacidade de se adaptar em meio as mudanças.",
      grade: data.resilienceAdversityGrade,
      comment: data.resilienceAdversityComment,
    },
    {
      category: "Organização no trabalho",
      tip: "Critério que diz respeito a sua habilidade de estar atento com as atividades do seu trabalho em relação a como está os seus andamentos, o que já foi feito e o que ainda é necessário ser feito.",
      grade: data.outOfTheBoxThinkingBehavioralGrade,
      comment: data.outOfTheBoxThinkingBehavioralComment,
    },
    {
      category: "Capacidade de aprender",
      tip: "Critério que diz respeito a sua habilidade de absorção de novas informações e conhecimentos.",
      grade: data.learningAgilityGrade,
      comment: data.learningAgilityComment,
    },
    {
      category: "Trabalho em equipe",
      tip: "Critério que diz respeito a sua habilidade de trabalhar com outras pessoas, lidando com diferentes pontos de vista e pensando no bem comum do grupo.",
      grade: data.teamworkGrade,
      comment: data.teamworkComment,
    },
    {
      category: "Entregar com qualidade",
      tip: "Critério que diz respeito a sua habilidade de realizar entregas com qualidade, sendo essencial para um bom andamento de todo projeto para somar com a equipe.",
      grade: data.deliveringQualityGrade,
      comment: data.deliveringQualityComment,
    },
    {
      category: "Atender aos prazos",
      tip: "Critério que diz respeito a sua habilidade e atenção com as datas de entrega de suas atividades. Critério importante para um bom andamento de projetos.",
      grade: data.meetingDeadlinesGrade,
      comment: data.meetingDeadlinesComment,
    },
    {
      category: "Fazer mais com menos",
      tip: "Critério que diz respeito a sua habilidade de com poucos recursos conseguir realizar grandes entregas. Este valor está muito relacionado também com a produtividade de seu trabalho.",
      grade: data.doingMoreWithLessGrade,
      comment: data.doingMoreWithLessComment,
    },
    {
      category: "Pensar fora da caixa",
      tip: "Critério que diz respeito a sua habilidade de buscar fazer atividades do dia a dia de maneira diferente do convencional trazendo uma nova forma de se fazer e assim quem sabe surpreender com melhores resultados.",
      grade: data.outOfTheBoxThinkingExecutionGrade,
      comment: data.outOfTheBoxThinkingExecutionComment,
    },
  ];
}

function SelfEvalFormPart({
  index,
  title,
  subtitle,
  tip,
  gradeInitialOption,
  commentInitialValue,
}: SProps) {
  return (
    <div className="flex flex-col pt-6 items-center pb-10">
      <span className="flex flex-row self-start">
        <h1 className="font-bold text-[20px] leading-[30px] text-primary mr-3">
          {index}. {title}
        </h1>
        <TooltipProvider>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <InfoIcon className="stroke-primary"></InfoIcon>
            </TooltipTrigger>
            <TooltipContent
              align="center"
              side="right"
              className="bg-white rounded-2xl p-2 ml-2 border-0 border-none"
            >
              <TipSpeechBubble text={tip} triangleSide="left"></TipSpeechBubble>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </span>

      <p className="font-normal text-[16] leading-[24px] self-start mb-8">
        {subtitle}
      </p>

      <div className="flex flex-col justify-center items-center bg-[#252525] w-full h-[146px] rounded-xl mb-6 p-3 overflow-x-auto overflow-y-hidden">
        <CardeDeNota
          isManager={true}
          grade={gradeInitialOption - 1}
        ></CardeDeNota>
      </div>

      <div className="h-[112px] w-full bg-white rounded-2xl text-wrap p-3 font-normal resize-none text-left text-black">
        {commentInitialValue}
      </div>
    </div>
  );
}

const SelfEvaluationTab = () => {
  const [ selectedTab, setSelectedTab ] = useState(0);
  const { id } = useParams();
  const collabId = Number(id);
  const [ autoEval, setAutoEval ] =
    useState<GetSelffEvalByUserCycleIdsDto | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currCycle = await getCurrentCycle(token);
        console.log(currCycle);
        const autoEvalData = await getAutoEval(collabId, token, currCycle.id);
        console.log("Auto evaluation data:aaa", autoEval);
        setAutoEval(autoEvalData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Auto evaluation data:", autoEval);

  if (!autoEval) {
    return (
      <>
        <h1 className="text-primary font-bold text-[32px] leading[48px] pb-2 text-center">
          Não existem avaliações ainda.
        </h1>
      </>
    );
  }
  const info = transformDataToArray(autoEval);

  return (
    <>
      <Tabs
        type="ghost"
        tabs={["Critérios comportamentais", "Critérios de execução"]}
        onChange={setSelectedTab}
      />
      {selectedTab === 0
        ? info
            .slice(0, 4)
            .map((item, index) => (
              <SelfEvalFormPart
                key={index}
                index={index + 1}
                title={item.category}
                subtitle="Como você avaliaria sua performance nesse critério?"
                tip={item.tip}
                gradeInitialOption={item.grade}
                commentInitialValue={item.comment}
              />
            ))
        : info
            .slice(4)
            .map((item, index) => (
              <SelfEvalFormPart
                key={index + 4}
                index={index + 1}
                title={item.category}
                subtitle="Como você avaliaria sua performance nesse critério?"
                tip={item.tip}
                gradeInitialOption={item.grade}
                commentInitialValue={item.comment}
              />
            ))}
    </>
  );
};

export default SelfEvaluationTab;

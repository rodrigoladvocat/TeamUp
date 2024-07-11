import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import checkmark from "@/assets/checkmark.svg";
import GradePicker from "@/components/GradePicker";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ErrorResponseDto } from "@/dto/ErrorResponseDto";
import { api } from "@/services/apiService";
import { useNavigate } from "react-router-dom";

interface Props {
  index: number;
  title: string;
  subtitle: string;
  tip: string;
  gradeInitialOption: number;
  onGradeChange: (valueIndex: Grade) => void;
}

function EqualizationFormPart({
  index,
  title,
  gradeInitialOption,
  onGradeChange,
}: Props) {
  const gradeOptions = [1, 2, 3, 4, 5];
  const namedOptions = [
    "Precisa Melhorar",
    "Razoável",
    "Boa",
    "Muito Boa",
    "Excelente",
  ];

  return (
    <div className="flex flex-col pt-6 items-center">
      <div className=" bg-[#0f0f0f] w-full h-[89px] rounded-xl mb-6 p-3 overflow-x-auto overflow-y-hidden">
        <div className="flex flex-row items-center justify-between pr-6">
          <h1 className="font-bold text-[20px] leading-[30px] text-white ml-3">
            {index}. {title}
          </h1>
          <GradePicker
            type={"circles"}
            onChange={onGradeChange}
            gradeOptions={gradeOptions}
            namedOptions={namedOptions}
            initialValueIndex={gradeOptions.indexOf(gradeInitialOption) as Grade}
          />
        </div>
      </div>
    </div>
  );
}

interface TabProps {
  behaviourGrades: Grade[];
  executionGrades: Grade[];
  handleBehaviourGradeChange: (index: number, value: Grade) => void;
  handleExecutionGradeChange: (index: number, value: Grade) => void;
  isFinalized: boolean;
  isFormIncomplete: boolean;
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
  userId: number;
  collabId: number;
  cycleId: number;
  token: string;
}

const EqualizationTab = ({
    behaviourGrades, 
    executionGrades, 
    handleBehaviourGradeChange, 
    handleExecutionGradeChange, 
    isFinalized, 
    isFormIncomplete,
    isSubmitted,
    setIsSubmitted,
    userId, 
    collabId, 
    cycleId,
    token,
  }: TabProps) => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const navigate = useNavigate();

  async function handleSubmitForm() {
    if ( isLoading ) { return; }

    const parsedBehaviourGrades = behaviourGrades.map((grade) => grade === -1 ? 0 : grade);
    const parsedExecutionGrades = executionGrades.map((grade) => grade === -1 ? 0 : grade);

    const body: {
      collaboratorUserId: number
      managerUserId: number
      cycleId: number
      ownershipMentalityGrade: number
      learningAgilityGrade: number
      resilienceAdversityGrade: number
      teamworkGrade: number
      outOfTheBoxThinkingBehavioralGrade: number
      deliveringQualityGrade: number
      meetingDeadlinesGrade: number
      doingMoreWithLessGrade: number
      outOfTheBoxThinkingExecutionGrade: number
    } = {
      collaboratorUserId: collabId,
      managerUserId: userId,
      cycleId: cycleId,

      ownershipMentalityGrade: parsedBehaviourGrades[0],
      learningAgilityGrade: parsedBehaviourGrades[1],
      resilienceAdversityGrade: parsedBehaviourGrades[2],
      teamworkGrade: parsedBehaviourGrades[3],
      outOfTheBoxThinkingBehavioralGrade: parsedBehaviourGrades[4],

      deliveringQualityGrade: parsedExecutionGrades[0],
      meetingDeadlinesGrade: parsedExecutionGrades[1],
      doingMoreWithLessGrade: parsedExecutionGrades[2],
      outOfTheBoxThinkingExecutionGrade: parsedExecutionGrades[3],
    };

    setIsLoading(true);
    setIsSubmitted(true);
    setTimeout(() => {
      api
      .post("/tuning", body, { headers: { 'jwt': token } })
      .then((res: AxiosResponse) => {
        console.log("==============");
        console.log(behaviourGrades);
        console.log(executionGrades);
        console.log(body);
        console.log("==============");
        console.log(res);
        console.log("--------------");
        console.log(res.data);
        console.log("==============");

        setIsLoading(false);
        navigate("/evaluations");
      })
      .catch((e: AxiosError<ErrorResponseDto>) => {
        setIsLoading(false);
        setIsSubmitted(true);
        console.log(behaviourGrades);
        console.log(executionGrades);
        console.log(body);
        console.log(e);
      });
    }, 1500);
  }

  const comportamentalFormInfo = {
    titles: [
      "Sentimento de dono",
      "Resiliência nas adversidades",
      "Organização no trabalho",
      "Capacidade de aprender",
      "Trabalho em equipe",
    ],
    tips: [
      "É um sentimento de pertencimento, responsabilidade e engajamento, no qual os colaboradores se sentem investidos nos objetivos e resultados da organização.",
      "Capacidade de se adaptar em meio as mudanças.",
      "Critério que diz respeito a sua habilidade de estar atento com as atividades do seu trabalho em relação a como está os seus andamentos, o que já foi feito e o que ainda é necessário ser feito.",
      "Critério que diz respeito a sua habilidade de absorção de novas informações e conhecimentos.",
      "Critério que diz respeito a sua habilidade de trabalhar com outras pessoas, lidando com diferentes pontos de vista e pensando no bem comum do grupo.",
    ],
  };

  const executionalFormInfo = {
    titles: [
      "Entregar com qualidade",
      "Atender aos prazos",
      "Fazer mais com menos",
      "Pensar fora da caixa",
    ],
    tips: [
      "Critério que diz respeito a sua habilidade de realizar entregas com qualidade, sendo essencial para um bom andamento de todo projeto para somar com a equipe.",
      "Critério que diz respeito a sua habilidade e atenção com as datas de entrega de suas atividades. Critério importante para um bom andamento de projetos.",
      "Critério que diz respeito a sua habilidade de com poucos recursos conseguir realizar grandes entregas. Este valor está muito relacionado também com a produtividade de seu trabalho.",
      "Critério que diz respeito a sua habilidade de buscar fazer atividades do dia a dia de maneira diferente do convencional trazendo uma nova forma de se fazer e assim quem sabe surpreender com melhores resultados.",
    ],
  };

  return (
    <>
      <div className="pb-7 text-left">
        Após realizar a análise da visão geral do desempenho dos colaboradores,
        insira uma nota e um comentário final para compor a avaliação dos
        mesmos.
      </div>
      <div className="text-primary font-bold text-[24px] text-left">
        Critérios comportamentais
      </div>
      {comportamentalFormInfo.titles.map((title, index) => (
        <EqualizationFormPart
          key={index}
          index={index + 1}
          title={title}
          subtitle={"Como você avaliaria sua performance nesse critério?"}
          tip={comportamentalFormInfo.tips[index]}
          gradeInitialOption={behaviourGrades[index]}
          onGradeChange={(value) => handleBehaviourGradeChange(index, value)}
        />
      ))}
      <div className="text-primary font-bold text-[24px] text-left">
        Critérios comportamentais
      </div>
      {executionalFormInfo.titles.map((title, index) => (
        <EqualizationFormPart
          key={index}
          index={index + 1}
          title={title}
          subtitle={"Como você avaliaria sua performance nesse critério?"}
          tip={comportamentalFormInfo.tips[index]}
          gradeInitialOption={executionGrades[index]}
          onGradeChange={(value) => handleExecutionGradeChange(index, value)}
        />
      ))}

      

      <section className="flex flex-col items-end mt-[40px] mb-14">
        <Dialog>
          <DialogTrigger asChild className="w-[812px]">
            {isFormIncomplete || isFinalized ? (
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <div className="bg-hover-bg w-[168px] h-[48px] flex flex-row items-center justify-center rounded-md">
                      <p>Enviar</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    align="center"
                    side="top"
                    className="bg-white rounded-2xl p-2 ml-2 border-0 border-none"
                  >
                    <p className="font-normal text-[18px] leading-[24px] text-black">
                      {isFinalized 
                      ? "Formulário finalizado. Não pode mais enviar."
                      : "Formulário incompleto. Preencha completamente antes de enviar."
                      }
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                variant="default"
                size="default"
                className="bg-primary w-[168px] h-[48px]"
                disabled={isFinalized}
              >
                Enviar
              </Button>
            )}
          </DialogTrigger>
          <DialogContent
            className={`bg-purple-200 w-[812px] flex flex-col border-solid border-2 border-purple-500 ${isSubmitted ? 'items-center justify-center': ''}`}
            hasClose={false}
          >
          { isSubmitted 
          ? 
            <>
              <img src={checkmark} className=""/>
              <p className="font-semibold text-[32px] leading-[48px] text-black">Avaliação Enviada!</p>
            </>
          :
            <>
            <DialogHeader className="flex flex-col items-center">
              <DialogTitle className="font-bold text-[32px] leading-[48px] text-black">
                Tem certeza que deseja enviar a avaliação?
              </DialogTitle>
              <DialogDescription className="font-normal text-[20px] leading-[30px] text-center text-black">
                Após o envio não é possível realizar alterações.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="">
              <div className="flex flex-row justify-between items-center w-full mt-8">
                <DialogClose className="w-[168px] h-[48px] py-[8.5px] px-[68.5px] text-black bg-purple-200 border-solid border-1 border-content-background">
                  Não
                </DialogClose>

                <Button
                  variant="default"
                  onClick={handleSubmitForm}
                  className="w-[168px] h-[48px] py-[12px] px-[68.5px] text-black bg-primary border-none"
                >
                  Sim
                </Button>
              </div>
            </DialogFooter>
            </>
          }
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default EqualizationTab;

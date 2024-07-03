import GradePicker from "@/components/GradePicker";
import { useState } from "react";

interface Props {
  index: number;
  title: string;
  subtitle: string;
  tip: string;
  gradeInitialOption: number;
  onGradeChange: (valueIndex: number) => void;
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
            initialValueIndex={gradeOptions.indexOf(gradeInitialOption)}
          />
        </div>
      </div>
    </div>
  );
}

const EqualizationTab = () => {
  function onGradeChange(index: number, value: number): void {
    const newGrades = [...behaviourGrades];
    newGrades[index] = value + 1;
    setBehaviourGrades(newGrades);
  }

  const [behaviourGrades, setBehaviourGrades] = useState<number[]>(
    Array(5).fill(-1)
  );

  // function isFormIncomplete(): boolean {
  //   // Check if the form is completed filled
  //   const hasEmptyString = (someArray: string[]) =>
  //     someArray.some((x) => x === "");
  //   const hasNegativeOne = (someArray: number[]) =>
  //     someArray.some((x) => x === -1);

  //   if (
  //     hasNegativeOne(behaviourGrades) ||
  //     hasEmptyString(behaviourComments) ||
  //     hasNegativeOne(executionGrades) ||
  //     hasEmptyString(executionComments)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  // async function handleSubmitForm(option: "save" | "finish") {
  //   // if ( isFormIncomplete() ) {return;}

  //   const parsedBehaviourGrades = behaviourGrades.map((grade) =>
  //     grade === -1 ? 0 : grade
  //   );
  //   const parsedExecutionGrades = executionGrades.map((grade) =>
  //     grade === -1 ? 0 : grade
  //   );

  //   const body = {
  //     userId: user?.id,
  //     cycleId: _cycle?.id,

  //     ownershipMentalityGrade: parsedBehaviourGrades[0],
  //     ownershipMentalityComment: behaviourComments[0],
  //     learningAgilityGrade: parsedBehaviourGrades[1],
  //     learningAgilityComment: behaviourComments[1],
  //     resilienceAdversityGrade: parsedBehaviourGrades[2],
  //     resilienceAdversityComment: behaviourComments[2],
  //     teamworkGrade: parsedBehaviourGrades[3],
  //     teamworkComment: behaviourComments[3],
  //     outOfTheBoxThinkingBehavioralGrade: parsedBehaviourGrades[4],
  //     outOfTheBoxThinkingBehavioralComment: behaviourComments[4],

  //     deliveringQualityGrade: parsedExecutionGrades[0],
  //     deliveringQualityComment: executionComments[0],
  //     meetingDeadlinesGrade: parsedExecutionGrades[1],
  //     meetingDeadlinesComment: executionComments[1],
  //     doingMoreWithLessGrade: parsedExecutionGrades[2],
  //     doingMoreWithLessComment: executionComments[2],
  //     outOfTheBoxThinkingExecutionGrade: parsedExecutionGrades[3],
  //     outOfTheBoxThinkingExecutionComment: executionComments[3],

  //     isFinalized: option === "finish" ? true : false,
  //   };

  //   // api.post("", body).then(() => {}).catch(() => {});
  //   // api.patch("", body).then(() => {}).catch(() => {});
  //   if (option === "finish" || option === "save") {
  //     await api
  //       .post("/self-evaluation", body)
  //       .then((res: AxiosResponse) => {
  //         console.log("==============");
  //         console.log(behaviourGrades);
  //         console.log(executionGrades);
  //         console.log(body);
  //         console.log("==============");
  //         console.log(res);
  //         console.log("--------------");
  //         console.log(res.data);
  //         console.log("==============");
  //       })
  //       .catch((e: AxiosError<ErrorResponse>) => {
  //         console.log(behaviourGrades);
  //         console.log(executionGrades);
  //         console.log(body);
  //         console.log(e);
  //       });
  //   }
  // }

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
          gradeInitialOption={-1}
          onGradeChange={(value) => onGradeChange(index, value)}
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
          gradeInitialOption={behaviourGrades[index]}
          onGradeChange={(value) => onGradeChange(index, value)}
        />
      ))}

      {/* <section className="flex flex-col mt-14 mb-14">
        <p className="font-normal text-[16px] leading-[24px] text-white text-wrap text-left w-[55%]">
          Depois que você enviar não será mais possível editar, se você ainda
          não terminou ou quiser fazer edições futuras salve e continue a
          utilizar a plataforma.
        </p>
        <div className="flex flex-row justify-between items-center mt-[60px] px-[15%]">
          <Button
            variant="ghost"
            size="default"
            className="bg-transparent w-[168px] h-[48px] border-solid border-1 border-white"
            onClick={() => {
              handleSubmitForm("save");
            }}
            disabled={false}
            // disabled={autoEvalInfo.isFinalized || true ? true : false }
          >
            Salvar e continuar
          </Button>

          <Dialog>
            <DialogTrigger asChild className="w-[812px]">
              {isFormIncomplete() ? (
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
                        {selfEvalInfo.isFinalized
                          ? "Formulário Entregue. Não pode mais modificar."
                          : "Formulário incompleto. Preencha completamente antes de enviar."}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Button
                  variant="default"
                  size="default"
                  className="bg-primary w-[168px] h-[48px]"
                  disabled={selfEvalInfo.isFinalized ? true : false}
                >
                  Enviar
                </Button>
              )}
            </DialogTrigger>
            <DialogContent
              className="bg-[#D9D9D9] w-[812px] flex flex-col"
              hasClose={false}
            >
              <DialogHeader className="flex flex-col items-center">
                <DialogTitle className="font-bold text-[32px] leading-[48px] text-black">
                  Tem certeza que deseja enviar a avaliação?
                </DialogTitle>
                <DialogDescription className="font-normal text-[20px] leading-[30px] text-center text-black">
                  Após o envio não é possível realizar alterações, você pode
                  salvar e terminar até o último dia do ciclo avaliativo atual.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="">
                <div className="flex flex-row justify-between items-center w-full mt-8">
                  {/* <Button variant="ghost"
                        className="py-[12px] px-[68.5px] text-black bg-primary border-none selection:border-none"
                        onClick={(e) => {e.preventDefault();}}
                        >
                        Não
                        </Button> 
                  <DialogClose className="py-[8.5px] px-[68.5px] text-black bg-primary border-none">
                    Não
                  </DialogClose>
                  <Button
                    variant="default"
                    onClick={() => {
                      handleSubmitForm("finish");
                    }}
                    className="py-[12px] px-[68.5px] text-black bg-primary border-none"
                  >
                    Sim
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section> */}
    </>
  );
};

export default EqualizationTab;

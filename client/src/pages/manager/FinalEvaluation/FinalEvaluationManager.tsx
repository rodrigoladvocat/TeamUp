import { useEffect, useState } from "react";
import { ErrorResponse, useNavigate, useParams } from "react-router-dom";
import { Menu } from "@/components/Menu";
import { useAuth } from "@/hooks/AuthUser";
import arrow_left_circle from "../../../assets/arrow-left-circle.svg";
import defaultProfileImage from "../../../assets/default_profile_image.png";
import bell_icon from "../../../assets/bell.svg";
import Tabs from "@/components/Tabs";
import TagStage from "@/components/TagStage";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InfoIcon } from "lucide-react";
import GradePicker from "@/components/GradePicker";
import { useCycle } from "@/hooks/useCycle";
import { Button } from "@/components/ui/button";
import TipSpeechBubble from "@/components/TipSpeechBubble";
import { api } from "@/services/apiService";
import { AxiosError, AxiosResponse } from "axios";
import { getAutoEval } from "@/utils/getAutoEval";
import { getCurrentCycle } from "@/utils/getCurrentCycle";
import { GetSelffEvalByUserCycleIdsDto } from "@/dto/GetSelfEvalByUserCycleIdsDto";
import SelfEvaluationTab from "./SelfEvaluationTab";
import EqualizationTab from "./EqualizationTab";
import OtherEvaluationTab from "./OthersEvaluationTab";

interface Props {
  index: number;
  title: string;
  subtitle: string;
  tip: string;
  gradeInitialOption: number;
  commentInitialValue: string;
  onGradeChange: (valueIndex: number) => void;
  onCommentChange: (value: string) => void;
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
    <div className="flex flex-col px-[32px] pt-6 items-center">
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

function FormPart({
  index,
  title,
  subtitle,
  tip,
  gradeInitialOption,
  commentInitialValue,
  onGradeChange,
  onCommentChange,
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
    <div className="flex flex-col px-[32px] pt-6 items-center">
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

      <div className="flex flex-col items-center bg-[#252525] w-full h-[146px] rounded-xl mb-6 p-3 overflow-x-auto overflow-y-hidden">
        <GradePicker
          type={"cards"}
          onChange={onGradeChange}
          gradeOptions={gradeOptions}
          namedOptions={namedOptions}
          initialValueIndex={gradeOptions.indexOf(gradeInitialOption)}
        />
      </div>

      <textarea
        rows={5}
        className="h-40 w-full bg-white rounded-2xl text-wrap text-black p-3 font-normal resize-none"
        placeholder="Escreva aqui como você se avalia em relação a esse critério."
        onChange={(event) => {
          onCommentChange(event.target.value);
        }}
        value={commentInitialValue}
      ></textarea>
    </div>
  );
}

function equalization_tab(
  behaviourGrades: number[],
  onGradeChange: (index: number, newValue: number) => void,
  behaviourComments: string[],
  onCommentChange: (index: number, newValue: string) => void
) {
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
      <div className="px-[32px] pb-7 text-left">
        Após realizar a análise da visão geral do desempenho dos colaboradores,
        insira uma nota e um comentário final para compor a avaliação dos
        mesmos.
      </div>
      <div className="text-primary font-bold text-[24px] text-left px-[32px]">
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
          commentInitialValue={behaviourComments[index]}
          onGradeChange={(value) => onGradeChange(index, value)}
          onCommentChange={(value) => onCommentChange(index, value)}
        />
      ))}
      <div className="text-primary font-bold text-[24px] text-left px-[32px]">
        Critérios comportamentais
      </div>
      {executionalFormInfo.titles.map((title, index) => (
        <EqualizationFormPart
          key={index}
          index={index + 6}
          title={title}
          subtitle={"Como você avaliaria sua performance nesse critério?"}
          tip={comportamentalFormInfo.tips[index]}
          gradeInitialOption={behaviourGrades[index]}
          commentInitialValue={behaviourComments[index]}
          onGradeChange={(value) => onGradeChange(index, value)}
          onCommentChange={(value) => onCommentChange(index, value)}
        />
      ))}
    </>
  );
}

function roundAvaliaton_tab(
  executionGrades: number[],
  onGradeChange: (index: number, newValue: number) => void,
  executionComments: string[],
  onCommentChange: (index: number, newValue: string) => void
) {
  const formInfo = {
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
      {formInfo.titles.map((title, index) => (
        <FormPart
          key={10 + index}
          index={index + 1}
          title={title}
          subtitle={"Como você avaliaria sua performance nesse critério?"}
          tip={formInfo.tips[index]}
          gradeInitialOption={executionGrades[index]}
          commentInitialValue={executionComments[index]}
          onGradeChange={(value) => onGradeChange(index, value)}
          onCommentChange={(value) => onCommentChange(index, value)}
        />
      ))}
    </>
  );
}

function autoEvaluation_tab(data: GetSelffEvalByUserCycleIdsDto) {
  console.log("fioanfioa");
  console.log(data);

  function transformDataToArray(data: GetSelffEvalByUserCycleIdsDto) {
    return [
      {
        category: "Ownership Mentality",
        grade: data.ownershipMentalityGrade,
        comment: data.ownershipMentalityComment,
      },
      {
        category: "Learning Agility",
        grade: data.learningAgilityGrade,
        comment: data.learningAgilityComment,
      },
      {
        category: "Resilience Adversity",
        grade: data.resilienceAdversityGrade,
        comment: data.resilienceAdversityComment,
      },
      {
        category: "Teamwork",
        grade: data.teamworkGrade,
        comment: data.teamworkComment,
      },
      {
        category: "Out of the Box Thinking (Behavioral)",
        grade: data.outOfTheBoxThinkingBehavioralGrade,
        comment: data.outOfTheBoxThinkingBehavioralComment,
      },
      {
        category: "Delivering Quality",
        grade: data.deliveringQualityGrade,
        comment: data.deliveringQualityComment,
      },
      {
        category: "Meeting Deadlines",
        grade: data.meetingDeadlinesGrade,
        comment: data.meetingDeadlinesComment,
      },
      {
        category: "Doing More with Less",
        grade: data.doingMoreWithLessGrade,
        comment: data.doingMoreWithLessComment,
      },
      {
        category: "Out of the Box Thinking (Execution)",
        grade: data.outOfTheBoxThinkingExecutionGrade,
        comment: data.outOfTheBoxThinkingExecutionComment,
      },
    ];
  }

  const info = transformDataToArray(data);
  console.log(transformDataToArray(data));
  return (
    <>
      {info.map((item, index) => (
        <div key={index} className="evaluation-item">
          <h2>{item.category}</h2>
          <p>Grade: {item.grade}</p>
          <p>Comment: {item.comment}</p>
        </div>
      ))}
    </>
  );
}

export default function FinalEvaluationManagerPage(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(0);
  const [behaviourGrades, setBehaviourGrades] = useState<number[]>(
    Array(5).fill(-1)
  );
  const [behaviourComments, setBehaviourComments] = useState<string[]>(
    Array(5).fill("")
  );
  const [executionGrades, setExecutionGrades] = useState<number[]>(
    Array(4).fill(-1)
  );
  const [executionComments, setExecutionComments] = useState<string[]>(
    Array(4).fill("")
  );
  const { isAuthenticated, user } = useAuth();
  const { _cycle, endDate, endTime, startDate, callAllUpdates, selfEvalInfo } =
    useCycle();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    if (user) {
      // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, false);
    }
  }, []);

  useEffect(() => {
    if (selfEvalInfo.id !== -1) {
      console.log(selfEvalInfo);
      const behaviourGrades = [
        selfEvalInfo.ownershipMentalityGrade,
        selfEvalInfo.learningAgilityGrade,
        selfEvalInfo.resilienceAdversityGrade,
        selfEvalInfo.teamworkGrade,
        selfEvalInfo.outOfTheBoxThinkingBehavioralGrade,
      ];

      const behaviourComments = [
        selfEvalInfo.ownershipMentalityComment,
        selfEvalInfo.learningAgilityComment,
        selfEvalInfo.resilienceAdversityComment,
        selfEvalInfo.teamworkComment,
        selfEvalInfo.outOfTheBoxThinkingBehavioralComment,
      ];

      const executionGrades = [
        selfEvalInfo.deliveringQualityGrade,
        selfEvalInfo.meetingDeadlinesGrade,
        selfEvalInfo.doingMoreWithLessGrade,
        selfEvalInfo.outOfTheBoxThinkingExecutionGrade,
      ];

      const executionComments = [
        selfEvalInfo.deliveringQualityComment,
        selfEvalInfo.meetingDeadlinesComment,
        selfEvalInfo.doingMoreWithLessComment,
        selfEvalInfo.outOfTheBoxThinkingExecutionComment,
      ];

      setBehaviourGrades(behaviourGrades);
      setBehaviourComments(behaviourComments);
      setExecutionGrades(executionGrades);
      setBehaviourComments(executionComments);
    }
  }, [selfEvalInfo.id]);

  function handleBehaviourGradeChange(index: number, value: number): void {
    const newGrades = [...behaviourGrades];
    newGrades[index] = value + 1;
    setBehaviourGrades(newGrades);
  }

  function handleBehaviourCommentChange(index: number, value: string): void {
    const newComments = [...behaviourComments];
    newComments[index] = value;
    setBehaviourComments(newComments);
  }

  function handleExecutionGradeChange(index: number, value: number): void {
    const newGrades = [...executionGrades];
    newGrades[index] = value + 1;
    setExecutionGrades(newGrades);
  }

  function handleExecutionCommentChange(index: number, value: string): void {
    const newComments = [...executionComments];
    newComments[index] = value;
    setExecutionComments(newComments);
  }

  function isFormIncomplete(): boolean {
    // Check if the form is completed filled
    const hasEmptyString = (someArray: string[]) =>
      someArray.some((x) => x === "");
    const hasNegativeOne = (someArray: number[]) =>
      someArray.some((x) => x === -1);

    if (
      hasNegativeOne(behaviourGrades) ||
      hasEmptyString(behaviourComments) ||
      hasNegativeOne(executionGrades) ||
      hasEmptyString(executionComments)
    ) {
      return true;
    }
    return false;
  }

  async function handleSubmitForm(option: "save" | "finish") {
    // if ( isFormIncomplete() ) {return;}

    const parsedBehaviourGrades = behaviourGrades.map((grade) =>
      grade === -1 ? 0 : grade
    );
    const parsedExecutionGrades = executionGrades.map((grade) =>
      grade === -1 ? 0 : grade
    );

    const body = {
      userId: user?.id,
      cycleId: _cycle?.id,

      ownershipMentalityGrade: parsedBehaviourGrades[0],
      ownershipMentalityComment: behaviourComments[0],
      learningAgilityGrade: parsedBehaviourGrades[1],
      learningAgilityComment: behaviourComments[1],
      resilienceAdversityGrade: parsedBehaviourGrades[2],
      resilienceAdversityComment: behaviourComments[2],
      teamworkGrade: parsedBehaviourGrades[3],
      teamworkComment: behaviourComments[3],
      outOfTheBoxThinkingBehavioralGrade: parsedBehaviourGrades[4],
      outOfTheBoxThinkingBehavioralComment: behaviourComments[4],

      deliveringQualityGrade: parsedExecutionGrades[0],
      deliveringQualityComment: executionComments[0],
      meetingDeadlinesGrade: parsedExecutionGrades[1],
      meetingDeadlinesComment: executionComments[1],
      doingMoreWithLessGrade: parsedExecutionGrades[2],
      doingMoreWithLessComment: executionComments[2],
      outOfTheBoxThinkingExecutionGrade: parsedExecutionGrades[3],
      outOfTheBoxThinkingExecutionComment: executionComments[3],

      isFinalized: option === "finish" ? true : false,
    };

    // api.post("", body).then(() => {}).catch(() => {});
    // api.patch("", body).then(() => {}).catch(() => {});
    if (option === "finish" || option === "save") {
      await api
        .post("/self-evaluation", body)
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
        })
        .catch((e: AxiosError<ErrorResponse>) => {
          console.log(behaviourGrades);
          console.log(executionGrades);
          console.log(body);
          console.log(e);
        });
    }
  }

  const { id } = useParams(); // Extract the id parameter from the URL
  const collabId = Number(id);
  const [autoEval, setAutoEval] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currCycle = await getCurrentCycle();
        const autoEvalData = await getAutoEval(1, currCycle.id);
        setAutoEval(autoEvalData);
        console.log(autoEvalData);
        console.log("askfklasfjao");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [collabId]);

  console.log(autoEval);
  console.log("aiofnoia");

  return (
    <main className="flex flex-row w-screen h-screen max-h-screen p-6 bg-gray-900">
      <aside>
        <Menu></Menu>
      </aside>

      <div className="flex flex-col w-full ml-[16px]">
        <header className="flex flex-row justify-between">
          <div className="flex flex-row">
            <img
              src={arrow_left_circle}
              onClick={() => {
                navigate("/avaliacoes");
              }}
              className={`cursor-pointer size-8`}
              alt="arrow"
            />
            <span className="flex flex-col text-left ml-[8px]">
              <h1 className="text-primary font-bold text-[32px] leading[48px]">
                Autoavaliação
              </h1>
              <div className="flex flex-row ml-[2px]">
                <p className="text-white">{"Período aberto em"}&nbsp;</p>
                <p className="text-primary">{startDate}&nbsp;</p>
                <p className="text-white">{"e termina em"}&nbsp;</p>
                <p className="text-primary">{endDate}&nbsp;</p>
                <p className="text-white">
                  {"às "}
                  {endTime}
                </p>
              </div>
            </span>
          </div>

          <div className="flex flex-row items-center">
            <img
              src={bell_icon}
              className={"w-[32px] h-[24px]"}
              alt="Bell icon"
            />
            <span className="flex flex-row items-center ml-[32px]">
              <img
                src={user?.imgUrl || ""}
                onError={(e) => {
                  e.currentTarget.src = defaultProfileImage;
                }}
                className={"size-[54px]"}
                alt="Profile Image"
              />
              <p className="ml-2 font-normal text-[20px] leading-[30px]">
                {user?.name || "Fulano"}
              </p>
            </span>
          </div>
        </header>
        <section className="flex flex-row justify-between mt-11">
          <Tabs
            onChange={setSelectedTab}
            tabs={["Autoavaliação", "Avaliação360", "Avaliação Final"]}
          />
          <div className="mr-4">
            <TagStage stage={selfEvalInfo.selfEvalStage} />
          </div>
        </section>
        <div className="bg-[#212121] w-full h-full max-h-screen overflow-y-auto p-8">
          <form className="">
            {selectedTab === 0 ? (
              <SelfEvaluationTab></SelfEvaluationTab>
            ) : selectedTab === 1 ? (
              <OtherEvaluationTab></OtherEvaluationTab>
            ) : (
              <EqualizationTab></EqualizationTab>
            )}
          </form>

          <section className="flex flex-col mt-14 mb-14">
            <p className="font-normal text-[16px] leading-[24px] text-white text-wrap text-left w-[55%]">
              Depois que você enviar não será mais possível editar, se você
              ainda não terminou ou quiser fazer edições futuras salve e
              continue a utilizar a plataforma.
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
                      salvar e terminar até o último dia do ciclo avaliativo
                      atual.
                    </DialogDescription>
                  </DialogHeader>

                  <DialogFooter className="">
                    <div className="flex flex-row justify-between items-center w-full mt-8">
                      {/* <Button variant="ghost"
                        className="py-[12px] px-[68.5px] text-black bg-primary border-none selection:border-none"
                        onClick={(e) => {e.preventDefault();}}
                        >
                        Não
                        </Button> */}
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
          </section>
        </div>{" "}
        {/* End of Form + Section */}
      </div>
    </main>
  );
}

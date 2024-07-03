import { useState, useEffect } from "react";
import { ErrorResponse, useNavigate } from "react-router-dom";
import arrow_left_circle from "../../assets/arrow-left-circle.svg";
import defaultProfileImage from '../../assets/default_profile_image.png';
import bell_icon from "../../assets/bell.svg";
import { useAuth } from "@/hooks/AuthUser";
import { useCycle } from "@/hooks/useCycle";
import { Menu } from "@/components/Menu";
import { api } from "@/services/apiService";
import GradeForm from "@/components/GradeForm";
import { UserDto } from "@/dto/UserDto";
import { AxiosError, AxiosResponse } from "axios";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter, DialogTrigger, Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Eval {
  grade: Grade;
  comment: string;
}

type CollaboratorId = number;

export default function OthersEvaluationCollaboratorPage(): JSX.Element {
  const [ collaborators, setCollaboratos ] = useState<UserDto[]>([]);
  const [ map, setMap ] = useState<Map<CollaboratorId, Eval>>(new Map());
  const [ isLoading, setIsLoading ] = useState(false);
  const [ dummyState, forceUpdate ] = useState(0);
  const [ search, setSearch ] = useState("");
  const { isAuthenticated, user } = useAuth();
  const { _cycle, endDate, endTime, startDate, callAllUpdates, othersEvalInfo } = useCycle();

  const navigate = useNavigate();

  const collaboratorsWithoutLoggedUser = collaborators.filter(c => c.id !== user?.id);
  const isOhersEvalFinalized = othersEvalInfo.othersEvalStage.filter((s) => s === "Entregue").length > 0;
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }

    if (user) { // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, false);
    }

    api.get("/user/collaborators/find").then((res: AxiosResponse<UserDto[]>) => {
      setCollaboratos(res.data);
    });
  }, []);

  useEffect(() => {

    if (othersEvalInfo.evaluatedUserId.length > 0) {
      console.log(othersEvalInfo);
      
      const newMap = new Map();
      othersEvalInfo.evaluatedUserId.map((id, i) => {
        newMap.set(id, {grade: othersEvalInfo.grade[i], comment: othersEvalInfo.comment[i]});
      });
      
      setMap(newMap);
    }
  }, [othersEvalInfo.evaluatedUserId.length]);


  function handleUpdateEval(collaboratorId: number, comment: string, grade: Grade): void {
    const updatedMap = map.set(collaboratorId, {comment: comment, grade: grade});
    // const completelyFilledEvals = [...updatedMap.values()].filter((value) => 
    //   value.grade !== -1
    // );
    // console.log("=----------------=");
    // console.log(completelyFilledEvals);
    // console.log(isFormIncomplete());
    // console.log(updatedMap);
    // console.log("=----------------=");
    setMap(updatedMap); // Same data structure ref does not trigger update
    forceUpdate(dummyState === 0 ? 1 : 0);
  }


  function cleanUnfilledEval(oldMap: Map<CollaboratorId, Eval>): Map<CollaboratorId, Eval> {
    return new Map([...oldMap.entries()].filter(([key, value]) => 
      value.comment.replace(/\s/g, "") && value.grade !== -1
    ));
  }


  // function addTextEmptyCommentsWithGrade(oldMap: Map<CollaboratorId, Eval>): Map<CollaboratorId, Eval> {
  //   return new Map([...oldMap.entries()].map(([key, value]) => {
  //     if (value.comment.replace(/\s/g, "") === "") {
  //       return [key, { ...value, comment: "Nota sem comentário. Nenhum comentário foi escrito." }];
  //     }
  //     return [key, value];
  //   }));
  // }


  function isFormIncomplete(): boolean {
    const completelyFilledEvals = [...map.values()].filter((value) => 
      value.comment.replace(/\s/g, "") && value.grade !== -1
    );
    return completelyFilledEvals.length === 0;
  }


  function handleSubmitForm(option: "save" | "finish"): void {
    if (isLoading) { return; }

    // Make sure that only filled strings and completely filled GradeForms are send to backend
    const parsedMap = cleanUnfilledEval(map) 

    const body = [...parsedMap.entries()].map(([key, value]) => {
      return {
        evaluatedUserId: key,
        grade: value.grade,
        comment: value.comment,
        isFinalized: option === "finish" ? true : false,
      };
    });

    setIsLoading(true);
    api.post(
      `/others-evaluation/submit-evaluation/latest-cycle/${user?.id}`, 
      body
    ).then((res: AxiosResponse) => {
      console.log("Deu tudo certo.");
      console.log("==============");
      console.log(map);
      console.log(parsedMap);
      console.log(body);
      console.log("==============");
      console.log(res);
      console.log("--------------");
      console.log(res.data);
      console.log("==============");
      setIsLoading(false);
      navigate("/evaluations");
    }).catch((e: AxiosError<ErrorResponse>) => {
      console.log(e);
    });
  }


  const filteredCollaborators = collaboratorsWithoutLoggedUser.filter((collaborator) => {

    if (search === "") {
      return true;
    }

    let searchAllowDisplay = false;

    const words = search.toLowerCase().split(" ");
    words.forEach(word => {
      if (collaborator.name.toLowerCase().includes(word) || collaborator.role.toLowerCase().includes(word)) {
        searchAllowDisplay = true;
      }
    });

    return searchAllowDisplay;
  });

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
              onClick={() => {navigate('/evaluations')}}
              className={`cursor-pointer size-8`}
              alt="arrow"
            />
            <span className="flex flex-col text-left ml-[8px]">
              <h1 className="text-primary font-bold text-[32px] leading[48px]">Avaliação 360º</h1>
              <div className="flex flex-row ml-[2px]">
                <p className="text-white">{"Período aberto em"}&nbsp;</p>
                <p className="text-primary">{startDate}&nbsp;</p>
                <p className="text-white">{"e termina em"}&nbsp;</p>
                <p className="text-primary">{endDate}&nbsp;</p>
                <p className="text-white">{"às "}{endTime}</p>
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
                onError={(e) => { e.currentTarget.src = defaultProfileImage; }}
                className={"size-[54px] rounded-full"}
                alt="Profile Image"
              />
              <p className="ml-2 font-normal text-[20px] leading-[30px]">{user?.name || "Fulano"}</p>
            </span>
          </div>
        </header>

        <section className="flex flex-col justify-start space-y-[32px] mt-[20px] mb-[24px]">
          <p className="text-normal text-16 leading-[24px]">
            Escolha alguns colaboradores que deseja avaliar e avalie eles com uma nota de 1 a 5 escrevendo também um comentário sobre sua experiência de trabalho com os mesmos. Sendo 1 para colaboradores que no seu ponto de vista precisam melhorar e 5 para aqueles que você tem ótimos feedbacks sobre seu trabalho.
          </p>
          <div className="relative w-[500px]">
            <Input  className="border-2 border-solid border-primary rounded-2xl pr-12"
                    type="search" 
                    name="search" 
                    placeholder="Busque um colaborador por nome ou função" 
                    value={search}
                    onChange={(event) => { setSearch(event.target.value) }}>
            </Input>
            <Search className="absolute right-3 top-[20%] text-gray-500 cursor-pointer" 
                    onClick={() => {}}
            />
          </div>
        </section>

        <div className="bg-[#212121] w-full h-full max-h-screen overflow-y-auto p-8 rounded-2xl">
          <form className="space-y-8">
            {filteredCollaborators.map((collaborator, i) => {
              return(
                <div key={i}>
                  <GradeForm 
                    userDisplayKey={i+collaboratorsWithoutLoggedUser.length*1}
                    gradePickerKey={i+collaboratorsWithoutLoggedUser.length*2}
                    textAreaKey={i+collaboratorsWithoutLoggedUser.length*3}
                    profileUrl={collaborator.imgUrl} 
                    name={collaborator.name} 
                    role={collaborator.role} 
                    pickerInitialValue={map.get(collaborator.id)?.grade || -1}
                    commentInitialText={map.get(collaborator.id)?.comment || ""}
                    onChange={(comment, grade) => handleUpdateEval(collaborator.id, comment, grade)}
                  />
                </div>
              );
            })}
          </form>
          
          <section className="flex flex-col mt-14 mb-14">
            <p className="font-normal text-[16px] leading-[24px] text-white text-wrap text-left w-[55%]">
              Depois que você enviar não será mais possível editar, se você ainda não terminou ou quiser fazer edições futuras salve e continue a utilizar a plataforma.
            </p>
            <div className="flex flex-row justify-between items-center mt-[60px] px-[15%]">

              <Button variant="ghost" size="default"
                className="bg-transparent w-[168px] h-[48px] border-solid border-1 border-white" 
                onClick={() => {handleSubmitForm("save")}}
                disabled={isOhersEvalFinalized ? true : false}
                >
                Salvar e continuar
              </Button>

              <Dialog>
                <DialogTrigger asChild className="w-[812px]">
                  {isFormIncomplete() 
                    ? 
                    <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <div className="bg-hover-bg w-[168px] h-[48px] flex flex-row items-center justify-center rounded-md">
                            <p>Enviar</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent align="center" side="top" className="bg-white rounded-2xl p-2 ml-2 border-0 border-none">
                          <p className="font-normal text-[18px] leading-[24px] text-black">
                            { isOhersEvalFinalized
                            ? "Formulário Entregue. Não pode mais modificar."
                            : "Formulário incompleto, preencha ao menos 1 para enviar."
                            }
                          </p>
                        </TooltipContent>
                      </Tooltip>
                      </TooltipProvider>
                    :
                    <Button variant="default" size="default"
                    className="bg-primary w-[168px] h-[48px]" 
                    disabled={isOhersEvalFinalized ? true : false}
                    >
                      Enviar
                    </Button>
                  }
                </DialogTrigger>
                <DialogContent className="bg-[#D9D9D9] w-[812px] flex flex-col" hasClose={false}>
                  
                  <DialogHeader className="flex flex-col items-center">
                    <DialogTitle className="font-bold text-[32px] leading-[48px] text-black">
                      Tem certeza que deseja enviar a avaliação?
                    </DialogTitle>
                    <DialogDescription className="font-normal text-[20px] leading-[30px] text-center text-black">
                      Após o envio não é possível realizar alterações, você pode salvar e terminar até o último dia do ciclo avaliativo atual.
                    </DialogDescription>
                  </DialogHeader>
                    
                  <DialogFooter className="">
                    <div className="flex flex-row justify-between items-center w-full mt-8">
                      <DialogClose className="py-[8.5px] px-[68.5px] text-black bg-primary border-none">
                        Não
                      </DialogClose>
                      <Button variant="default" 
                        onClick={() => {handleSubmitForm("finish")}}
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

        </div> {/* End of Form + Section */}

      </div> {/* 2 Column div (Menu and Form) */}

    </main>
  );
}

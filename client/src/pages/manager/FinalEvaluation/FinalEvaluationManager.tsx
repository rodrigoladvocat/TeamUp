import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Menu } from "@/components/Menu";
import { useAuth } from "@/hooks/AuthUser";
import arrow_left_circle from "../../../assets/arrow-left-circle.svg";
import defaultProfileImage from "../../../assets/default_profile_image.png";
import Tabs from "@/components/Tabs";
import SelfEvaluationTab from "./SelfEvaluationTab";
import EqualizationTab from "./EqualizationTab";
import OtherEvaluationTab from "./OthersEvaluationTab";
import { useMenu } from "@/context/MenuContext";
import { useCycle } from "@/hooks/useCycle";
import { AxiosResponse } from "axios";
import { api } from "@/services/apiService";
import { GetCollaboratorTuningDto } from "@/dto/GetCollaboratorTuningDto";

export default function FinalEvaluationManagerPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isFinalized, setIsFinalized] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);
  const [behaviourGrades, setBehaviourGrades] = useState<Grade[]>(
    Array(5).fill(-1)
  );
  const [executionGrades, setExecutionGrades] = useState<Grade[]>(
    Array(4).fill(-1)
  );
  const { isAuthenticated, user } = useAuth();
  const { _cycle, callAllUpdates } = useCycle();
  const { setMenu } = useMenu();

  const navigate = useNavigate();
  const collaboratorId = Number(id);

  useEffect(() => {
    setMenu(2);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    if (user && !_cycle) {
      // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, false);
    }
  }, []);

  useEffect(() => {
    if (_cycle) {
      api
        .get(`tuning/${collaboratorId}/${_cycle?.id}`)
        .then((res: AxiosResponse<GetCollaboratorTuningDto>) => {
          setIsFinalized(res.data.id ? true : false);
        });
    }
  }, [_cycle?.id]);

  useEffect(() => {
    // Check if the form is completed filled
    const hasInvalidGrade = (someArray: number[]) =>
      someArray.some((x) => x <= 0);
    console.log(behaviourGrades, hasInvalidGrade(behaviourGrades));
    console.log(executionGrades, hasInvalidGrade(executionGrades));
    if (hasInvalidGrade(behaviourGrades) || hasInvalidGrade(executionGrades)) {
      setIsFormIncomplete(true);
      return;
    }
    setIsFormIncomplete(false);
  }, [behaviourGrades, executionGrades]);

  function handleBehaviourGradeChange(index: number, value: Grade): void {
    const newGrades = [...behaviourGrades];
    newGrades[index] = (value + 1) as Grade;
    setBehaviourGrades(newGrades);
  }

  function handleExecutionGradeChange(index: number, value: Grade): void {
    const newGrades = [...executionGrades];
    newGrades[index] = (value + 1) as Grade;
    setExecutionGrades(newGrades);
  }

  return (
    <div className="flex flex-row w-screen h-screen justify-center max-h-screen p-6 bg-general-background text-white">
      <div className="flex">
        <aside>
          <Menu></Menu>
        </aside>

        <main className="flex-1 p-6 h-[820px] w-[64.25rem]">
          <header className="flex flex-row justify-between">
            <div className="flex flex-row">
              <img
                src={arrow_left_circle}
                onClick={() => {
                  navigate("/evaluations");
                }}
                className={`cursor-pointer size-8`}
                alt="arrow"
              />
              <span className="flex flex-col text-left ml-[8px]">
                <h1 className="text-primary font-bold text-[32px] leading[48px] pb-2">
                  Avaliações
                </h1>
                {selectedTab === 0 ? (
                  <p className="text-20">
                    Avaliação realizada pelo próprio colaborador
                  </p>
                ) : selectedTab === 1 ? (
                  <p className="text-20">
                    Avaliações recebidas pelo colaborador
                  </p>
                ) : (
                  <p className="text-20">
                    Dê sua nota final para o colaborador
                  </p>
                )}
              </span>
            </div>

            <div className="flex items-start flex-col self-start">
              <div className="flex flex-row items-center">
                <img
                  src={user?.imgUrl}
                  alt={user?.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span>{user?.name}</span>
              </div>
            </div>
          </header>
          <section className="flex flex-row justify-between mt-11">
            <Tabs
              onChange={setSelectedTab}
              tabs={["Autoavaliação", "Avaliação 360º", "Avaliação final"]}
            />
          </section>
          <div className="bg-[#212121] w-[993px] h-[724px] overflow-y-scroll">
            <form className="w-full p-8">
              {selectedTab === 0 ? (
                <SelfEvaluationTab></SelfEvaluationTab>
              ) : selectedTab === 1 ? (
                <OtherEvaluationTab></OtherEvaluationTab>
              ) : (
                <>
                  {_cycle ? (
                    <EqualizationTab
                      behaviourGrades={behaviourGrades}
                      executionGrades={executionGrades}
                      handleBehaviourGradeChange={handleBehaviourGradeChange}
                      handleExecutionGradeChange={handleExecutionGradeChange}
                      isFinalized={isFinalized}
                      isFormIncomplete={isFormIncomplete}
                      isSubmitted={isSubmitted}
                      setIsSubmitted={setIsSubmitted}
                      userId={user?.id || 0}
                      collabId={collaboratorId}
                      cycleId={_cycle?.id || 0}
                    />
                  ) : (
                    <p>Ciclo está nulo</p>
                  )}
                </>
              )}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

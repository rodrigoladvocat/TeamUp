import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "@/components/Menu";
import { useAuth } from "@/hooks/AuthUser";
import { useCycle } from "@/hooks/useCycle";
import defaultProfileImage from "../../assets/default_profile_image.png";
import { api } from "@/services/apiService";
import { AxiosResponse } from "axios";
import TagStage from "@/components/TagStage";
import { GetCollaboratorsStageDto } from "@/dto/GetCollaboratorsStageDto";
import { Button } from "@/components/ui/button";
import { useMenu } from "@/context/MenuContext";

export default function CycleManagerPage(): JSX.Element {
  const [collaborators, setCollaboratos] = useState<GetCollaboratorsStageDto[]>(
    []
  );
  const { isAuthenticated, user } = useAuth();
  const {
    endDate,
    daysToFinish,
    callAllUpdates,
    tunningEndDate,
    isOngoingOrEnded,
  } = useCycle();
  const { setMenu } = useMenu();

  const navigate = useNavigate();

  const counts = {
    notInitialized: collaborators.filter((c) => c.stage === "Não iniciado")
      .length,
    inProgress: collaborators.filter((c) => c.stage === "Em andamento").length,
    finilized: collaborators.filter((c) => c.stage === "Concluída").length,
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    setMenu(2);

    if (user) {
      // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, false);
    }

    api
      .get("/tuning/collaborators-stage")
      .then((res: AxiosResponse<GetCollaboratorsStageDto[]>) => {
        setCollaboratos(res.data);
      });

    console.log(collaborators);
    console.log(counts);
  }, []);

  return (
    <div className="flex flex-row justify-center w-[1440px] h-screen min-h-screen p-6 bg-general-background text-white">
      <aside>
        <Menu></Menu>
      </aside>

      <main className="flex-1 p-6 bg-general-background h-[920px]">
        <header className="flex flex-row justify-between items-start">
          <div className="flex flex-row">
            <span className="flex flex-col text-left ml-[8px]">
              <h1 className="text-primary font-bold text-[32px] leading[48px]">
                Avaliações
              </h1>
              <p className="font-normal text-20 leading-[30px]">
                Acompanhe o andamento do ciclo avaliativo 2023.2
              </p>
            </span>
          </div>

          <span
            className="flex flex-row items-center ml-[32px] cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <img
              src={user?.imgUrl || ""}
              onError={(e) => {
                e.currentTarget.src = defaultProfileImage;
              }}
              className={"size-[52px] rounded-full"}
              alt="Profile Image"
            />
            <p className="ml-2 font-normal text-[20px] leading-[30px] hover:text-primary">
              {user?.name || "Erro carregando nome"}
            </p>
          </span>
        </header>

        <section className="flex flex-col mt-8">
          <div className="flex flex-row items-center">
            <p className="font-semibold text-20 leading-[30px] text-primary">
              Status do ciclo atual: &nbsp;
            </p>
            <p className="font-normal text-16 leading-[24px]">
              {isOngoingOrEnded}
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="font-normal text-16 leading-[24px]">
              {isOngoingOrEnded === "Em andamento"
                ? `O ciclo atual fecha em ${daysToFinish} dias (${endDate})`
                : `O ciclo atual fechou`}
            </p>
            {isOngoingOrEnded === "Em andamento" ? (
              <div className="flex flex-row space-x-[48px]">
                <p className="text-gray-300">
                  Não iniciado: {counts.notInitialized}
                </p>
                <p className="text-yellow-400">
                  Em andamento: {counts.inProgress}
                </p>
                <p className="text-green-400">Concluída: {counts.finilized}</p>
              </div>
            ) : (
              <div className="flex flex-row">
                <p className="font-semibold text-16 leading-[24px]">
                  Realize a avaliação dos colaboradores até dia &nbsp;
                </p>
                <p className="font-semibold text-16 leading-[24px] text-primary">
                  {tunningEndDate}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#212121] p-8 mt-8 rounded-2xl">
          <div className="bg-black rounded-2xl py-[12px] px-[20px] h-[650px] overflow-y-auto">
          {/* <section className="bg-[#212121] h-[45rem] overflow-y-auto p-8 mt-4 rounded-2xl">
          <div className="bg-black rounded-2xl h-fit py-[12px] px-[20px]"> */}
          {/* AQUI VERIFICAR */}
            {collaborators.map((collaborator, i) => {
              return (
                <div
                  key={i}
                  className="grid grid-cols-4 h-[88px] justify-center items-center"
                >
                  <div className="w-16 h-16 flex justify-center items-center overflow-hidden rounded-full bg-gray-200">
                    <img
                      className="w-full h-full object-cover object-top"
                      src={collaborator.imgUrl}
                      alt="Profile picture"
                      onError={(e) => {
                        e.currentTarget.src = defaultProfileImage;
                      }}
                    />
                  </div>
                  <p className="font-bold text-20 leading-[30px] text-left flex items-center">
                    {collaborator.name}
                  </p>
                  <p className="font-normal text-16 leading-[24px] text-left flex items-center">
                    {collaborator.role}
                  </p>
                  {isOngoingOrEnded === "Em andamento" ? (
                    <div className="flex items-center">
                      <TagStage stage={collaborator.stage} />
                    </div>
                  ) : (
                    <Button
                      className="bg-primary max-w-fit text-14 leading-[21px] text-[#263238]"
                      variant={"default"}
                      size={"default"}
                      onClick={() =>
                        navigate(`/evaluations/${collaborator.id}`)
                      }
                    >
                      Avaliar
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

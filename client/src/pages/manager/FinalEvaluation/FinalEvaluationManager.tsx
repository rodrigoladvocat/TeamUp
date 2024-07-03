import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "@/components/Menu";
import { useAuth } from "@/hooks/AuthUser";
import arrow_left_circle from "../../../assets/arrow-left-circle.svg";
import defaultProfileImage from "../../../assets/default_profile_image.png";
import bell_icon from "../../../assets/bell.svg";
import Tabs from "@/components/Tabs";
import SelfEvaluationTab from "./SelfEvaluationTab";
import EqualizationTab from "./EqualizationTab";
import OtherEvaluationTab from "./OthersEvaluationTab";
import { useMenu } from "@/context/MenuContext";

export default function FinalEvaluationManagerPage(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(0);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { setMenu } = useMenu();

  useEffect(() => {
    setMenu(2);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <main className="flex flex-row w-screen h-screen max-h-screen p-6 bg-[#121212]">
      <aside>
        <Menu></Menu>
      </aside>

      <div className="flex flex-col w-full ml-[16px] mr-[32px]">
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
              <h1 className="text-primary font-bold text-[32px] leading[48px] pb-2">
                Avaliações
              </h1>
              {selectedTab === 0 ? (
                <p className="text-20">
                  Avaliação realizada pelo próprio colaborador
                </p>
              ) : selectedTab === 1 ? (
                <p className="text-20">Avaliações recebidas pelo colaborador</p>
              ) : (
                <p className="text-20">Dê sua nota final para o colaborador</p>
              )}
            </span>
          </div>

          <div className="flex flex-row items-center pr-8">
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
        <section className="flex flex-row justify-between mt-11 w-full">
          <Tabs
            onChange={setSelectedTab}
            tabs={["Autoavaliação", "Avaliação 360º", "Avaliação final"]}
          />
        </section>
        <div className="bg-[#212121] w-full h-full max-h-screen overflow-y-auto">
          <form className="w-full p-8">
            {selectedTab === 0 ? (
              <SelfEvaluationTab></SelfEvaluationTab>
            ) : selectedTab === 1 ? (
              <OtherEvaluationTab></OtherEvaluationTab>
            ) : (
              <EqualizationTab></EqualizationTab>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

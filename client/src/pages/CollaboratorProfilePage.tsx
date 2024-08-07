import { useContext, useEffect, useState } from "react";
import { getCollaboratorsById } from "@/utils/getCollaboratorsById";
import { Menu } from "@/components/Menu";
import { Link, useParams, useNavigate } from "react-router-dom";
import arrowBack from "../assets/arrow-back-circle.svg";
import { AuthContext } from "@/context/AuthContext";
import defaultProfileImage from "@/assets/default_profile_image.png";
import { useMenu } from "@/context/MenuContext";

interface CollaboratorProps {
  name: string;
  role: string;
  imgUrl: string;
  age: number;
  id: string;
  telephone: string;
  email: string;
  street: string;
  state: string;
  cpf: string;
  bio: string;
  admissionDate: string;
}

const Profile = () => {
  const { setMenu } = useMenu();
  setMenu(1);
  const { id } = useParams<{ id?: string }>();
  const [ otherUser, setOtherUser] = useState<CollaboratorProps | null>(null);
  const { user, token } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCollaboratorsById(id || "", token);
        const formattedDate = new Date(
          userData.admissionDate
        ).toLocaleDateString("pt-BR");
        setOtherUser({ ...userData, admissionDate: formattedDate });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]); // Fetch data whenever id changes

  if (!otherUser) {
    return (
      <div className="flex flex-row w-screen h-screen justify-center max-h-screen p-6 bg-general-background text-white">
        <div className="flex">
          <aside>
            <Menu></Menu>
          </aside>
          <main className="flex-1 p-6 h-[820px] w-[64.25rem]"></main>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-row w-[1440px] h-screen justify-center max-h-screen p-6 text-white">
      <aside>
        <Menu></Menu>
      </aside>

      <main className="flex flex-col p-6 bg-general-background h-[920px] w-full">

        <header className="flex flex-row justify-between items-center mb-3">
          <h1 className="text-32 text-left text-purple-text font-bold">
            <div className="flex flex-row">
              <Link to={"/home"}>
                <div className="pr-2 pt-1">
                  <img src={arrowBack} alt="Arrow Back" />
                </div>
              </Link>

              <div>
                <p className="">Colaboradores</p>
                <p className="mt-1 text-white text-20 font-poppins font-normal flex flex-row">
                  Perfil de colaborador
                  <p className="text-primary">&nbsp; &gt; &nbsp;{otherUser.name}</p>
                </p>
              </div>
            </div>
          </h1>
          <div className="flex items-center">
            <img
              src={user?.imgUrl}
              alt={user?.name}
              className="size-[52px] rounded-full mr-2"
            />
            <p className="font-normal text-20 leading-[30px]">{user?.name}</p>
          </div>
        </header>

        <div className="flex flex-col bg-[#212020] h-full mt-4 overflow-y-hidden">
          <div className="flex flex-row justify-evenly gap-x-[52px] py-10">
            <div className="w-[283px]">
              <div className="">
                <img
                  src={otherUser.imgUrl}
                  alt={otherUser.name}
                  className="w-[275px] h-[275px] object-cover rounded-full"
                  onError={(e) => { e.currentTarget.src = defaultProfileImage; }}
                />
              </div>
              <p className="pt-10 text-[24px] font-semibold">
                {otherUser.name}
              </p>
              <p className="pt-3 text-primary text-16">{otherUser.role}</p>
              <span className="pt-4">
                <p className="text-primary text-16">
                  Data de admissão:{" "}
                </p>
                <p>{otherUser.admissionDate}</p>
              </span>
              <p className="pt-16 text-primary text-16">
                Status do colaborador:
              </p>
              <div className="pt-2 pb-16 flex justify-center">
                <div className="h-[42px] w-[86px] rounded bg-[#1B7E53]">
                  <div className="py-3 text-[12px]">Ativo</div>
                </div>
              </div>
              <button className="bg-primary text-[#263238] text-16 font-medium"
                      onClick={() => navigate(`/grades/collaborator/${id}/grades`)}>
                Visualizar notas
              </button>
            </div>

            <div className="w-[384px]">
              <div>
                <p className="text-left text-purple-text font-bold text-20">
                  Sobre mim
                </p>
                <p className="text-left text-16 h-[127px]">{otherUser.bio}</p>
              </div>
              <div>
                <p className="text-left text-purple-text font-bold text-20 py-3">
                  Idade
                </p>
                <input
                  type="text"
                  className="w-full pl-6 pr-12 py-2 rounded-xl read-only:bg-[#333] placeholder-white border-0 outline-none"
                  placeholder={`${otherUser.age} anos`}
                  readOnly
                />
              </div>
              <div>
                <div className="text-left text-purple-text font-bold text-20 py-3">
                  ID
                </div>
                <input
                  type="text"
                  className="w-full pl-6 pr-12 py-2 rounded-xl read-only:bg-[#333] placeholder-white border-0 outline-none"
                  placeholder={otherUser.id}
                  readOnly
                />
              </div>
              <div>
                <div className="text-left text-purple-text font-bold text-20 py-3">
                  Telefone
                </div>
                <input
                  type="text"
                  className="w-full pl-6 pr-12 py-2 rounded-xl read-only:bg-[#333] placeholder-white border-0 outline-none"
                  placeholder={otherUser.telephone}
                  readOnly
                />
              </div>
              <div>
                <div className="text-left text-purple-text font-bold text-20 py-3">
                  E-mail
                </div>
                <input
                  type="text"
                  className="w-full pl-6 pr-12 py-2 rounded-xl read-only:bg-[#333] placeholder-white border-0 outline-none"
                  placeholder={otherUser.email}
                  readOnly
                />
              </div>
              <div>
                <div className="text-left text-purple-text font-bold text-20 py-3">
                  Endereço
                </div>
                <input
                  type="text"
                  className="w-full pl-6 pr-12 py-2 rounded-xl read-only:bg-[#333] placeholder-white border-0 outline-none"
                  placeholder={otherUser.street + ", " + otherUser.state}
                  readOnly
                />
              </div>
              <div>
                <div className="text-left text-purple-text font-bold text-20 py-3">
                  CPF
                </div>
                <input
                  type="text"
                  className="w-full pl-6 pr-12 py-2 rounded-xl read-only:bg-[#333] placeholder-white border-0 outline-none"
                  placeholder={otherUser.cpf}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

import { useContext, useEffect, useState } from "react";
import { getCollaboratorsById } from "@/utils/getCollaboratorsById";
import { Menu } from "@/components/Menu";
import { Link, useParams } from "react-router-dom";
import arrowBack from "../assets/arrow-back-circle.svg";
import { AuthContext } from "@/context/AuthContext";
import defaultProfileImage from "@/assets/default_profile_image.png";
import { useNavigate } from "react-router-dom";

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
  const { id } = useParams<{ id?: string }>();
  const [user, setUser] = useState<CollaboratorProps | null>(null);
  const [collaborator, setCollaborator] = useState<CollaboratorProps | null>(null); // [1
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCollaboratorsById(id || "");
        const formattedDate = new Date(
          userData.admissionDate
        ).toLocaleDateString("pt-BR");
        setUser({ ...userData, admissionDate: formattedDate });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]); // Fetch data whenever id changes

  if (!user) {
    return (
      <div className="flex flex-1 p-6 min-h-screen bg-gray-900 text-white">
        <div className="flex flex-1">
          <aside>
            <div>
              <Menu></Menu>
            </div>
          </aside>
        </div>
      </div>
    );
  }
  console.log(user.imgUrl);
  return (
    <div className="flex flex-1 p-6 min-h-screen text-white">
      <div className="flex flex-1">
        <aside>
          <div>
            <Menu></Menu>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <header className="flex justify-between items-center mb-3">
            <h1 className="text-32 text-left text-purple-text font-bold">
              <div className="flex flex-row">
                <Link to={"/grades"}>
                  <div className="pr-2 pt-1">
                    <img src={arrowBack} alt="Arrow Back" />
                  </div>
                </Link>

                <div>
                  <div className="flex-1">Colaboradores</div>
                  <div className="flex-1 mt-1 text-white text-20 font-poppins font-normal flex flex-row">
                    Perfil de colaborador &gt;
                    <div className="text-primary">&nbsp;{user.name}</div>
                  </div>
                </div>
              </div>
            </h1>
            <div className="flex items-center">
              <img
                src={auth.user?.imgUrl}
                alt={auth.user?.name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span>{auth.user?.name}</span>
            </div>
          </header>
          <div className="flex flex-1 bg-[#212020] h-[820px] mt-4 overflow-y-auto">
            <div className="flex flex-wrap flex-1 justify-evenly gap-x-[52px] pt-10 flex-row">
              <div className="">
                <div className="flex flex-row justify-center">
                  <img
                    src={user.imgUrl}
                    alt={user.name}
                    className="w-[275px] h-[275px] object-cover rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = defaultProfileImage;
                    }}
                  />
                </div>
                <div className="pt-10 text-[24px] font-semibold">
                  {user.name}
                </div>
                <div className="pt-3 text-primary text-16">{user.role}</div>
                <div className="pt-4 ">
                  <span className="text-primary text-16">
                    Data de admissão:{" "}
                  </span>
                  <span>{user.admissionDate}</span>
                </div>
                <div className="pt-24 text-primary text-16">
                  Status do colaborador:
                </div>
                <div className="pt-10 pb-16 flex justify-center">
                  <div className="h-[42px] w-[86px] rounded bg-[#1B7E53]">
                    <div className="py-3 text-[12px] ">Ativo</div>
                  </div>
                </div>
                <button className="bg-primary text-[#263238] text-16 font-medium" onClick={() => navigate(`/grades/collaborator/${id}/grades`)}>
                  Visualizar notas
                </button>
              </div>

              <div className="w-[384px]">
                <div>
                  <div className="text-left text-purple-text font-bold text-20">
                    Sobre mim
                  </div>
                  <div className="text-left text-16 h-[137px]">{user.bio}</div>
                </div>
                <div>
                  <div className="text-left text-purple-text font-bold text-20 py-3">
                    Idade
                  </div>
                  <input
                    type="text"
                    className="w-full pl-6 pr-12 py-2 rounded-xl read-only:bg-[#333] placeholder-white border-0 outline-none"
                    placeholder={`${user.age} anos`}
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
                    placeholder={user.id}
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
                    placeholder={user.telephone}
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
                    placeholder={user.email}
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
                    placeholder={user.street + ", " + user.state}
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
                    placeholder={user.cpf}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;

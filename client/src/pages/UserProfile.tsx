import { useContext, useEffect } from "react";
import { Menu } from "@/components/Menu";
import { AuthContext } from "@/context/AuthContext";
import Header from "@/components/Header";
import { useMenu } from "@/context/MenuContext";

const UserProfile = () => {
  const { setMenu } = useMenu();

  useEffect(() => {
    setMenu(-1);
  }, []);

  const auth = useContext(AuthContext);
  const user = auth.user;
  const formattedDate = user?.admissionDate
    ? new Date(user.admissionDate).toLocaleDateString("pt-BR")
    : "Invalid date";

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

  return (
    <div className="flex flex-row w-screen h-screen justify-center max-h-screen p-6 bg-general-background text-white">
      <div className="flex">
        <aside>
          <Menu></Menu>
        </aside>

        <main className="flex-1 p-6 bg-general-background h-[920px] w-[64.25rem]">
          <Header
            userName={user?.name || ""}
            profileImage={user?.imgUrl || ""}
            title="Meu Perfil"
          />

          <div className="flex-1 bg-content-background h-[820px] max-w-[64.25rem] mt-8">
            <div className="flex flex-wrap flex-1 justify-evenly gap-x-[52px] pt-10 flex-row">
              <div className="">
                <img
                  src={user.imgUrl}
                  alt={user.name}
                  className="w-[275px] h-[275px] rounded-full mr-2 bg-primary"
                />
                <div className="pt-10 text-[24px] font-semibold">
                  {user.name}
                </div>
                <div className="pt-3 text-primary text-16">{user.role}</div>
                <div className="pt-4 ">
                  <span className="text-primary text-16">
                    Data de admissão:{" "}
                  </span>
                  <span>{formattedDate}</span>
                </div>
                <div className="pt-24 text-primary text-16">
                  Status do colaborador:
                </div>
                <div className="pt-10 pb-16 flex justify-center">
                  <div className="h-[42px] w-[86px] rounded bg-[#1B7E53]">
                    <div className="py-3 text-[12px] ">Ativo</div>
                  </div>
                </div>
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
                    placeholder={String(user.id)}
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

export default UserProfile;

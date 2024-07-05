import SearchBar from "@/components/SearchBar";
import Header from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { useEffect, useState } from "react";
import { getCollaboratorsByName } from "@/utils/getCollaboratorsByName";
import Card from "@/components/Card";
import { useNavigate } from "react-router-dom";
import { useSearchBar } from "@/context/SearchBarContext";
import { useMenu } from "@/context/MenuContext";
import { useAuth } from "@/hooks/AuthUser";

interface CollaboratorProps {
  name: string;
  role: string;
  email: string;
  imageSrc: string;
  id: number;
}

export default function GradesManagerContent(): JSX.Element {
  const [ collaborators, setCollaborators ] = useState<CollaboratorProps[]>([]);
  const { user, isAuthenticated } = useAuth();
  const { setMenu } = useMenu();
  const { search } = useSearchBar();

  const navigate = useNavigate();

  useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }

      setMenu(1);
    }, [])

  useEffect(() => {
    let append_array: CollaboratorProps[] = [];
    let param = !search ? " " : search;

    getCollaboratorsByName(param).then((data) => {
      data.forEach((collaborator: any) => {
        append_array.push({
          name: collaborator.name,
          role: collaborator.role,
          email: collaborator.email,
          imageSrc: collaborator.imgUrl,
          id: collaborator.id,
        });
      });

      setCollaborators(append_array);
    });
  }, [search]);

  return (
    <div className="flex flex-row w-[1440px] justify-center h-screen text-white p-6">
      <div className="flex">
      <aside>
        <Menu></Menu>
      </aside>

      <main className="flex-1 p-6 bg-general-background w-[64.25rem]">
        <Header
          userName={user?.name || "Error"}
          subtitle="Selecione o colaborador que deseja visualizar informações sobre"
          profileImage={user?.imgUrl || "Error"}
          title="Sobre a Plataforma"
        />

        <SearchBar />

        <div className="bg-content-background grid grid-cols-3 mt-4 pt-8 px-4 pb-6 gap-x-[25px] gap-y-[24px] h-[47rem] rounded-2xl overflow-y-scroll">
          {collaborators.map((collaborator) => {
            return (
              <div
                key={collaborator.email}
                onClick={() => { navigate(`/profile/${collaborator.id}`); }}
                /* Colocar max-w-[256px] nessa div faz os cards ficarem desalinhados */
                className=" min-h-[310px] rounded-[16px] shadow-xl bg-gray overflow-hidden cursor-pointer"
              >
                <Card
                  imageSrc={collaborator.imageSrc}
                  name={collaborator.name}
                  role={collaborator.role}
                  email={collaborator.email}
                />
              </div>
            );
          })}
        </div>
      </main>
      </div>
    </div>
  );
};

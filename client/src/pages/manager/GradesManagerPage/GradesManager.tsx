import SearchBar from "@/components/SearchBar";
import Header from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { useEffect, useState } from "react";
import { getCollaboratorsByName } from "@/utils/getCollaboratorsByName";
import Card from "@/components/Card";
import { Link } from "react-router-dom";
import { useSearchBar } from "@/context/SearchBarContext";
import { useMenu } from "@/context/MenuContext";

interface CollaboratorProps {
  name: string;
  role: string;
  email: string;
  imageSrc: string;
  id: number;
}

const About = () => {
  const { setMenu } = useMenu();
  const [collaborators, setCollaborators] = useState<CollaboratorProps[]>([]);
  const { search } = useSearchBar();

    useEffect(() => {
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
    <div className="flex justify-center p-6 min-h-screen bg-general-background text-white">
      <div className="flex">
        <aside>
          <div>
            <Menu></Menu>
          </div>
        </aside>

        <main className="flex-1 w-[64.25rem] p-6 bg-general-background">
          <Header
            userName="Pedro Almeida"
            subtitle="Selecione o colaborador que deseja visualizar informações sobre"
            profileImage="/profile.jpg"
            title="Sobre a Plataforma"
          />

          <SearchBar />

          <div className="flex flex-1 bg-content-background h-[750px] rounded-xl mt-4 overflow-y-auto">
            <div className="flex flex-wrap flex-1 justify-center gap-x-[52px] gap-y-[1rem] pt-10 pb-8">
              {collaborators.map((collaborator) => {
                return (
                  <Link to={`/profile/${collaborator.id}`}>
                    <div
                      key={collaborator.email}
                      className="w-[256px] h-[310px]"
                    >
                      <Card
                        imageSrc={collaborator.imageSrc}
                        name={collaborator.name}
                        role={collaborator.role}
                        email={collaborator.email}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;

import SearchBar from "@/components/SearchBar";
import Header from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { useEffect, useState } from "react";
import { getCollaboratorsByName } from "@/utils/getCollaboratorsByName";
import Card from "@/components/Card";
import { SearchBarProvider, useSearchBar } from "@/context/SearchBarContext";
import { Link } from "react-router-dom";

interface CollaboratorProps {
  name: string;
  role: string;
  email: string;
  imageSrc: string;
  id: number;
}

const About = () => {
  const [collaborators, setCollaborators] = useState<CollaboratorProps[]>([]);
  const { search } = useSearchBar();

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
    <div className="flex flex-1 p-6 min-h-screen bg-gray-900 text-white">
      <div className="flex flex-1">
        <aside>
          <div>
            <Menu></Menu>
          </div>
        </aside>

        <main className="flex-1 p-6 bg-general-background">
          <Header
            userName="Pedro Almeida"
            subtitle="Selecione o colaborador que deseja visualizar informações sobre"
            profileImage="/profile.jpg"
            title="Sobre a Plataforma"
          />

          <SearchBar />

          <div className="flex flex-1 bg-content-background h-[750px] rounded-xl mt-4 overflow-y-auto">
            <div className="flex flex-wrap flex-1 justify-center gap-x-[52px] pt-10 pb-8">
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

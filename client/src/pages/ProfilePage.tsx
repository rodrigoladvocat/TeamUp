import SearchBar from "@/components/SearchBar";

import { useEffect, useState } from "react";
import { getCollaboratorsByName } from "@/utils/getCollaboratorsByName";
import Card from "@/components/Card";
import { SearchBarProvider, useSearchBar } from "@/context/SearchBarContext";
import { Menu } from "@/components/Menu";
import Header from "@/components/Header";

interface CollaboratorProps {
  name: string;
  role: string;
  imageSrc: string;
  age: number;
  id: string;
  telephone: string;
  email: string;
  adress: string;
  cpf: string;
}

const Profile = () => {
  const user: CollaboratorProps = {
    name: "Fulana da Silva",
    role: "developer",
    imageSrc: "TODO - put default image", // Replace with the actual default image URL
    age: 20,
    id: "2",
    telephone: "08191234-1234",
    email: "fulana@gmail.com",
    adress: "Rua Inexistente",
    cpf: "22222222222",
  };

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
            subtitle="Perfil de colaboradores > Pedro Almeida"
            profileImage="/profile.jpg"
            title="Colaboradores"
          />
          <div className="flex flex-1 bg-[#212020] h-[820px] mt-4 overflow-y-auto">
            <div className="flex flex-wrap flex-1 justify-between gap-x-[52px] pt-10 flex-row">
              <div>Esquerda</div>
              <div className="w-[384px]         pr-10">
                <div>
                  <div className="text-left text-purple-text font-bold text-20">
                    Sobre mim
                  </div>
                  <div className="text-left text-16 w-full">
                    Sou João Silva, Designer de Produtos na Visagio, com mais de
                    cinco anos de experiência. Crio soluções intuitivas e
                    atraentes, liderando projetos do início ao fim. Sou
                    apaixonado por novas tecnologias e tendências de design.
                  </div>
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
                    placeholder={user.adress}
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

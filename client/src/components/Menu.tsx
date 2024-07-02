import icons from "../assets/icons";
import logo from "../assets/logo.svg";
import traco from "../assets/traco.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useMenu } from "../context/MenuContext";
import { useAuth } from "@/hooks/AuthUser";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export function Menu() {
  const { menu, setMenu } = useMenu();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const isAdmin = auth.user?.isManager;

  const menuItemsAdmin = [
    { path: "/home", label: "Página inicial", icon: icons.home },
    { path: "/grades", label: "Colaboradores", icon: icons.collaborators },
    { path: "/evaluations", label: "Avaliações", icon: icons.clipboard },
    { path: "/about", label: "Sobre a plataforma", icon: icons.monitor },
  ];

  const menuItemsCollaborator = [
    { path: "/home", label: "Página inicial", icon: icons.home },
    { path: "/grades", label: "Notas", icon: icons.grades },
    { path: "/evaluations", label: "Avaliações", icon: icons.clipboard },
    { path: "/about", label: "Sobre a plataforma", icon: icons.monitor },
  ];

  const menuItems = isAdmin ? menuItemsAdmin : menuItemsCollaborator;

  return (
    <div className="bg-[#0D0D0D] rounded-[32px] w-[332px] h-[920px] text-white flex flex-col justify-between ">
      <div>
        <div className="py-3 bg-black flex items-center justify-center mb-[52px] rounded-t-[32px]">
          <img src={logo} />
          <div className="text-white text-[28px] font-bold pl-2">TeamUp!</div>
        </div>
        <nav>
          <ul className="bg-[#0D0D0D] mx-8">
            {menuItems.map((item, index) => (
              <NavLink to={item.path} key={index}>
                <li
                  className={`mb-6 flex text-[16px] py-5 px-8 ${
                    menu === index
                      ? "text-black bg-[#A28BFE] rounded-[16px] stroke-cyan-500"
                      : "text-white  hover:text-primary"
                  }`}
                  onClick={() => setMenu(index)}
                >
                  <div>{item.icon}</div>
                  <div className="pl-2">{item.label}</div>
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <li className="flex text-[20px] text-white hover:text-[#A28BFE] py-5 px-8 cursor-pointer">
          {icons.logout}
          <div
            className="pl-2"
            onClick={() => {
              logout().then(() => {
                navigate("/");
              });
            }}
          >
            Sair
          </div>
        </li>
        <div className="flex flex-col justify-center items-center">
          <img src={traco} />
          <div className="text-[20px] p-8">Versão 2.2.2</div>
        </div>
      </div>
    </div>
  );
}

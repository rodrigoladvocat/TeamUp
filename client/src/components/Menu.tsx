import homeIcon from "../assets/homeIcon.svg";
import logo from "../assets/logo.svg";
import traco from "../assets/traco.svg";
import { NavLink } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

export function Menu() {
  const { menu, setMenu } = useMenu();

  const menuItems = [
    { path: "/", label: "Página inicial", icon: { homeIcon } },
    { path: "/notas", label: "Notas" },
    { path: "/avaliacoes", label: "Avaliações" },
    { path: "/about", label: "Sobre a plataforma" },
  ];

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
                      ? "text-black bg-[#A28BFE] rounded-[16px]"
                      : "text-white  hover:text-[#A28BFE]"
                  }`}
                  onClick={() => setMenu(index)}
                >
                  <img src={homeIcon} className="text-black" alt="icon" />
                  <div className="pl-2">{item.label}</div>
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <li className="flex text-[20px] text-white hover:text-[#A28BFE] py-5 px-8">
          <img src={homeIcon} className="text-black"></img>
          <div className="pl-2">Sair</div>
        </li>
        <div className="flex flex-col justify-center items-center">
          <img src={traco} />
          <div className="text-[20px] p-8">Versão 2.2.2</div>
        </div>
      </div>
    </div>
  );
}

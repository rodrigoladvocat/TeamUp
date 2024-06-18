import background from "../assets/loginPage/login-background.png";
import logo from "../assets/loginPage/login-logo.svg";
import email from "../assets/loginPage/email.svg";
import password from "../assets/loginPage/password.svg";
import openEye from "../assets/loginPage/openEye.svg";
import closedEye from "../assets/loginPage/closedEye.svg";

import { useState } from "react";

const Login = () => {
  const [eye, setEye] = useState(true);

  return (
    <div className="flex flex-row w-full">
      <div
        className="w-1/2 h-screen rounded-[32px] justify-between justify-items-start flex flex-col px-5  py-10 "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <img src={logo} />
        </div>
        <div className="text-left pl-[14px] pr-24">
          <div className="text-white text-[44px] font-bold">
            Impulsionando Talentos, Alcançando Resultados
          </div>
          <div className="text-white text-[24px]">
            Seu Hub de Desempenho Corporativo
          </div>
        </div>
        <div className="text-left text-[32px]">TeamUp!</div>
      </div>
      <div className="w-1/2 pl-[103px]">
        <div className="text-left text-[40px] font-bold text-primary py-24">
          Login
        </div>
        <div>
          <form className="flex flex-col">
            <div className=" flex flex-row h-16 mb-10 bg-[#333333] rounded-[16px]">
              <img className="px-5" src={email} />
              <input
                className="bg-[#333333] w-full rounded-[16px] focus:outline-none"
                id="email"
                placeholder="E-mail"
                type="email"
              />
            </div>
            <div className=" flex flex-row h-16 mb-10 bg-[#333333] rounded-[16px]">
              <img className="px-5" src={password} />
              <input
                className="bg-[#333333] w-full rounded-[16px] focus:outline-none"
                id="password"
                placeholder="Password"
                type={eye ? "password" : "text"}
              />
              <div className="m-5">
               {eye ? (
                <a className="" onClick={() => setEye(false)}>
                  <img src={openEye} alt="password icon" />
                </a>
              ) : (
                <a onClick={() => setEye(true)}>
                  <img src={closedEye} alt="password icon" />
                </a>
              )} 
              </div>
              
            </div>
            <button className="bg-[#A28BFE] text-black mx-8">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import background from "../assets/loginPage/login-background.png";
import teamUpLogo from "../assets/loginPage/login-logo.svg";
import emailIcon from "../assets/loginPage/email.svg";
import passwordIcon from "../assets/loginPage/password.svg";
import openEye from "../assets/loginPage/openEye.svg";
import closedEye from "../assets/loginPage/closedEye.svg";

import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../hooks/AuthUser";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { ErrorResponseDto } from "../dto/ErrorResponseDto";

function leftSideColumn() {
  return(
    <div
      className="w-[55%] rounded-[32px] justify-between justify-items-start flex flex-col px-5 py-1"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <img className="mt-8 size-20" src={teamUpLogo} />

      <div className="text-left pl-[14px] pr-24">
        <div className="text-white text-[44px] font-bold pb-2">
          Impulsionando Talentos, Alcançando Resultados
        </div>
        <div className="text-white text-[24px]">
          Seu Hub de Desempenho Corporativo
        </div>
      </div>

      <div className="text-left text-[32px] mb-12">TeamUp!</div>

    </div>
  );
}


const Login = () => {
  const [eye, setEye] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated, user } = useAuth();

  useEffect(() => {
    console.log(`User data -> ${user}`);
    console.log(`Está authenticado ? ${isAuthenticated}`);
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);


  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    await login(email, password).catch((e: AxiosError<ErrorResponseDto>) => {
      if (e.response) {
        setError(e.response?.data.message);
      } else {
        setError("Ocorreu um erro desconhecido.");
      }
    });
  }


  return (
    <div className="flex flex-row justify-between w-screen h-screen p-5">

      {leftSideColumn()}

      <div className="w-1/2 pl-24 pr-28 flex flex-col justify-between items-center space-y-12">
        <h1 className="self-start text-[40px] font-bold text-primary mt-24">
          Login
        </h1>
        <form className="flex flex-col w-full space-y-10">
          <div className="flex flex-row items-center h-16 min-w-fit bg-[#333333] rounded-[16px]">
            <img className="px-5" src={emailIcon} />
            <input
              className="w-full rounded-[16px] focus:outline-none bg-[#333333]"
              id="email"
              placeholder="E-mail"
              type="email"
              onChange={(e)=> {setEmail(e.target.value)}}
            />
          </div>
          <div className="flex flex-row items-center h-16 bg-[#333333] rounded-[16px]">
            <img className="px-5" src={passwordIcon} />
            <input
              className="w-full rounded-[16px] focus:outline-none bg-[#333333]"
              id="password"
              placeholder="Password"
              type={eye ? "password" : "text"}
              onChange={(e)=> {setPassword(e.target.value)}}
            />
            <div className="m-5 cursor-pointer">
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
          <div className="flex flex-row justify-end">
            <a>
              <div className="text-right text-[#787878] text-[20px] hover:text-primary cursor-pointer underline">
                Esqueci a senha
              </div>
            </a>
          </div>
          <p className="text-[#e97474] h-10">{error}</p>
        </form>
        <button className="bg-[#A28BFE] text-black w-[85%] py-4 text-[20px] rounded-[16px]"
          onClick={(e) => {handleLogin(e)}} 
        >
          Entrar
        </button>
        <span className="h-16 w-full bg-transparent"></span>
      </div>
    </div>
  );
};

export default Login;

import { createContext, useCallback, useState } from "react";
// import axios, { AxiosError } from "axios";
import { UserDto } from "../dto/UserDto";
// import { ErrorResponseDto } from "../dto/ErrorResponseDto";


interface UserContextModel {
  user?: UserDto;
  login: (email: string, password: string) => void;
}

export const UserContext = createContext({} as UserContextModel);

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserDto>();


  const Login = useCallback(async (email: string, password: string) => {
    console.log(email, password);
    setUser(undefined);
    // const body = {
    //   email: email,
    //   password: password,
    // };
    // TODO - chamar API com axios para logar usuário
    // axios.post("URL", body).then(() => {}).catch((e) => {
    //   const axiosError = e as AxiosError<ErrorResponseDto>;
    // });
  }, []);


  return (
    <UserContext.Provider value={{
      user: user,
      login: Login,
    }}>
      {children}
    </UserContext.Provider>
  );
}

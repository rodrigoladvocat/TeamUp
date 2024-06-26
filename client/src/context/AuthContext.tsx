import { createContext, useCallback, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { UserDto } from "../dto/UserDto";
import { ErrorResponseDto } from "../dto/ErrorResponseDto";
import { api } from "../services/apiService";
import { Navigate } from "react-router-dom";


interface AuthContextModel {
  user: UserDto | null;
  isAuthenticated: boolean;
  token: string;
  login: (email: string, password: string) => Promise<string | void>;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextModel);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);


  const Login = useCallback(async (email: string, password: string) => {

    const body = {
      email: email,
      password: password,
    };
    
    await api.post(
      "/user/login", 
      body
    ).then((res: AxiosResponse<{user: UserDto, token: string}>) => {
      setUser(res.data.user);
      setToken(res.data.token);
      setIsAuthenticated(true);
    }).catch((e: AxiosError<ErrorResponseDto>) => {
      throw e;
    });
  }, []);


  const Logout = useCallback(() => {
    setUser(null);
    setToken("");
    setIsAuthenticated(false);
    return <Navigate to='/' />;
  }, []);


  return (
    <AuthContext.Provider value={{
      user: user,
      isAuthenticated: isAuthenticated,
      token: token,
      login: Login,
      logout: Logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

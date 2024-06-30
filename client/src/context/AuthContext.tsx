import { createContext, useCallback, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { UserDto } from "../dto/UserDto";
import { ErrorResponseDto } from "../dto/ErrorResponseDto";
import { api } from "../services/apiService";
import { useLocalStorage } from "@uidotdev/usehooks";


interface AuthContextModel {
  user: UserDto | null;
  isAuthenticated: boolean;
  token: string;
  login: (email: string, password: string) => Promise<string | void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextModel);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useLocalStorage<UserDto | null>("user", null);
  const [token, setToken] = useLocalStorage<string>("token", "");
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>("isauthenticated", false);

  // *to clear the local storage => <local storage key>.localStorage.clear()


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
    return new Promise<void>((resolve) => {
      // clearing the local storage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isauthenticated");
      localStorage.removeItem("@Cycle.Data");
      localStorage.removeItem("@AutoEval.Data");
      localStorage.removeItem("@OthersEval.Data");
      
      // reset the state
      setUser(null); 
      setToken(""); 
      setIsAuthenticated(false); 
  
      // Resolve the promise
      resolve();
    });
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

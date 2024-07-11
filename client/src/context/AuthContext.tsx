import { createContext, useCallback } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { UserDto } from "../dto/UserDto";
import { ErrorResponseDto } from "../dto/ErrorResponseDto";
import { api } from "../services/apiService";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useCycle } from "@/hooks/useCycle";


interface AuthContextModel {
  user: UserDto | null;
  aiMessage: string | null;
  isAuthenticated: boolean;
  token: string;
  login: (email: string, password: string) => Promise<string | void>;
  logout: () => Promise<void>;
  setAiMessage: (message: string | null) => void;
}

export const AuthContext = createContext({} as AuthContextModel);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useLocalStorage<UserDto | null>("user", null);
  const [token, setToken] = useLocalStorage<string>("token", "");

  const [ aiMessage, setAiMessage ] = useLocalStorage<string | null>("aiMessage", null); // AI improvement suggestions => collaborator's home page

  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>("isauthenticated", false);

  const {_cycle} = useCycle();

  const Login = useCallback(async (email: string, password: string) => {

    const body = {
      email: email,
      password: password,
    };
    
    await api.post(
      "/user/login", 
      body,
      { headers: { 'jwt': token } }
    ).then((res: AxiosResponse<{user: UserDto, token: string}>) => {
      setUser(res.data.user);
      setToken(res.data.token);
      setIsAuthenticated(true);
      
      localStorage.setItem('token', JSON.stringify(res.data.token));
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
      localStorage.removeItem("aiMessage");
      
      if (_cycle )localStorage.removeItem(`sentEmail_${_cycle.id}`);
      
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
      aiMessage: aiMessage,
      setAiMessage: setAiMessage
    }}>
      {children}
    </AuthContext.Provider>
  );
}

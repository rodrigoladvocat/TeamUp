import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const useUser = () => useContext(UserContext);

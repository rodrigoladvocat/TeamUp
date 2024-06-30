import { CycleContext } from "../context/CycleContext";
import { useContext } from "react";

export const useCycle = () => useContext(CycleContext);

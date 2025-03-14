import { createContext } from "react";
import { DataItem } from "../data/DataType";

interface ContextProps {
  data: DataItem[];
  contextSelectPhase: number;
  phase: number;
  names:string[]
}

// Crear el contexto con valores por defecto
export const ContextGeneral = createContext<ContextProps>({
  data: [],
  contextSelectPhase: 0,  
  phase: 0,
  names: []
});

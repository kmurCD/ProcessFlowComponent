import { createContext } from "react";
import { DataItem } from "../data/DataType";

interface ContextProps {
  contextSelectPhase: number;
  phase: number;
  names:string[];
  role:boolean;
  data:DataItem[];
  validation:boolean;
}

// Crear el contexto con valores por defecto
export const ContextGeneral = createContext<ContextProps>({
  contextSelectPhase: 0,  
  phase: 0,
  names: [],
  data: [],
  role: false,
  validation: false,
});

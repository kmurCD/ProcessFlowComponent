export interface DataItem{
    id: string;
    descripcion: string;
    contenido: string | number | boolean | null;
  };
  

  export enum Phase {
    Phase1 = 1,
    Phase2,
    Phase3,
    Phase4,
    Phase5,
    Phase6,
    Phase7,
    Phase8,
    Phase9,
    Phase10,
    Phase11,
    Phase12,
    Phase13,
    Phase14
  }
  export type DataType = Record<Phase, DataItem[]>;

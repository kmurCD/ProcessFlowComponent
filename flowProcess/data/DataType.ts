export interface DataItem {
  id: string;
  descripcion: string;
  contenido: string | number | boolean | Date | null | undefined;
}

export type Phase = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 ;

export type DataType = Record<number, DataItem[]>;

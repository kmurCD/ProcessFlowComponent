import {
    BrandVariants,
    createLightTheme,
    createDarkTheme,
    Theme,
  } from "@fluentui/react-components";
  
  // Definición de la paleta de marca
  const transligraTheme: BrandVariants = {
    10: "#020305",
    20: "#111723",
    30: "#16263D",
    40: "#193253",
    50: "#1B3F6A",
    60: "#1B4C82",
    70: "#18599B",
    80: "#1267B4",
    90: "#3174C2",
    100: "#4F82C8",
    110: "#6790CF",
    120: "#7D9ED5",
    130: "#92ACDC",
    140: "#A6BAE2",
    150: "#BAC9E9",
    160: "#CDD8EF",
  };
  
  // Crear el tema claro con los colores personalizados
  export const lightTheme: Theme = {
    ...createLightTheme(transligraTheme),
  };
  
  // Crear el tema oscuro con ajustes adicionales
  export const darkTheme: Theme = {
    ...createDarkTheme(transligraTheme),
    colorBrandForeground1: transligraTheme[110],
    colorBrandForeground2: transligraTheme[120],
  };
  
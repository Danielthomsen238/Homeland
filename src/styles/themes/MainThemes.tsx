import { DefaultTheme } from "../../../types/interfaces/StylesInterface";

export const theme: DefaultTheme = {
  colors: {
    background: "#131313",
    white: "#ffffff",
    purple: "#D10061",
    darkgreen: "#0A1D1C",
    red: "#FF003D",
    opale: "#2C3737",
    grey: "#AFAFAF",
    darkgrey: "#393939",
    interaction: "#00F9B6",
    border: "#1F5E5B",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  development: {
    underDevelopment: false,
    border: "border: solid 2px #fff",
  },
};

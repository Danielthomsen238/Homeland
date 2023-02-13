import { createGlobalStyle } from "styled-components";
import { Global } from "../../types/interfaces/StylesInterface";

export const GlobalStyles = createGlobalStyle<Global>`



* {
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Titillium Web', sans-serif
    
}
html, body {
    width: 100%;
    height: 100%;
}

#__next {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 5px;
    background-color: ${(props) => props.theme.colors.background};

   
}
`;

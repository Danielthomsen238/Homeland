import styled from "styled-components";
import { Global } from "../../../types/interfaces/StylesInterface";

export const StyledPrimary = styled.main<Global>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 5px;
  grid-template-areas:
    "A"
    "B";

  > :nth-child(1) {
    grid-area: A;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(2) {
    grid-area: B;
    background-color: ${(props) => props.theme.colors.darkBackground};
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
`;

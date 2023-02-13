import styled from "styled-components";

const StyledMainGrid = styled.div`
  padding-top: 30px;
  width: 91vw;
  margin: 0 auto;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  gap: 15px;
  grid-template-areas: "A B";

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

export { StyledMainGrid };

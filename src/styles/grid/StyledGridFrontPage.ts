import styled from "styled-components";

const StyledGridFrontPage = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-top: -15vh;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  gap: 15px;
  place-items: center;
  grid-template-areas: "A B C";

  > :nth-child(1) {
    z-index: 10;
    grid-area: A;
    background-color: #ffffff90;
    border-radius: 5px;
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(2) {
    z-index: 10;
    grid-area: B;
    background-color: #ffffff90;
    border-radius: 5px;
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }

  > :nth-child(3) {
    z-index: 10;
    grid-area: C;
    background-color: #ffffff90;
    border-radius: 5px;
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }

  @media all and (max-width: ${(props) => props.theme.breakpoints.l}) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: "A" "B" "C";
    gap: 2rem;
  }
`;

export { StyledGridFrontPage };

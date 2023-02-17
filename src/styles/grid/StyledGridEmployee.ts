import styled from "styled-components";

const StyledGridEmployee = styled.div`
  width: 70vw;
  margin: 5vh auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  gap: 15px;
  place-items: center;
  grid-template-areas: "A B C D";

  > :nth-child(1) {
    grid-area: A;
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(2) {
    grid-area: B;
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }

  > :nth-child(3) {
    grid-area: C;
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }
  > :nth-child(4) {
    grid-area: D;
    ${(props) => props.theme.development.underDevelopment && props.theme.development.border};
  }

  @media all and (max-width: ${(props) => props.theme.breakpoints.l}) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: "A B" "C D";
    gap: 2rem;
  }
`;

export { StyledGridEmployee };

import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.dark};
  padding: 20px 0;
  .contact {
    margin-left: 10vw;
    width: 40vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > :nth-child(1) {
      font-size: 2vw;
    }

    p {
      color: white;
    }
  }
`;

export { StyledFooter };

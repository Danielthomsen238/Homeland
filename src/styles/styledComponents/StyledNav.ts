import styled from "styled-components";

interface NavProps {
  show: boolean;
}

const StyledNav = styled.nav<NavProps>`
  font-family: "Odibee Sans", cursive;
  height: 10vw;
  position: relative;
  z-index: 1;
  .nav {
    height: 7.2vw;
    background-color: ${(props) => props.theme.colors.dark};
    .links {
      transition: 300ms ease-in-out;
      padding-top: 10px;
      height: ${(props) => (props.show ? "30vw" : "0vw")};
      overflow: hidden;
      position: absolute;
      z-index: 5;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${(props) => props.theme.colors.dark};
      a {
        font-size: 5vw;
        font-family: "Odibee Sans", cursive;
        color: white;
        &:hover {
          color: #af7627;
        }
      }
    }
  }

  .search {
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    margin-top: 5px;
    input {
      height: 25px;
      border: none;
    }
    button {
      height: 25px;
      border: none;
      cursor: pointer;
    }
  }

  .logo {
    position: absolute;
    font-size: 4vw;
    top: 2vw;
    left: 5vw;
    z-index: 2;
    padding: 1vw 2vw;
    border: solid black 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${(props) => props.theme.colors.secondary};
  }
  .triangle1 {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    z-index: 1;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 3vw 35vw 0 0;
    border-color: black transparent transparent transparent;
  }
  .triangle2 {
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
    display: inline-block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 3vw 0 0 65vw;
    border-color: black transparent transparent transparent;
  }
  .burger {
    height: 30px;
    width: 40px;
    z-index: 6;
    position: absolute;
    top: 0;
    right: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    div {
      transition: ease-in-out 300ms;
      border-radius: 5px;
      width: 40px;
      height: 5px;
      background-color: white;
    }
    > :nth-child(1) {
      position: absolute;
      bottom: ${(props) => (props.show ? "10px" : "0px")};
      transform: ${(props) => (props.show ? "rotate(50deg)" : "rotate(0deg)")};
    }
    > :nth-child(2) {
      position: absolute;
      bottom: 10px;
      right: 0px;
      opacity: ${(props) => (props.show ? "0" : "1")};
    }
    > :nth-child(3) {
      position: absolute;
      bottom: ${(props) => (props.show ? "10px" : "20px")};
      transform: ${(props) => (props.show ? "rotate(-50deg)" : "rotate(0deg)")};
    }
  }
  @media all and (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 7vw;
    .nav {
      height: 4vw;
      display: flex;
      align-items: center;
      .links {
        transition: 300ms ease-in-out;
        height: 100%;
        position: relative;
        z-index: 5;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        background-color: transparent;
        a {
          margin-right: 20px;
          font-size: 2vw;
        }
      }

      .search {
        margin-right: 100px;
        input {
          padding-left: 10px;
        }
        button {
        }
      }
    }
    .burger {
      display: none;
    }
    .logo {
      position: absolute;
      top: 2vw;
      left: 10vw;
      padding: 0vw 0.5vw;
      font-size: 2vw;
    }
  }
`;

export { StyledNav };

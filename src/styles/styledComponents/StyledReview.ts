import styled from "styled-components";
import { ReviewProps } from "../../../interfaces/StylesInterface";
const StyledReview = styled.div<ReviewProps>`
  overflow: hidden;
  position: relative;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: #fed9c9;
  height: 25vh;
  h2 {
    margin: 1vh 0;
  }
  p {
    margin: 0 auto;
    width: 80vw;
  }
  div {
    margin: 2vh 0;
  }
  .reviewForm {
    transition: left ease-in-out 300ms;
    top: -2vh;
    left: ${(props) => (props.show ? "0" : "95vw")};
    position: absolute;
    width: 100vw;
    height: 25vh;
    background-color: #333333;
    border-radius: 10px;
    .icon {
      cursor: pointer;
      position: absolute;
      top: 5.5vh;
      svg {
        color: darkgray;
        width: 10vh;
        height: 10vh;
      }
    }
    form {
      display: flex;
      justify-content: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
          margin-left: 45px;
          margin-bottom: 5px;
        }
        label {
          color: white;
          display: flex;
          input {
            margin-left: 15px;
            border-radius: 10px;
            width: 20vw;
            height: 4vh;
          }
          textarea {
            margin-left: 15px;
            border-radius: 10px;
            width: 20vw;
            height: 15vh;
            resize: none;
          }
        }
      }
      button {
        margin-left: 1vw;
        margin-bottom: 20px;
        align-self: flex-end;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        width: 6vw;
        height: 4vh;
      }
    }
  }
`;

export { StyledReview };

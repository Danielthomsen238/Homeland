import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

const StyledDetails = styled.section<ModalProps>`
  width: 100%;
  .header {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 40vw;
    top: -75px;
    img {
      z-index: 0;
    }
  }
  .modal {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    display: "none";
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(15, 15, 15, 0.8);
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    align-items: center;
    justify-content: center;

    .modal-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80vw;
      height: 50vh;
      .close {
        position: absolute;
        top: 10%;
        right: 10%;
        color: white;
        cursor: pointer;
      }
      .modal-image {
        position: absolute;
        width: 60vw;
        height: 35vw;
      }
      .next {
        position: absolute;
        right: 10%;
      }
      .prev {
        position: absolute;
        left: 10%;
      }
    }
  }
  .info {
    position: relative;
    z-index: 0;
    margin: 0 auto;
    background-color: #ffffffca;
    margin-top: -15vw;
    width: 90vw;
    height: 80vh;
  }
  .top-bar {
    display: flex;
    justify-content: space-between;
    .icon-container {
      width: 15vw;
      align-items: center;
      display: flex;
      justify-content: space-between;
      div {
        border: solid gray 1px;
        display: flex;
        width: 3vw;
        height: 3vw;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        cursor: pointer;
        &:hover {
          border-color: black;
          svg {
            color: black;
            stroke: black;
          }
        }
        svg {
          color: gray;
        }
      }
      .building {
        svg {
          width: 20px;
          height: 20px;
          stroke: gray;
        }
      }
    }
  }
`;

export { StyledDetails };

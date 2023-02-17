import styled from "styled-components";

const StyledEmployee = styled.div`
  overflow: hidden;
  position: relative;
  border: solid black 1px;
  text-align: left;
  .image_wrapper {
    width: 17vw;
    height: 22vw;
  }
  .info {
    padding-left: 5px;
    background-color: white;
    position: absolute;
    width: 100%;
    background-color: #ffffffca;
    bottom: -10%;
    border-top: solid black 1px;
    transition: bottom ease-in-out 300ms;
    &:hover {
      bottom: 0;
      background-color: #333333ca;
      color: white;
    }
  }
`;

export { StyledEmployee };

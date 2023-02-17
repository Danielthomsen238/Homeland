import styled from "styled-components";

const StyledList = styled.section`
  margin: 2vw 0;
  .top-bar {
    margin: 0 auto;
    margin-bottom: 2vh;
    width: 87.5vw;
    display: flex;
    justify-content: space-between;
    .sort {
      .check {
        margin-left: 1vw;
      }
      width: 50vw;
      display: flex;
      justify-content: space-between;
      select {
        border-radius: 5px;
      }
    }
  }
  .list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export { StyledList };

import styled from "styled-components";

const StyledListItem = styled.div`
  position: relative;

  transition: transform ease-in-out 300ms;
  width: 28vw;
  height: 20vw;
  &:hover {
    transform: scale(1.1);
    background-color: #fed9c985;
    .container {
      transform: scale(0.905);
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .favIcon {
    z-index: 20;
    position: absolute;
    right: 2.5vw;
    top: 12vw;
  }

  .container {
    transition: transform ease-in-out 300ms;
    width: 28vw;
    height: 20vw;
    .image_wrapper {
      margin: 0 auto;
      margin-top: 1.5vw;
      width: 25vw;
      height: 10vw;
    }

    .info {
      margin: 0 auto;
      width: 25vw;

      .address {
        font-size: 1.2vw;
        margin: 0.5vw 0;
        font-weight: 600;
      }
      .city {
        font-size: 0.9vw;
        font-weight: 600;
        margin-bottom: -5px;
      }
      .type {
        font-size: 0.9vw;
      }
    }
    .size_price {
      display: flex;
      margin: 0 auto;
      width: 25vw;
      height: 2.5vw;
      justify-content: space-between;
      align-items: flex-end;
      div {
        width: 9vw;
        justify-content: space-between;
        display: flex;
        align-items: flex-end;
      }
      .energy {
        background-color: green;
        color: white;
        padding: 2px 10px;
      }
      p {
        font-size: 0.9vw;
      }
      .price {
        font-weight: bold;
      }
    }
  }
  border: solid 1px grey;

  @media all and (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 75vw;
    height: 52vw;
    .favIcon {
      position: absolute;
      right: 2.5vw;
      top: 35vw;
    }
    .container {
      width: 75vw;
      height: 52vw;
      .image_wrapper {
        margin-top: 2.5vw;
        width: 70vw;
        height: 30vw;
      }

      .info {
        margin: 0 auto;
        width: 70vw;
        .address {
          font-size: 2.2vw;
        }
        .city {
          font-size: 2vw;
        }
        .type {
          font-size: 2vw;
        }
      }
      .size_price {
        display: flex;
        margin: 0 auto;
        width: 70vw;
        height: 8vw;
        justify-content: space-between;
        align-items: flex-end;
        div {
          width: 20vw;
          justify-content: space-between;
          display: flex;
        }
        p {
          font-size: 2vw;
        }
      }
    }
  }
`;

export { StyledListItem };

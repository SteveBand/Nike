import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 40vw;
    min-height: 82vh;
    max-height: 100vh;
    border: 2px solid rgba(63, 64, 67, 1);
  }

  .product {
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    position: relative;
  }

  img {
    width: 150px;
    height: 150px;
    height: max-content;
    margin-left: 1rem;
    border: 1px solid rgba(63, 64, 67, 1);
  }
  .detail {
    height: 200px;
    margin-top: 12%;
    color: #f9a786;
    margin-left: 1rem;
  }
  .price {
    position: relative;
    top: 30%;
  }

  .inc-dec {
    position: absolute;
    right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  .amount {
    padding: 10px 0;
  }

  .arrow {
    padding: 6px 6px;
    background-color: #f8672e;
    border-radius: 50%;
    color: white;
    cursor: pointer;
  }
  .arrow:hover {
    transition: all 0.5s ease-in;
    transform: scale(110%);
  }
  h5 {
    margin-top: 10px;
    font-size: 16px;
  }

  .price-total {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 2rem;
    width: 100%;
    color: #f8672e;
    text-decoration: underline;
  }

  @media screen and (max-width: 480px) {
    .inc-dec {
      margin-top: 5%;
    }
  }
`;

//BACK HOME BUTTON ///

export const BtnContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  position: absolute;
  bottom: 0;

  .btn {
    padding: 0.5rem 0.8rem;
    background-color: #fe9931;
    color: white;
    border-radius: 20%;
    text-decoration: none;
  }
`;

///EMPTY CART STYLE///

export const EmptyWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .empty-msg {
    background-image: url("https://cdn-icons-png.flaticon.com/512/5400/5400905.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 500px;
    height: 500px;
  }
  h1 {
    position: absolute;
    top: 40%;
    left: 15%;
    font-size: 2rem;
    color: #fe792f;
  }

  .back-btn {
    padding: 1rem;
    background-color: #fe9931;
    color: white;
    border-radius: 20%;
    text-decoration: none;
  }

  .back-btn:hover {
    transition: all 0.6s ease-in-out;
    transform: scale(120%);
  }

  @media screen and (max-width: 480px) {
    .empty-msg {
      max-width: 300px;
      max-height: 300px;
    }
    h1 {
      top: 10%;
    }
  }
`;

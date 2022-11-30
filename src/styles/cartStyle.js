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

  .empty-cart {
    
  }
`;

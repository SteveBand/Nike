import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 25vh;
  font-family:'Josefin Sans', sans-serif;

  .price-btn {
    padding: 1.2rem 3.4rem;
    font-size: 1.3rem;
    color: white;
    border: 1px solid rgba(63, 64, 67, 1);
    margin-right: 3rem;
    cursor: pointer;
  }

  .cart-btn {
    padding: 1.4rem 1.2rem;
    font-size: 1.2rem;
    color: white;
    background-color: #F8672E;
    cursor: pointer;
  }

  .cart-btn:hover {
    transition: all 0.5s ease-in;
    transform: scale(110%);
  }
`;

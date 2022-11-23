import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-evenly;
  color: white;
  place-items: center;

  .links {
    margin: auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 30vw;
  }

  li {
    text-decoration: none;
    list-style: none;
    font-size: 13px;
    color: #727276;
  }

  .logo {
    position: relative;
    left: 8%;
    display: flex;
    justify-content: center;
    font-size: 5rem;
  }

  .cart-more {
    position: relative;
    right: 2%;
    display: flex;
    justify-content: space-between;
    width: 4vw;
  }

  .cart {
    font-size: 1.1rem;
    display: flex;
    padding: 8px;
    border-radius: 100%;
    background-color: #fe6629;
  }

  .list {
    padding: 8px;
  }
`;

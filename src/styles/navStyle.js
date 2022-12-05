import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 15vh;
  display: flex;
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

  li,
  .link-btn {
    text-decoration: none;
    list-style: none;
    font-size: 13px;
    color: #727276;
    cursor: pointer;
  }

  li:hover,
  .link-btn:hover {
    color: white;
    transition: all 0.7s ease;
    transform: scale(105%);
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
    width: 5vw;
  }

  .cart-btn {
    text-decoration: none;
    color: white;
  }

  .cart-btn:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(105%);
  }

  .cart {
    font-size: 1.1rem;
    display: flex;
    place-items: center;
    padding: 4px 12px;
    border-radius: 50%;
    background-color: #fe6629;
    cursor: pointer;
  }

  .list {
    padding: 8px;
    color: white;
  }

  .list-btn {
    font-size: 1.4rem;
    color: white;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

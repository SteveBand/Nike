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

  @media screen and (max-width: 480px) {
    height: 9vh;
    .logo {
      font-size: 2rem;
      left: 2%;
      margin-right: 2rem;
    }
    .links {
      min-width: 70%;
      max-width: 250px;
      margin: auto;
    }
    ul {
      width: 80%;
      justify-content: space-around;
    }
    li {
      font-size: 14px;
      padding: 0 0.25rem;
    }
    .cart-more {
      width: 5%;
      right: 10%;
      height: 3rem;
      padding: 0;
      margin: 0;
      align-items: center;
    }

    .cart {
      font-size: 0.9rem;
      max-height: 1rem;
      padding: 6px;
    }
    .list {
      padding: 0;
      margin: 6px;
    }
  }
`;

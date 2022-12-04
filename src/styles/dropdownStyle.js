import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  width: 70%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  display: none;

  ul {
    margin-bottom: 60%;
  }

  li {
    list-style: none;
    padding: 1.5rem 0;
  }

  .links {
    color: white;
    font-size: 20px;
    position: relative;
    margin-left: 1rem;
  }

  .cart-btn {
    padding: 7px 15px;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: #fe6629;
    opacity: 0.92;
    border-radius: 10%;
  }

  .arrow-icon {
    font-size: 2.5rem;
    color: white;
    position: absolute;
    right: -30px;
    opacity: 0.95;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-95%)"};
    transition: all 1s ease-in-out;
    .links {
      font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
    }
  }
`;

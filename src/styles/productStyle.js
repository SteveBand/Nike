import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  text-align: center;
  position: relative;
  justify-content: center;
  max-height: 80vh;

  .img-holder {
    position: relative;
    margin: 0 auto;
    max-width: 50%;
    max-height: 60vh;
    justify-self: center;
  }

  img {
    max-width: 500px;
    max-height: 700px;
  }

  .next {
    display: flex;
    align-items: center;
    width: clamp(12%, 20%, 25%);
    height: clamp(20%, 30%, 45%);
    position: absolute;
    bottom: 5%;
    right: 0;
    background: linear-gradient(
      to left,
      #1c1f25 0%,
      #1c1f25 75%,
      #2b3138 0%,
      #2b3138 0%
    );
  }

  .next p {
    color: #727276;
    max-width: 300px;
    text-align: left;
    min-width: 150px;
    font-size: clamp(0.75rem, 0.7rem + 0.25vw, 1.2rem);
  }

  .next-btn {
    position: relative;
    margin: auto;
    margin-left: -10px;
    fill: #e15c29;
    padding: 10px;
    border: 1px solid white;
    border-radius: 100%;
    cursor: pointer;
  }
  .btn-icon {
    color: #e15c29;
    font-size: 1.75rem;
    font-size: clamp(1rem, 0.85rem + 0.75vw, 1.75rem);
  }

  .prev {
    display: flex;
    align-items: center;
    width: clamp(12%, 20%, 25%);
    height: clamp(20%, 30%, 45%);
    position: absolute;
    bottom: 5%;
    left: 0;
    background: linear-gradient(
      to right,
      #2b3138 0%,
      #2b3138 75%,
      #1c1f25 0%,
      #1c1f25 0%
    );
  }

  .prev p {
    color: #727276;
    max-width: 300px;
    min-width: 150px;
    font-size: clamp(0.75rem, 0.7rem + 0.25vw, 1.2rem);
    text-align: right;
    position: relative;
  }

  .prev-btn {
    position: relative;
    margin: auto;
    margin-right: -10px;
    fill: #e15c29;
    padding: clamp(4px, 2px + 4vw, 10px);
    border: 1px solid white;
    border-radius: 100%;
    cursor: pointer;
  }

  .detail {
    position: absolute;
    top: 0;
    left: 10%;
    font-size: clamp(1rem, 1rem + 2vw, 4rem);
    overflow-y: hidden;
    min-height: 50px;
    max-height: 250px;
    max-width: 600px;
    width: clamp(10rem, 25rem, 30rem);
    color: white;
    font-family: "Noto Serif Khojki", serif;
  }

  .do-it {
    display: none;
  }

  @media screen and (max-width: 480px) {
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .switch-btn {
      display: none;
    }

    img {
      max-width: 320px;
      max-height: 250px;
    }

    .img-holder {
      max-width: 40%;
      max-height: 50vh;
    }

    .detail {
      position: relative;
      max-width: 200px;
      font-size: 1.7rem;
      top: 20%;
      left: 0;
      color: gray;
      opacity: 1;
    }

    .do-it {
      display: block;
      position: absolute;
      top: 7%;
      font-size: 2rem;
      color: gray;
      opacity: 0.8;
      display: flex;
      align-items: center;
      letter-spacing: 5px;
      font-family: "Mukta", sans-serif;
    }

    .logo {
      font-size: 3rem;
      margin-left: 15px;
      color: cornsilk;
    }
  }
`;

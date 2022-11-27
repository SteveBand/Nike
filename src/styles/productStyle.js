import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 80vh;

  .img-holder {
    position: relative;
    margin: 0 auto;
    padding: 0;
    max-width: 50%;
    max-height: 60vh;
  }
  img {
    max-width: 40vw;
    max-height: 65vh;
  }

  .next {
    display: flex;
    align-items: center;
    width: 27rem;
    height: 10rem;
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
  }

  .prev {
    display: flex;
    align-items: center;
    width: 27rem;
    height: 10rem;
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
    text-align: right;
    position: relative;
    left: 0;
  }

  .prev-btn {
    position: relative;
    margin: auto;
    margin-right: -10px;
    fill: #e15c29;
    padding: 10px;
    border: 1px solid white;
    border-radius: 100%;
    cursor: pointer;
  }

  .detail {
    position: absolute;
    top: 0;
    left: 5%;
    font-size: 4rem;
    min-width: 100px;
    overflow-y: hidden;
    max-height: 350px;
    max-width: 600px;
    color: white;
    font-family: "Noto Serif Khojki", serif;
  }
`;

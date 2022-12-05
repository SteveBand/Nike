import React from "react";
import { Footer } from "./footer";
import { UseGlobalContext } from "../context/context";
import { Wrapper } from "../styles/productStyle";
import { SiNike } from "react-icons/si";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
export const Product = () => {
  const { setIndex, shoe, checkIndex } = UseGlobalContext();

  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const { img, detail, known } = shoe;
  return (
    <React.StrictMode>
      <Wrapper>
        <h1 className="do-it">
          JUST DO IT <SiNike className="logo" />
        </h1>
        <div className="detail">{detail}</div>
        <div className="img-holder">
          <img src={img} />
        </div>
        <div className="next switch-btn">
          <p>{known}</p>
          <btn className="next-btn" onClick={handleNext}>
            <AiOutlineRight className="btn-icon" />
          </btn>
        </div>
        <div className="prev switch-btn">
          <btn className="prev-btn" onClick={handlePrev}>
            <AiOutlineLeft className="btn-icon" />
          </btn>
          <p>{known}</p>
        </div>
        <Footer />
      </Wrapper>
    </React.StrictMode>
  );
};

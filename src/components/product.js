import React from "react";
import { UseGlobalContext } from "../context/context";
import { Wrapper } from "../styles/productStyle";
import { ShoesData } from "../context/data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
export const Product = () => {
  const { setIndex, shoe } = UseGlobalContext();
  const checkIndex = (num) => {
    if (num > ShoesData.length - 1) {
      return 0;
    }
    if (num < 0) {
      return ShoesData.length - 1;
    }
    return num;
  };

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
        <div className="detail">{detail}</div>
        <div className="img-holder">
          <img src={img} />
        </div>
        <div className="next">
          <p>{known}</p>
          <btn className="next-btn" onClick={handleNext}>
            <AiOutlineRight className="btn-icon" />
          </btn>
        </div>
        <div className="prev">
          <btn className="prev-btn" onClick={handlePrev}>
            <AiOutlineLeft className="btn-icon" />
          </btn>
          <p>{known}</p>
        </div>
      </Wrapper>
    </React.StrictMode>
  );
};

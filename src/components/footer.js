import React from "react";
import { UseGlobalContext } from "../context/context";
import { Wrapper } from "../styles/footerStyle";

export function Footer() {
  const { shoe } = UseGlobalContext();
  const { price } = shoe;
  return (
    <React.StrictMode>
      <Wrapper>
        <btn className="price-btn">${price}</btn>
        <btn className="cart-btn">ADD TO BAG</btn>
      </Wrapper>
    </React.StrictMode>
  );
}

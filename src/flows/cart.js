import React from "react";
import { CartProduct } from "../components/cartProduct";
import { UseGlobalContext } from "../context/context";
import { Wrapper } from "../styles/cartStyle";

export const Cart = () => {
  const { total } = UseGlobalContext();
  return (
    <React.StrictMode>
      <Wrapper>
        <div className="container">
          <CartProduct />
          <div className="price-total">
            <h1>Total : ${total}</h1>
          </div>
        </div>
      </Wrapper>
    </React.StrictMode>
  );
};

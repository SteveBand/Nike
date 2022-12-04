import React from "react";
import { Link } from "react-router-dom";
import { CartProduct } from "../components/cartProduct";
import { EmptyCart } from "../components/emptyCart";
import { UseGlobalContext } from "../context/context";
import { BtnContainer, Wrapper } from "../styles/cartStyle";

export const Cart = () => {
  const { total, cart } = UseGlobalContext();
  return (
    <React.StrictMode>
      <Wrapper>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="container">
            <CartProduct />
            <div className="price-total">
              <h1>Total : ${total}</h1>
            </div>
          </div>
        )}
      </Wrapper>
      <BtnContainer>
        <Link to="/" className="btn">
          BACK HOME
        </Link>
      </BtnContainer>
    </React.StrictMode>
  );
};

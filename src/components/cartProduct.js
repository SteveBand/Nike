import React from "react";
import { UseGlobalContext } from "../context/context";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
export const CartProduct = () => {
  const { cart, increase, decrease, total } = UseGlobalContext();
  let amountPrice = null;

  return (
    <React.StrictMode>
      {cart.map((product) => {
        const { id, img, price, amount, detail } = product;
        {
          amountPrice = price * amount;
        }
        return (
          <div className="product" key={id}>
            <div className="img-price">
              <img src={img} />
            </div>
            <div className="detail">
              <h4>{detail}</h4>
              <p className="price">${price}</p>
            </div>
            <div className="inc-dec">
              <MdOutlineKeyboardArrowUp
                className="arrow"
                onClick={() => increase(id)}
              />
              <p className="amount">{amount}</p>
              <MdOutlineKeyboardArrowDown
                className="arrow"
                onClick={() => decrease(id, amount)}
              />
              <h5>${amountPrice}</h5>
            </div>
          </div>
        );
      })}
    </React.StrictMode>
  );
};

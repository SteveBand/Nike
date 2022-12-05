import React from "react";
import { UseGlobalContext } from "../context/context";
import { Wrapper } from "../styles/footerStyle";

export function Footer() {
  const { shoe, cart, setCart, increase } = UseGlobalContext();
  const { price } = shoe;

  //Adds an Item to the Cart

  const addItem = () => {
    const { id, img, detail, price } = shoe;
    const product = [...cart].find((item) => item.id === id);
    if (product) {
      increase(id);
    } else {
      const newProduct = { id, img, price, amount: 1, detail };
      const newCart = [...cart, newProduct];
      setCart(newCart);
    }
    console.log(cart);
  };

  return (
    <React.StrictMode>
      <Wrapper>
        <btn className="price-btn">${price}</btn>
        <btn className="cart-btn" onClick={addItem}>
          ADD TO BAG
        </btn>
      </Wrapper>
    </React.StrictMode>
  );
}

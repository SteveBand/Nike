import React, { useState, useEffect, useContext } from "react";
import { ShoesData } from "./data";
export const shoeContext = React.createContext();

export const Context = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [shoe, setShoe] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [mobile, setMobile] = useState(false);

  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };

  const increase = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return { ...item };
      }
    });
    setCart(newCart);
  };

  const decrease = (id, amount) => {
    if (amount === 1) {
      return removeItem(id);
    } else {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return { ...item };
        }
      });
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    setShoe(ShoesData[index]);
  }, [index]);

  useEffect(() => {
    let newTotal = cart.reduce((total, item) => {
      const totalPerItem = item.price * item.amount;
      total += totalPerItem;
      return total;
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    console.log(setMobile)
  }, []);

  return (
    <shoeContext.Provider
      value={{
        index,
        setIndex,
        shoe,
        setShoe,
        cart,
        setCart,
        increase,
        decrease,
        total,
      }}>
      {children}
    </shoeContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(shoeContext);
};

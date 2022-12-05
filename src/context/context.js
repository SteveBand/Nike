import React, { useState, useEffect, useContext } from "react";
import { ShoesData } from "./data";
export const shoeContext = React.createContext();

export const Context = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [shoe, setShoe] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Remove Item from Cart //
  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };

  // Checks the index & makes sure it won't choose unreasonable number//
  const checkIndex = (num) => {
    if (num > ShoesData.length - 1) {
      return 0;
    }
    if (num < 0) {
      return ShoesData.length - 1;
    }
    return num;
  };
  // increasing a specific item amount from the cart List
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
  // decreasing a specific item amount from the cart List
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

  // const clearCart = () => {
  //   setCart([]);
  // };

  //useEffect Swipes for touch Screens

  useEffect(() => {
    document.addEventListener("touchstart", (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    });

    document.addEventListener("touchend", (e) => {
      setTouchEnd(e.changedTouches[0].clientX);
    });

    if (touchStart - touchEnd >= 420) {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkIndex(newIndex);
      });
    }

    if (touchStart + touchEnd >= 420) {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkIndex(newIndex);
      });
    }

    const removeEvents = () => {
      document.removeEventListener("touchstart", setTouchStart);
      document.removeEventListener("touchend", setTouchEnd);
    };

    return () => removeEvents();
  }, [touchEnd]);

  useEffect(() => {
    setShoe(ShoesData[index]);
  }, [index]);

  //Checks the total amount price of the CART

  useEffect(() => {
    let newTotal = cart.reduce((total, item) => {
      const totalPerItem = item.price * item.amount;
      total += totalPerItem;
      return total;
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

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
        checkIndex,
      }}>
      {children}
    </shoeContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(shoeContext);
};

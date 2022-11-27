import React, { useState, useEffect, useContext } from "react";
import { ShoesData } from "./data";
export const shoeContext = React.createContext();

export const Context = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [shoe, setShoe] = useState([]);

  useEffect(() => {
    setShoe(ShoesData[index]);
  }, [shoe, index]);
  return (
    <shoeContext.Provider value={{ index, setIndex, shoe, setShoe,}}>
      {children}
    </shoeContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(shoeContext);
};

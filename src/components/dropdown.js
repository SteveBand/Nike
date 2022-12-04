import React, { useRef, useState } from "react";
import { Wrapper } from "../styles/dropdownStyle";
import { Link } from "react-router-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
export const Dropdown = () => {
  const [activeDrop, setActiveDrop] = useState(false);
  const dropdown = useRef();

  const handleDropDown = () => {
    setActiveDrop(!activeDrop);
  };

  return (
    <React.StrictMode>
      <Wrapper ref={dropdown} open={activeDrop}>
        <div className="links">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PRODUCTS</li>
            <li>SUPPORT</li>
          </ul>
          <Link to="cart" className="cart-btn">
            TO CART
          </Link>
        </div>
        <HiArrowRightOnRectangle
          className="arrow-icon"
          onClick={() => {
            handleDropDown();
          }}
        />
      </Wrapper>
    </React.StrictMode>
  );
};

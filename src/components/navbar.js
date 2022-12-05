import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../styles/navStyle";
import { SiNike } from "react-icons/si";
import { BsCart3, BsList } from "react-icons/bs";

export function Nav() {
  return (
    <React.StrictMode>
      <Wrapper>
        <div className="logo">
          <SiNike />
        </div>
        <div className="links">
          <ul>
            <Link className="link-btn" to={"/"}>
              HOME
            </Link>
            <li>ABOUT</li>
            <li>PRODUCTS</li>
            <li>SUPPORT</li>
          </ul>
        </div>
        <div className="cart-more">
          <Link to="cart" className="cart cart-btn">
            <BsCart3 />
          </Link>
          <div className="list">
            <BsList className="list-btn" />
          </div>
        </div>
      </Wrapper>
    </React.StrictMode>
  );
}

import React from "react";
import { Wrapper } from "../styles/navStyle";
import { SiNike } from 'react-icons/si'
import {BsCart3, BsList} from 'react-icons/bs'
export function Nav() {
  return <React.StrictMode>
    <Wrapper>
      <div className="logo">
        <SiNike />
      </div>
      <div className="links">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PRODUCTS</li>
          <li>SUPPORT</li>
        </ul>
      </div>
      <div className="cart-more">
        <div className="cart"><BsCart3 /></div>
        <div className="list"><BsList /></div>
      </div>
    </Wrapper>
  </React.StrictMode>;
}

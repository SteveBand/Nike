import React from "react";
import { Link } from "react-router-dom";
import { EmptyWrapper } from "../styles/cartStyle";

export const EmptyCart = () => {
  return (
    <React.StrictMode>
      <EmptyWrapper>
        <div className="empty-msg">
          <h1>Seems like your Cart is Empty</h1>
        </div>
        <Link to="/" className="back-btn">
          BACK HOME
        </Link>
      </EmptyWrapper>
    </React.StrictMode>
  );
};

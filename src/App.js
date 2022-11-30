import React from "react";
import Dashboard from "./flows/dashboard";
import { Cart } from "./flows/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

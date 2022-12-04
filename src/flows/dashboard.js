import React from "react";
import { Nav } from "../components/navbar";
import { Product } from "../components/product";
import { Dropdown } from "../components/dropdown";
function Dashboard() {
  return (
    <main>
      <Nav />
      <Product />
      <Dropdown />
    </main>
  );
}

export default Dashboard;

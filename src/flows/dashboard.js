import React from "react";
import { Nav } from "../components/navbar";
import { Product } from "../components/product";
import { Footer } from "../components/footer";
function Dashboard() {
  return (
    <main>
      <Nav />
      <Product />
      <Footer />
    </main>
  );
}

export default Dashboard;

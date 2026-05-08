// Home.jsx

import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Aboutus from "../components/Aboutus";
function Home() {
  return (
    <div>
      <Header />
      <Products/>
      <Aboutus/>
    </div>
  );
}

export default Home;
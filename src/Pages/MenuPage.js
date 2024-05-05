import React from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Menu from "../Componet/Menu";

function MenuPage() {
  return (
    <div>
      <div className="menupage">
        <Navbar />

        <Menu />

        <Footer />
      </div>
    </div>
  );
}

export default MenuPage;

import React from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import TiffinManagementSystem from "../Componet/tiffin_rec";



function Attendence() {
  return (
    <div>
      <Navbar />
        <div>
          <TiffinManagementSystem />
        </div>
      <Footer />
    </div>
  );
}

export default Attendence;

import React from "react";
import '../App.css'; 
function CardMenu({Headl,title,link}) {
  return (
    <div>
      <div className="CardM1">
      <div class="card" style={{ width:'18rem'}}>
        <img src={link} class="card-img-top" alt="..." />
        <div class="card-body">
          <h2>{title}</h2>
          <p class="card-text">
           {Headl}
          </p>
          <div className="cardbtn">
          <button>BUY NOW</button>
          </div>
       
        </div>
      </div>
      </div>
      </div>
  );
}

export default CardMenu;

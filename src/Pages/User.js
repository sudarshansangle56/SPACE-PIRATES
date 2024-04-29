import React from 'react'
import UserNavbar from '../Componet/UserNavbar'
import Footer from '../Componet/Footer'
import { Link } from "react-router-dom";
import Menu from "../Componet/Menu";
import '../CSS/Home.css';


function User() {
  return (
    <div>
    
        
        <div>
        <UserNavbar/>
     

      <div className="parta">
        <div className="parta1">
          <h1>
             Welcome to Gande  <br />
             Tiffin Town  <br />
            <div className="para">
            <p>Your Delicious Destination!</p>
            </div>
          </h1>
          <p>
            Order a healthy and well-balanced meal designed by our <br /> expert
            dietician in any part of Mumbai. <br /> It’s all homemade… "Ghar ka
            khana just the way you want."
          </p>
          <Link to="/About">
            <button>About us</button>
          </Link>
        </div>
        <div className="parta2">
         <img src="https://www.happygrub.in/img/indian-plate.png" alt="" srcset="" />
        </div>
      </div>
 
      <div className="partb">
        <div className="partb1">
          <h1>MEAL PLANS</h1>
          <h3>
            Affordable Calorie-counted Daily Changing Menu  Customizable
            Weekly/Monthly Plans
          </h3>
          <p>
            Our meals are a healthy combination of whole grains, veggies, pulses
            and spices and provide essential nutrients like proteins,
            carbohydrates, fibre etc without compromising on taste.
          </p>
        </div>
         <Menu/>
      </div>
      <div className="both2">
        <h2>Location & Payment</h2>
      </div>
      <div className="partc">
        <div className="location">
          <h1>Location</h1>
          <img
            src="/IMAGES/Screenshot 2024-03-13 195411.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="payment">
          <h1>Payment</h1>
          <img
            src="/IMAGES/Phonepay.jpeg"
            alt="ABHI"
            srcset=""
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
      
    </div>
  )
}

export default User

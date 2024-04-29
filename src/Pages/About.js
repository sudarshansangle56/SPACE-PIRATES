import React from 'react'
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Acard from "../Componet/Acard"
import '../CSS/About.css';
function About() {
  return (
    <div>
     
      <Navbar />
      <div className="aboutpage">
        <Acard
          Headline="About us"
          paragraph="We love picky eaters. We love foodies. We love vegetarians. We
              love health freaks. Is there any dessert? We love them too. We
              love the ones who call. We even love the ones who order online. We
              love them all. Discover your next healthy dish Born with a
              mission to revolutionize eating habits, we believe in providing
              tiffins in Mumbai that are healthy, homely and hygienic."
        />
        <Acard
          Headline="Why us?"
          paragraph="   Locations We are a solution for every query of “tiffin service
              near me” or “homemade food near me”. We deliver your meal all over
              Mumbai including Andheri, Bandra, Lower Parel, Churchgate, Dadar,
              Nariman Point, Vile-Parle Santacruz, Goregaon, Fort, Mahalaxmi,
              Kurla, CST, Chembur, and many other aril "
        />
        <Acard
          Headline="Why Our Tiffin"
          paragraph="  Locations We are a solution for every query of “tiffin service
              near me” or “homemade food near me”. We deliver your meal all over
              Mumbai including Andheri, Bandra, Lower Parel, Churchgate, Dadar,
              Nariman Point, Vile-Parle Santacruz, Goregaon, Fort, Mahalaxmi,
              Kurla, CST, Chembur, and many other aril "
        />
        <Acard
          Headline="Review"
          paragraph="  Locations We are a solution for every query of “tiffin service
              near me” or “homemade food near me”. We deliver your meal all over
              Mumbai including Andheri, Bandra, Lower Parel, Churchgate, Dadar,
              Nariman Point, Vile-Parle Santacruz, Goregaon, Fort, Mahalaxmi,
              Kurla, CST, Chembur, and many other aril "
        />
        <Acard
          Headline="Review"
          paragraph="  Locations We are a solution for every query of “tiffin service
              near me” or “homemade food near me”. We deliver your meal all over
              Mumbai including Andheri, Bandra, Lower Parel, Churchgate, Dadar,
              Nariman Point, Vile-Parle Santacruz, Goregaon, Fort, Mahalaxmi,
              Kurla, CST, Chembur, and many other aril "
        />
        <Acard
         
          Headline="Aditiya"
          paragraph=" “tiffin service
              near me” or “homemade food near me”. We deliver your meal all over
              Mumbai including Andheri, Bandra, Lower Parel, Churchgate, Dadar,
              Nariman Point, Vile-Parle Santacruz, Goregaon, Fort, Mahalaxmi,
              Kurla, CST, Chembur, and many other aril "
        />
      </div>
      
      <Footer />
    </div>
  )
}

export default About


import React from 'react'
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import Acard from "../Componet/Acard"
import '../CSS/About.css';
function About() {
  return (
    <div>
       <div className=" aboutnav">
       <Navbar />
       </div>

      <div className="aboutpage">
        <img src="/IMAGES/vegitable2.png" alt="" srcset="" />
        <Acard
          Headline="About us"
          paragraph="Welcome to Sai sanchit Tiffin Town! We're your go-to destination for wholesome homemade meals in Kopergaon. Just like you, we cherish picky eaters, foodies, vegetarians, and health enthusiasts. Craving dessert? We've got you covered. Our mission is to transform eating habits, offering healthy, homely, and hygienic tiffins across Kopergaon."
        />
         
        <Acard
          Headline="Why us?"
          paragraph="Sai sanchit Tiffin Town is committed to freshness and quality. Our meals feature fresh vegetables and high-quality oils, prepared with care. With wide delivery across Kopargoan, we're your top choice for 'tiffin service near me' or 'homemade food near me'. Enjoy delicious and nutritious meals delivered to your doorstep."
        />
          
        <Acard
          Headline="Why Our Tiffin"
          paragraph="Our tiffin service at Sai sanchit Tiffin Town stands out for its commitment to health and variety. We prioritize nutritious meals, with weekends offering delectable non-vegetarian options. Whether it's weekdays or weekends, our focus remains on providing wholesome and satisfying meals for our customers."
        />
        <Acard
          Headline="Review By Vaibhav"
          paragraph="I've been a patron of Sai sanchit Tiffin Town for 7 months now, and my experience has been nothing short of excellent. Their meals are not only delicious but also nutritious, maintaining a high standard of quality and healthiness. I highly recommend Sai sanchit Tiffin Town for anyone looking for a wholesome dining experience."
        />
          
        <Acard
          Headline="Review By Jayesh"
          paragraph="Sai sanchit Tiffin Town has been my preferred choice for meals over the last year. The quality of their food is exceptional, and I've particularly enjoyed the variety they offer. From nutritious options to delicious treats, every meal has been a delight. I highly recommend Sai sanchit Tiffin Town for anyone seeking a balanced and flavorful dining experience."
        />
           <img src="/IMAGES/vegitable4.png" alt="" srcset="" />
        <Acard
         
          Headline="Review By Aditiya"
          paragraph="I've been enjoying Sai sanchit Tiffin Town's meals for the past 10 months, and I must say, I'm thoroughly impressed. The quality of rice and roti is exceptional, and I appreciate the consistent effort put into maintaining high standards. Sai sanchit Tiffin Town has become my go-to choice for delicious and satisfying meals."
        />
      </div>
      
      
      <Footer />
    </div>
  )
}

export default About

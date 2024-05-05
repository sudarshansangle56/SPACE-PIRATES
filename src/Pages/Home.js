import React from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="white">
      <Navbar />
      <div className="part1">
        <div className="part2">
          <div className="headline">
            <div className="img32">
              <h1>
                Welcome to Gande <br />
                Tiffin Town <br />
              </h1>
            </div>

            <div className="para">
              <p>Your Delicious Destination!</p>
            </div>

            <p>
              Order a healthy and well-balanced meal designed by our <br />{" "}
              expert dietician in any part of Mumbai. <br /> It’s all homemade…
              "Ghar ka khana just the way you want."
            </p>
            <Link to="/About">
              <button>About us</button>
            </Link>
          </div>

          <div className="partimg"></div>
        </div>
      </div>

      <div className="partb">
        <div className="partbb">
          <img src="/IMAGES/pngegg.png" alt="" />
        </div>

        <div className="box1">
          <div className="box11">
            <div className="t1">
              <h1>
                FRESH TO  <br /> DINNER TODAY
              </h1>
            </div>
          </div>
          <div className="box12">
            <h1>
              Lorem ipsum dolor sit amet  <br /> consectetur adipisicing elit. <br /> Ex
              perspiciatis ratione porro.
            </h1>
          </div>
        </div>
        <div className="box2">
          <div className="box22">
              <h1>Open Daily 5PM-10PM <br />
                Anapurna Nagar<br />
                Kopergon
              </h1>
          </div>
          <div className="box33">
            <div className="box113">
              <img src="/IMAGES/cimg.png" alt="" srcset="" />
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi <br />
                maiores unde quasi dignissimos fugiat ipsum, odit a aliquam{" "}
                <br />
                laboriosam ipsa modi culpa quae at iusto.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="homeservices">
        <div className="homeservices2">
        </div>
        <img className="service" src="/IMAGES/HOME33.jpg" alt="" srcset="" />
        <div className="home1">
          <div className="hf1">
            <div className="off">
            50% <br /> OFF
            </div>
            <div className="on">


            </div>
          </div>
          <div className="hf11">
            <div className="cont">
              <div className="location1">
                <img src="/IMAGES/Name.png" alt="" srcset="" />
                <h1>NAME:- NILESH GANDE</h1>
              </div>

              <div className="location2">
                <img src="/IMAGES/Call2.png" alt="" srcset="" />
                <h1>Pho:-8007077730</h1>
              </div>
              <div className="location3">
                <img src="/IMAGES/Location.png" alt="" srcset="" />
                <h1>Kopergon Dist Nagar 422105</h1>
              </div>
            </div>
            <div className="car">
              <div className="car12">
                <img src="/IMAGES/Car.png" alt="" srcset="" />
                <h1> FREE HOME DILIVERY</h1>
              </div>
              <p>IN KOPERGON ONLY</p>
            </div>
          </div>
        </div>

        <div className="home2">
          <div className="hf2"></div>
          <div className="hf22"></div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

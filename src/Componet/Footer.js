import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="Footer12">
      <div className="container">
        <div className="row">
        <div className="navbar-brand">
          <img
            src="/IMAGES/LOGO56.png"
            alt="MESS"
            style={{ height: "80px" }}
          />
        </div>
          <div className="col-6 col-md-2 mb-3">
            <h4>
              {" "}
              GANDE <span> TIFIIN</span>
            </h4>{" "}
            <h4>TWON</h4>
            <ul className="nav flex-column">
              <div className="homebut">
                <li className="nav-item mb-2">
                  <Link to="/Home" className="nav-link p-0 text-black">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/About" className="nav-link p-0 text-black">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/Menupage" className="nav-link p-0 text-black">
                    Menu
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/LoginForm" className="nav-link p-0 text-black">
                    Login
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Links</h5>

            <div className="icon1">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to="https://wa.me/918007077730"
                    className="nav-link p-0 text-green"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="icon" style={{ color: "green" }} />
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="https://www.facebook.com/nilesh.gande.9?mibextid=ZbWKwL"
                    className="nav-link p-0 text-green"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="icon" style={{ color: "blue" }} />
                  </Link>
                </li>
                <li className="nav-item mb-2 color-black">
                  <Link
                    to="https://www.instagram.com/nilesh_gande?igsh=MzNlNGNkZWQ4Mg=="
                    className="nav-link p-0 text-black"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="icon"
                      style={{ color: "red" }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="mailto:nileshgande149@gmail.com" className="nav-link p-0 text-black">
                  nileshgande149@gmail.com
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="https://wa.me/918007077730" className="nav-link p-0 text-black">
                  8007077730
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="https://www.instagram.com/nilesh_gande?igsh=MzNlNGNkZWQ4Mg==" className="nav-link p-0 text-black">
                  @nilesh_gande
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="https://www.facebook.com/nilesh.gande.9?mibextid=ZbWKwL" className="nav-link p-0 text-black">
                   @nilesh.gande.9
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-black">
                  ©Space Pirates
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Share Your Valuable Feedback with Us</h5>
              <p>Stay Connected stay safe </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Feedback
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Feedback"
                />
                <button className="btn btn-primary" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;

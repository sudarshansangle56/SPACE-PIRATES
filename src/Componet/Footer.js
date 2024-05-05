import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="Footer12">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h3>Gande <br />
            Tiffin Town</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-black">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-black">
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Record" className="nav-link p-0 text-black">
                <FontAwesomeIcon icon={faMap} className="icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/Home" className="nav-link p-0 text-black">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-black">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-black">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Record" className="nav-link p-0 text-black">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/About" className="nav-link p-0 text-black">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-black">
                  nileshgande149@gmail.com
                </Link>
              </li>
              <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-black">
                  8007077730
                </Link>
              </li>
              <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-black">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-black">
                  FAQs
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

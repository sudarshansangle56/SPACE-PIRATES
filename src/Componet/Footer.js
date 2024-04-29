import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer12">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/Home" className="nav-link p-0 text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Record" className="nav-link p-0 text-white">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/About" className="nav-link p-0 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  nileshgande149@gmail.com
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  8007077730
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
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

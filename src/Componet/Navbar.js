import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar1">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ fontSize: "3vh", backgroundColor: "rgb(64, 162, 99)" }} 
        >
          <img
            src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/orange-and-white-circle-tiffin-logo-design-template-0o80qz9b525fbe.webp"
            alt="MESS"
            style={{ height: "68px" }}
          />
          <div className="navbtn">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav active">
              <li className="nav-item active">
                <Link className="nav-link active" to="/">
                  Home 
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link active" to="/MenuPage">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/LoginForm">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

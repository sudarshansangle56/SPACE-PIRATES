import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <div className="navbar1">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="navbar-brand">
          <img
            src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/orange-and-white-circle-tiffin-logo-design-template-0o80qz9b525fbe.webp"
            alt="MESS"
            style={{ height: "68px" }}
          />
        </div>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/MenuPage">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LoginForm">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

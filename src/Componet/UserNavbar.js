import React from 'react'
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div>
      <div className="navbar1">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ fontSize: "3vh", backgroundColor: "Transperent" }} 
        >
           <img
            src="/IMAGES/LOGO56.png"
            alt="MESS"
            style={{ height: "100px" }}
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
                <Link className="nav-link active" to="/User">
                  Home 
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link active" to="/UMenu">
                  Menu
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Record">
                    Show Record
                  </Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default UserNavbar

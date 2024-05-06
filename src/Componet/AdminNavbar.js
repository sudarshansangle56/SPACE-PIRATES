import React from 'react'
import { Link } from "react-router-dom";
function AdminNavbar() {
  return (
    <div className="navbar1">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ fontSize: "3vh", backgroundColor: "rgb(64, 162, 99)" }} 
        >
          <img
             src="/IMAGES/LOGO56.png"
             alt="MESS"
             style={{ height: "80px" }}
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
                <Link className="nav-link active" to="/Admin">
                  Home 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/CalculateA">
                  Record
                </Link>
              </li>
              <div className="login12">
                <li className="nav-item">
                  <Link className="nav-link active" to="/AdminAtt">
                    Show Record
                  </Link>
                </li>
              </div>
              <li className="nav-item">
                <Link className="nav-link active" to="/Show_Custam">
                  Remove
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/new_custam">
                  Add
                </Link>
              </li>

              
            </ul>
          </div>
        </nav>
      </div>
    
  )
}

export default AdminNavbar

// SignInForm.jsx

import React, { useState } from "react";
import { database, ref, query, orderByChild, equalTo, get } from "./firebase";
import { useNavigate } from "react-router-dom";
import "../CSS/LoginForm.css"; // Import the CSS file
import Navbar from "../Componet/Navbar";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Add useNavigate hook

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return false;
    }
    return true;
  };

  const login = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let userRef;
    if (userType === "admin") {
      userRef = ref(database, "custam_info/signup/admin");
    } else {
      userRef = ref(database, "custam_info/signup/user");
    }

    const matchEmailQuery = query(
      userRef,
      orderByChild("email"),
      equalTo(email)
    );

    try {
      const snapshot = await get(matchEmailQuery);
      const userData = snapshot.val();

      if (userData) {
        const users = Object.values(userData);
        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          alert("Login Successful");
          clearFields();
          // Redirect user to the appropriate page
          if (userType === "admin") {
            navigate("/Admin"); // Redirect to admin page
          } else {
            navigate("/User"); // Redirect to user page
          }
        } else {
          setError("Invalid email or password");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred while logging in.");
    }
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
    setUserType("user");
    setError("");
  };

  return (
    <div className="nav125">
      
        <Navbar />
      

      <div className="container999">
        <div className="form-container12">
          <h4>
            Welcome to Gande
            <span>Tiffin </span> Town
          </h4>
          <h2>Login</h2>
          <form onSubmit={login}>
            <div className="form-group12">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group12">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group12">
              <label>User Type:</label>
              <div>
                <input
                  type="radio"
                  id="user"
                  name="userType"
                  value="user"
                  checked={userType === "user"}
                  onChange={() => setUserType("user")}
                />
                <label htmlFor="user">User</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="admin"
                  name="userType"
                  value="admin"
                  checked={userType === "admin"}
                  onChange={() => setUserType("admin")}
                />
                <label htmlFor="admin">Admin</label>
              </div>
            </div>
            <button type="submit" className="btn-submit12">
              Sign In
            </button>
            {error && <p className="error-msg12">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

import "../CSS/signup.css";
import React, { useState, useEffect } from "react";
import {
  database,
  ref,
  push,
  onValue,
  query,
  orderByChild,
  equalTo,
  get,
} from "./firebase";
import Navbar from "../Componet/Navbar";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userType, setUserType] = useState("user");
  const [adminCount, setAdminCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when component mounts

  const fetchData = () => {
    const usersRef = ref(database, "custam_info/signup/admin");
    onValue(usersRef, (snapshot) => {
      const admins = snapshot.val();
      if (admins) {
        setAdminCount(Object.keys(admins).length);
      }
    });
  };

  const validateForm = () => {
    if (!name || !email || !password || !mobileNumber) {
      setError("Please fill in all fields");
      return false;
    }
    return true;
  };

  const signup = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const matchEmailRef = ref(database, "custam_info/signup");
    const matchEmailQuery = query(
      matchEmailRef,
      orderByChild("email"),
      equalTo(email)
    );

    try {
      const snapshot = await get(matchEmailQuery);
      const emailMatchingArray = [];
      snapshot.forEach((childSnapshot) => {
        emailMatchingArray.push(childSnapshot.val());
      });

      // const isAdminExists = emailMatchingArray.some(user => user.userType === 'admin');

      if (userType === "admin" && adminCount === 0) {
        await push(ref(database, "custam_info/signup/admin"), {
          name,
          email,
          password,
          mobileNumber,
          userType,
        });
        alert("Signup Successful as Admin");

        setAdminCount(1);
        clearFields();
      } else if (userType === "user") {
        await push(ref(database, "custam_info/signup/user"), {
          name,
          email,
          password,
          mobileNumber,
          userType,
        });
        alert("Signup Successful as User");

        clearFields();
      } else {
        alert("Admin already exists. Cannot sign up as admin.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred while signing up.");
    }
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
    setUserType("user");
    setError("");
  };

  return (
    <div className="nav125">
     
        <Navbar />

      <div className="container998">
              <h4>
                Welcome to Gande 
                <span>Tiffin </span> Town 
              </h4>
        <h2>Sign Up</h2>
        <form onSubmit={signup}>
          <div className="form-group12">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <label>Mobile Number:</label>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="form-group radio-group">
            <input
              type="radio"
              id="user"
              name="userType"
              value="user"
              checked={userType === "user"}
              onChange={() => setUserType("user")}
            />
            <label htmlFor="user">User</label>
            <input
              type="radio"
              id="admin"
              name="userType"
              value="admin"
              checked={userType === "admin"}
              onChange={() => setUserType("admin")}
              disabled={adminCount > 0}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
          {error && <p className="error-msg12">{error}</p>}
        </form>
        <p className="login-link">
          Already have an account? <Link to="/LoginForm">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;

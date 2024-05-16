import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  database,
  ref,
  push,
  auth,
  createUserWithEmailAndPassword,
} from "./firebase";
import { sendEmailVerification } from "firebase/auth"; // Import sendEmailVerification
import { get } from "firebase/database"; // Import get function
import "../CSS/signup.css"; // Import the CSS file
import Footer from "../Componet/Footer";
function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userType, setUserType] = useState("user");
  const [error, setError] = useState("");
  const [adminCount, setAdminCount] = useState(0);

  useEffect(() => {
    const checkAdminCount = async () => {
      const snapshot = await get(ref(database, "custam_info/signup/admin")); // Use get function to get the snapshot
      if (snapshot.exists()) {
        const admins = snapshot.val();
        setAdminCount(Object.keys(admins).length);
      }
    };
    checkAdminCount();
  }, []);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !password || !mobileNumber) {
      setError("Please fill in all fields");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const signup = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user); // Pass the user object to sendEmailVerification

      alert(
        "Verification email sent. Please verify your email to complete sign-up."
      );

      if (userType === "admin" && adminCount === 0) {
        await push(ref(database, "custam_info/signup/admin"), {
          name,
          email,
          mobileNumber,
          userType,
        });
        alert("Signup Successful as Admin");

        setAdminCount(1);
      } else if (userType === "user") {
        await push(ref(database, "custam_info/signup/user"), {
          name,
          email,
          password,
          mobileNumber,
          userType,
        });
        alert("Signup Successful as User");
      } else {
        alert("Admin is already Exist");
      }

      clearFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email address is already in use.");
      } else {
        setError("An error occurred while signing up. Please try again later.");
      }
      console.error("Error signing up:", error);
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
    


<div className="nav144">
   
   <div className="all">
   <div className="partfirst">
   <div className="part14">
     <h1>Welcome to Sai Sanchit <br /> tiffin twon</h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nostrum, commodi deserunt maiores totam, accusamus esse molestias dolor, a harum corrupti ab doloremque. Magnam commodi ipsam fuga maiores quas!</p>
   </div>
   </div>
   <div className="parttwo">
   <div className="container999">
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
        <div className="form-group radio-group12">
          <input
            type="radio"
            id="user"
            name="userType"
            value="user"
            checked={userType === "user"}
            onChange={() => setUserType("user")}
          />
          <label htmlFor="user12">User</label>
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
        <button type="submit" className="btn-submit">
          Sign Up
        </button>
        {error && <p className="error-msg">{error}</p>}
      </form>
      <p className="login-link">Already have an account?  <Link   to="/LoginForm">
      Sign In
              </Link></p>
    </div>
   </div>
   </div>
 
   <Footer/>
 </div>

  );
}

export default SignUpForm;

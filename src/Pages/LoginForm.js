import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from './firebase'; // Import signInWithEmailAndPassword from firebase
import { useNavigate } from "react-router-dom";
import "../CSS/LoginForm.css"; 
import Footer from "../Componet/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Define navigate function

  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return false;
    }
    return true;
  };

  const login = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password); 
      alert("Login Successful");
      clearFields();
      if (userType === "admin") {
        navigate("/Admin"); 
      } else {
        navigate("/User"); 
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError("Invalid email or password");
      } else {
        setError("An error occurred while logging in.");
        console.error("Error logging in:", error);
      }
    }
  };
  
  const clearFields = () => {
    setEmail('');
    setPassword('');
    setUserType('user');
    setError('');
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
        <h2>Login </h2>
        <form onSubmit={login}>
          <div className="form-group12">
          <label><FontAwesomeIcon icon={faEnvelope} className="icon" style={{ color: "blue" }} /> Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group12">
          <label><FontAwesomeIcon icon={faLock} className="icon" style={{ color: "blue" }} /> Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group12">
            <label>User Type:</label>
            <div className="radio-group12">
              <input
                type="radio"
                id="user"
                name="userType"
                value="user"
                checked={userType === 'user'}
                onChange={() => setUserType('user')}
              />
              <label htmlFor="user">User</label>
            </div>
            <div className="radio-group12">
              <input
                type="radio"
                id="admin"
                name="userType"
                value="admin"
                checked={userType === 'admin'}
                onChange={() => setUserType('admin')}
              />
              <label htmlFor="admin">Admin</label>
            </div>
          </div>
          <div className="submit">
          <button type="submit" className="btn-submit">
            Sign In
          </button>
          </div>
          {error && <p className="error-msg12">{error}</p>}
        </form>
        </div>
      </div>
      </div>
      <Footer/> 
    </div>
  );
}

export default LoginForm;

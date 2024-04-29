import React, { useState } from 'react';
import { database, ref, push } from './firebase';
import '../CSS/new_custam.css';
import AdminNavbar from '../Componet/AdminNavbar';
import Footer from '../Componet/Footer';

function AddCustomerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!name || !email || !mobileNumber) {
      setError('Please fill in all fields');
      return false;
    }
    return true;
  };

  const addCustomer = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await push(ref(database, 'custam_info/custam'), { name, email, mobileNumber });
      alert("Customer added successfully");
      clearFields();
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("An error occurred while adding customer.");
    }
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setMobileNumber('');
    setError('');
  };

  return (

    <div>

<AdminNavbar/>
    <div className="container99">
       
      <h2>Add New Customer</h2>
      <form onSubmit={addCustomer}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-submit">
          Add Customer
        </button>
        {error && <p className="error-msg">{error}</p>}
      </form>
     
    </div>
    <Footer/>
    </div>
  );
}

export default AddCustomerForm;
import React, { useState, useEffect } from 'react';
import { database, ref, push, onValue, remove } from "../Pages/firebase";
import '../CSS/TiffinManagementSystem.css';

const TiffinManagementSystem = () => {
  const [tiffins, setTiffins] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [date, setDate] = useState('');
  const [mealType, setMealType] = useState('day');
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const customersRef = ref(database, 'customers');
      
    onValue(customersRef, (snapshot) => {
      const customersData = snapshot.val();
      if (customersData) {
        const customersList = Object.keys(customersData).map((key) => ({
          id: key,
          name: customersData[key].name
        }));
        setCustomers(customersList);
        setLoading(false); // Set loading to false when customers data is loaded
      } else {
        setCustomers([]);
        setLoading(false); // Set loading to false even if there are no customers
      }
    });
  }, []);

  useEffect(() => {
    const tiffinsRef = ref(database, 'tiffins');
      
    onValue(tiffinsRef, (snapshot) => {
      const tiffinsData = snapshot.val();
      if (tiffinsData) {
        const tiffinsList = Object.keys(tiffinsData).map((key) => ({
          id: key,
          ...tiffinsData[key]
        }));
        setTiffins(tiffinsList);
      } else {
        setTiffins([]);
      }
    });
  }, []);

  const addTiffin = () => {
    if (!selectedCustomer || !date || !mealType) {
      alert('Please fill in all the fields');
      return;
    }

    const tiffinsRef = ref(database, 'tiffins');
      
    push(tiffinsRef, {
      customerId: selectedCustomer,
      date,
      mealType
    }).then(() => {
      alert('Tiffin added successfully!');
      setSelectedCustomer('');
      setDate('');
      setMealType('day');
    }).catch((error) => {
      console.error("Error adding tiffin:", error);
    });
  };

  const removeTiffin = (id) => {
    const tiffinsRef = ref(database, `tiffins/${id}`); // Corrected string interpolation
      
    remove(tiffinsRef).then(() => {
      console.log("Tiffin removed successfully!");
    }).catch((error) => {
      console.error("Error removing tiffin:", error);
    });
  };

  const calculateTiffinsNotTaken = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    let notTakenTiffins = {};

    tiffins.forEach((tiffin) => {
      const tiffinDate = new Date(tiffin.date);
      const tiffinMonth = tiffinDate.getMonth() + 1;
      
      if (tiffinMonth === currentMonth) {
        const customerName = customers.find((customer) => customer.id === tiffin.customerId)?.name;
        if (customerName) {
          if (notTakenTiffins[customerName]) {
            notTakenTiffins[customerName]++;
          } else {
            notTakenTiffins[customerName] = 1;
          }
        }
      }
    });

    return notTakenTiffins;
  };

  if (loading) {
    return <div>Loading...</div>; // Render loading message while data is being fetched
  }

  return (
    <div className="container">
      <h1>Tiffin Management System</h1>
      <div className="form-container">
        <h2>Add New Tiffin Record</h2>
        <div className="form-group">
          <label>Customer:</label>
          <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)} required>
            <option value="">Select Customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Meal Type:</label>
          <select value={mealType} onChange={(e) => setMealType(e.target.value)} required>
            <option value="day">Day</option>
            <option value="night">Night</option>
          </select>
        </div>
        <button id="add" onClick={addTiffin}>Add Tiffin</button>
      </div>
      <div className="info-container">
        <h2>Tiffins not taken this month:</h2>
        <ul>
          {Object.keys(calculateTiffinsNotTaken()).map((customerName) => (
            <li key={customerName}>
              Customer: {customerName} - Not Taken: {calculateTiffinsNotTaken()[customerName]}
            </li>
          ))}
        </ul>
        <h2>Tiffins Record:</h2>
        <ul>
          {tiffins.map((tiffin) => (
            <li key={tiffin.id}>
              Customer: {customers.find((customer) => customer.id === tiffin.customerId)?.name} - Date: {tiffin.date} - {tiffin.mealType} 
              <button  className="remove-button" onClick={() => removeTiffin(tiffin.id)} >Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TiffinManagementSystem;

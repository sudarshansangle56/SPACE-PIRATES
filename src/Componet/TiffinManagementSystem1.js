
import '../CSS/TiffinManagementSystem.css';



import React, { useState, useEffect } from 'react';
import { database, ref, onValue } from "../Pages/firebase";


const TiffinManagementSystem = () => {
  const [tiffins, setTiffins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const tiffinPrice = 40;
  
  useEffect(() => {
    const tiffinsRef = ref(database, 'custam_info');

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

  const calculateTiffinsNotTaken = () => {
    const tiffinsNotTaken = {};

    tiffins.forEach((tiffin) => {
      if (!tiffinsNotTaken[tiffin.name]) {
        tiffinsNotTaken[tiffin.name] = {
          name: tiffin.name,
          totalTiffins: 0,
          totalBill: 0
        };
      }
      tiffinsNotTaken[tiffin.name].totalTiffins++;
    });

    for (let customer in tiffinsNotTaken) {
      tiffinsNotTaken[customer].totalBill = (tiffinsNotTaken[customer].totalTiffins * tiffinPrice) - 2400;
    }

    return Object.values(tiffinsNotTaken);
  };

  const filteredCustomers = calculateTiffinsNotTaken().filter(customer => {
    return customer.name && customer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <h1>Tiffin Management System</h1>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by customer name" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="info-container">
        <h2>Customers with tiffins not taken:</h2>
        <ul>
          {filteredCustomers.map((customer) => (
            <li key={customer.name}>
              {customer.name} - Total Tiffins: {customer.totalTiffins}, Total Bill: RS{customer.totalBill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TiffinManagementSystem;
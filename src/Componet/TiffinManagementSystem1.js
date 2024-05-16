import React, { useState, useEffect } from 'react';
import '../CSS/TiffinManagementSystem.css';
import { database, ref, onValue } from "../Pages/firebase";

const CustomerTiffinRecord = () => {
  const [tiffins, setTiffins] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
        setLoading(false);
      } else {
        setCustomers([]);
        setLoading(false);
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

  const calculateCustomerTiffinRecord = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    let customerTiffinRecord = {};

    tiffins.forEach((tiffin) => {
      const tiffinDate = new Date(tiffin.date);
      const tiffinMonth = tiffinDate.getMonth() + 1;
      const tiffinYear = tiffinDate.getFullYear();

      if (tiffinMonth === currentMonth && tiffinYear === currentYear) {
        if (!customerTiffinRecord[tiffin.customerId]) {
          customerTiffinRecord[tiffin.customerId] = {
            name: customers.find((customer) => customer.id === tiffin.customerId)?.name,
            totalTiffins: 0,
            totalBill: 0
          };
        }
        customerTiffinRecord[tiffin.customerId].totalTiffins++;
      }
    });

    for (let customerId in customerTiffinRecord) {
      customerTiffinRecord[customerId].totalBill = (customerTiffinRecord[customerId].totalTiffins - 60) * 40;
    }

    return Object.values(customerTiffinRecord);
  };

  const filteredCustomers = calculateCustomerTiffinRecord().filter(customer => {
    return customer.name && customer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Customer Tiffin Record for Current Month</h2>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by customer name" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="info-container">
        <ul>
          {filteredCustomers.map((record) => (
            <li key={record.name}>
              <div className="record-info">
                <p>Customer: {record.name}</p>
                <p>Total Tiffins: {60 - record.totalTiffins}</p>
                <p>Total Bill: RS {record.totalBill}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerTiffinRecord;

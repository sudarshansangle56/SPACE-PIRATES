import React, { useState, useEffect } from "react";
import { database, ref, onValue, remove } from "./firebase";
import '../CSS/UserInformation.css';
import AdminNavbar from "../Componet/AdminNavbar";
import Footer from "../Componet/Footer";

function UserInformation() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const usersRef = ref(database, "customers");
    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      if (users) {
        const userDataArray = Object.entries(users).map(([id, user]) => ({
          id,
          ...user,
        }));
        setUserData(userDataArray);
      }
    });
  };

  const handleRemoveUser = (userId) => {
    const userRef = ref(database, `custam_info/custam/${userId}`);
    remove(userRef)
      .then(() => {
        console.log("User removed successfully");
        // After removing the user, fetch the updated data
        fetchData();
      })
      .catch((error) => {
        console.error("Error removing user:", error);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="user-info-container">
      
        <h2>User Information</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveUser(user.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default UserInformation;

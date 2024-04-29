import React from 'react'
import AdminNavbar from '../Componet/AdminNavbar'
import Footer from '../Componet/Footer'
import TiffinManagementSystem from "../Componet/tiffin_rec";




function Admin() {
  return (
    <div>
      <AdminNavbar/>

      <div>
       <h3>Welcome to admin palnel</h3>
      </div>
      <div>
        <TiffinManagementSystem/>
        <new_custam/>
      
      </div>

      <Footer/>
    </div>
  )
}

export default Admin

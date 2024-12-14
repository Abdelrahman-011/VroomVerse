import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Booking from "../Booking/Booking.jsx";

export default function LayOut() {
  return (
    <>
      <Navbar />

      
        <Outlet />
     

      <Footer />
    </>
  );
}

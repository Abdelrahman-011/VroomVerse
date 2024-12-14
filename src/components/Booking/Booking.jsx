import React, { useState, useEffect } from "react";
import BookingPlans from "./BookingPlans/BookingPlans.jsx";
import BookingLanding from "./BookingLanding/BookingLanding.jsx";
import Featured from "../Featured/Featured.jsx";

export default function Booking() {
  

  return (<>
  <BookingLanding></BookingLanding>
  <div className="bg-black">
  <Featured></Featured>
  <BookingPlans></BookingPlans>
  

  </div>
  
  
  </>
   
  );
}

import React from "react";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function BookingLanding() {
  return (
    <>
      <header className="overflow-hidden bg-hero min-h-lvh">
        <div className="w-[85%] mx-auto mx-md:w-[95%] px-3 text-white mt-40 relative z-2 flex justify-between items-center max-lg:flex-col gap-10 max-lg:text-center">
          <div className="w-1/2 max-lg:w-full">
            <h1 className="text-[5rem] font-heading leading-none mb-8 font-semibold">
              Car Washing Online Booking 
              <p className="text-main">SERVICE.</p>
            </h1>
            <p className="mb-10 text-[1.1rem] w-[80%] max-lg:w-full">
            we are committed to providing your vehicle with the best care it deserves.
            Our expert team uses high-quality products and modern techniques to ensure that your car is spotless, inside and out.
            </p>
            <button className="bg-main  w-[18rem] rounded-lg">
              <NavLink to="/cart" className="py-5 block">
              START BOOKING
              </NavLink>
            </button>
          </div>

          <div className="flex flex-col gap-10 max-lg:flex-row">
            <a
              target="_blank"
              href=""
              className="w-9 h-9 rounded-full bg-white flex justify-center items-center"
            >
              <FaTwitter className="text-black text-[1.3rem]" />
            </a>
            <a
              target="_blank"
              href=""
              className="w-9 h-9 rounded-full bg-white flex justify-center items-center"
            >
              <FaFacebookF className="text-black bg-white text-[1.3rem]" />
            </a>
            <a
              target="_blank"
              href=""
              className="w-9 h-9 rounded-full bg-white flex justify-center items-center"
            >
              <FaInstagram className="text-black bg-white text-[1.3rem]" />
            </a>
            <a
              target="_blank"
              href=""
              className="w-9 h-9 rounded-full bg-white flex justify-center items-center"
            >
              <FaLinkedinIn className="text-black bg-white text-[1.3rem]" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

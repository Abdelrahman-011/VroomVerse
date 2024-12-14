import React from "react";
import Logo from '../../assets/images/undraw_not_found_60pq.png';

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <img src={Logo} alt="Page Not Found" className="w-1/3 max-w-xs" />
        <h1 className="text-2xl font-semibold mt-4 text-gray-700">
          Page Not Found
        </h1>
      </div>
    </>
  );
}

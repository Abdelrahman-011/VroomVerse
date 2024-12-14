import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let users = [];

  let navigate = useNavigate();
  users = JSON.parse(localStorage.getItem("Users"));

 

  function handleSubmit(e) {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Save the current user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("isLogged", "true");

      
      navigate("/home");
    } else {
    
      alert("Invalid email or password. Please try again.");
    }
  }

  return (
    <>
      <section className="bg-hero min-h-lvh relative text-white ps-[3rem] max-lg:ps-0 ">
        <div className="z-3 relative w-[8rem] py-7 max-lg:ps-[3rem]">

        </div>

        <div className="flex justify-center">
          <div className="z-3 relative w-1/2 max-lg:w-[90%]">
            <div className="mb-10 text-center">
              <h1 className="text-[5rem] font-heading">Sign In</h1>
              <p className="text-[1.6rem]">Enter your credentials below.</p>
            </div>
            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem]" htmlFor="name">
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 px-2 rounded-md bg-transparent border-[0.1rem] focus:border-[#FF013E] focus:outline-none border-white "
                  placeholder="Enter Your email..."
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem]" htmlFor="name">
                  Password
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-3 px-2 rounded-md bg-transparent border-[0.1rem] focus:border-[#FF013E] focus:outline-none border-white "
                  placeholder="Enter Your password..."
                  type="password"
                  required
                />
              </div>
              <button type="button" onClick={handleSubmit} className="bg-main py-3 rounded-md mt-2">Sign in</button>
            </form>
            <div>
              <p className="mt-3 text-[1.15rem]">
                Don’t have an account?
                <Link to="/signup" className="text-main font-semibold ms-2">
                  Sign Up
                </Link>
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import dryCleaning from "../../../assets/images/dryCleaning.jpg";
export default function DryCleaning() {
  return (
    <>
      <section className="py-[5rem] text-white">
        <div className="w-[85%] mx-auto mx-md:w-[95%] flex justify-between items-center gap-16 max-lg:flex-col px-3">
          <div className="w-1/2 max-lg:w-full max-lg:order-2">
            <h2 className="text-[3rem] font-[900] w-[90%] mb-5 max-lg:text-[2.5rem]">
              Dry Cleaning Any Dirt Inside The Car.
            </h2>
            <p className="mb-5">
            Ensure your car’s interior is spotless with our professional dry cleaning service. We meticulously remove dust, dirt, and stains from every surface, leaving your vehicle looking and feeling brand new.
            </p>

            <p className="mb-9">
            Experience unparalleled cleanliness and attention to detail, making your car a comfortable and hygienic space.
            </p>

            <button className="py-3  w-[12rem] rounded-md border ">
              View More
            </button>
          </div>
          <div className="w-1/2 max-lg:w-full max-lg:order-1">
            <img className="rounded-xl" src={dryCleaning} alt="Car wash" />
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import registerImage from "../../../assets/images/register.jpg";
export default function ProfessionalWashing() {
  return (
    <section className="bg-black text-white  py-[5rem]">
      <div className="w-[85%] mx-auto mx-md:w-[95%] flex justify-between items-center gap-16 max-lg:flex-col px-3">
        <div className="w-1/2 max-lg:w-full max-lg:order-2">
          <h2 className="text-[3rem] font-[900] w-[90%] max-lg:text-[2rem] mb-5">
            Professional Washing And Cleaning.
          </h2>
          <p className="mb-5">
            Whether you’re looking for a quick wash, a full-service detailing,
            or a specialized treatment, we’ve got you covered. Our services
            include exterior washing, waxing, interior cleaning, engine
            cleaning, and more, all designed to keep your vehicle looking brand
            new.
          </p>

          <p className="mb-9">
            We pride ourselves on offering fast, efficient, and eco-friendly
            solutions, so you can drive away with a gleaming car every time.
            Book your appointment today and let us take care of the rest!
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-main py-2  rounded-md w-[12rem]">
              +91-0000-000000
            </button>
            <button className="py-2  w-[12rem] rounded-md border ">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-[90%] max-lg:order-1">
          <img className="" src={registerImage} alt="Car wash" />
        </div>
      </div>
    </section>
  );
}

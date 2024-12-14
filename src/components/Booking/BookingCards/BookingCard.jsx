// import React from "react";
// import { FiCheck } from "react-icons/fi";

// export default function BookingCard({
//   price,
//   billingCycle,
//   title,
//   features,
//   onSelect,
//   highlightColor,
//   buttonHoverBgColor 

// }) {
//   return (
//     <div className={`w-full max-w-xs p-4 bg-card-dark border border-gray-400 rounded-2xl shadow sm:p-8`}>
//       {/* Pricing Section */}
//       <div className={`flex items-baseline text-white`}>
//         <span className="text-3xl font-semibold me-1">$</span>
//         <span className="text-5xl font-extrabold tracking-tight">{price}</span>
//         <span className="ms-1 text-xl font-normal text-[#A5ADBB]">/{billingCycle}</span>
//       </div>

//       {/* Title Section */}
//       <h5 className={`my-4 pb-4 text-2xl font-bold ${highlightColor} border-b-2 border-gray-400`}>
//         {title}
//       </h5>

//       {/* Features List */}
//       <ul role="list" className="space-y-5 my-7">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-center">
//             <FiCheck
//               className={`text-xl ${feature.active ? "text-yellow-400" : "text-gray-300"}`}
//             />
//             <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
//               {feature.text}
//             </span>
//           </li>
//         ))}
//       </ul>

//       {/* Select Plan Button */}
//       <button
//         type="button"
//         onClick={onSelect}
//         className={`text-white bg-transparent border border-gray-400 ${buttonHoverBgColor} hover:text-black focus:ring-1 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}
//       >
//         Book plan
//       </button>
//     </div>
//   );
// }


























import React from "react";
import { FiCheck } from "react-icons/fi";

export default function BookingCard({
  price,
  billingCycle,
  title,
  features,
  onSelect,
  highlightColor,
  buttonHoverBgColor 

}) {
  return (
    <div className={`w-full max-w-xs p-4 bg-card-dark border border-gray-400 rounded-2xl shadow sm:p-8`}>
      {/* Pricing Section */}
      <div className={`flex items-baseline text-white`}>
        <span className="text-3xl font-semibold me-1">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ms-1 text-xl font-normal text-[#A5ADBB]">/{billingCycle}</span>
      </div>

      {/* Title Section */}
      <h5 className={`my-4 pb-4 text-2xl font-bold ${highlightColor} border-b-2 border-gray-400`}>
        {title}
      </h5>

      {/* Features List */}
      <ul role="list" className="space-y-5 my-7">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FiCheck
              className={`text-xl ${feature.active ? "text-yellow-400" : "text-gray-300"}`}
            />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Select Plan Button */}
      <button
        type="button"
        onClick={onSelect}
        className={`text-white bg-transparent border border-gray-400 ${buttonHoverBgColor} hover:text-black focus:ring-1 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}
      >
        Book plan
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import Swal from 'sweetalert';

export default function Payment() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const cartKey = currentUser ? `cart_${currentUser.id}` : null;

  const { totalPrice } = JSON.parse(localStorage.getItem(cartKey));

  const [formValues, setFormValues] = useState({
    fullName: '',
    cardNumber: '',
    cardExpiration: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { fullName, cardNumber, cardExpiration, cvv } = formValues;
    if (fullName && cardNumber && cardExpiration && cvv) {
      // Show SweetAlert success message
      Swal({
        title: "Payment Successful",
        text: "Your payment has been processed successfully.",
        icon: "success",
        button: "OK"
      });
    } else {
      // Show an error message if fields are missing
      Swal({
        title: "Error",
        text: "Please fill all the required fields.",
        icon: "error",
        button: "Try Again"
      });
    }
  };

  return (
    <div className='overflow-hidden'>
      <section className="py-8 antialiased bg-black pt-32 ">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl border-[0.5px] rounded-2xl bg-card-dark p-10 border-gray-400">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Payment</h2>
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <form onSubmit={handleSubmit} className="w-full rounded-lg border border-gray-200 p-4 shadow-sm dark:border-gray-700 bg-card-dark sm:p-6 lg:max-w-xl lg:p-8">
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-white">Full name (as displayed on card)*</label>
                    <input
                      type="text"
                      id="fullName"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="Bonnie Green"
                      value={formValues.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="cardNumber" className="mb-2 block text-sm font-medium text-white">Card number*</label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      value={formValues.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardExpiration" className="mb-2 block text-sm font-medium text-white">Card expiration*</label>
                    <input
                      type="text"
                      id="cardExpiration"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="MM/YY"
                      value={formValues.cardExpiration}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="mb-2 block text-sm font-medium text-white">CVV*</label>
                    <input
                      type="number"
                      id="cvv"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="•••"
                      value={formValues.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-gray-500 hover:bg-gray-500"
                >
                  Pay now
                </button>
              </form>
              {/* Total Summary */}
              <div className="mt-6 grow sm:mt-8 lg:mt-0">
                <div className="space-y-4 rounded-lg border p-6 border-gray-700 bg-card-dark">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">Original price</dt>
                      <dd className="text-base font-medium text-white">{totalPrice}$</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-white">{(totalPrice * 0.05).toFixed(2)} $</dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-white">Total</dt>
                    <dd className="text-base font-bold text-white">{(totalPrice * 1.05).toFixed(2)} $</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

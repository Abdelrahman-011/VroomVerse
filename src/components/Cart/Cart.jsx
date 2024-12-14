import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0, 
  });


  const currentUser = JSON.parse(localStorage.getItem("currentUser")); 
  const cartKey = currentUser ? `cart_${currentUser.id}` : `NONE`;

  // Load the cart data
  useEffect(() => {
    const storedCart = localStorage.getItem(cartKey);
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart); // Set the cart including items and totalPrice
    }
  }, [cartKey]);

  // Update item quantity and recalculate total price
  const updateQuantity = (itemTitle, newQuantity) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items
        .map((item) =>
          item.title === itemTitle ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0); // Ensure no items with quantity 0 remain

      const newTotalPrice = updatedItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      const updatedCart = {
        ...prevCart,
        items: updatedItems,
        totalPrice: newTotalPrice,
      };

      localStorage.setItem(cartKey, JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  // Remove item from the cart
  const removeItem = (itemTitle) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.title !== itemTitle);

      const newTotalPrice = updatedItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      const updatedCart = {
        ...prevCart,
        items: updatedItems,
        totalPrice: newTotalPrice,
      };

      localStorage.setItem(cartKey, JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div>
      <section className="bg-black py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-white sm:text-2xl mt-5">Shopping Cart</h2>

          {
            cart.items?<div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {
                cart.items.map((item) => (
                  <CartItem
                    key={item.title}
                    id={item.title}
                    price={item.price}
                    title={item.title}
                    quantity={item.quantity}
                    onRemove={removeItem}
                    onQuantityChange={updateQuantity}
                  />
                ))
            
              }
              </div>
            </div>

             {/* *******************************order summary************************** */}
             <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-card-dark p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">
                        Total price
                      </dt>
                      <dd className="text-base font-medium text-white">
                        {cart.totalPrice}
                      </dd>
                    </dl>
                   
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-white">{(cart.totalPrice*0.05).toFixed(2)}</dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-white">Total</dt>
                    <dd className="text-base font-bold text-white">
                      {(cart.totalPrice + (cart.totalPrice*0.05)).toFixed(2)} $
                    </dd>
                  </dl>
                </div>
                <Link
                  to={"/payment"}
                  className="flex w-full items-center justify-center rounded-lg border border-gray-50 px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-primary-300 bg-card-dark hover:bg-gray-700 focus:ring-gray-500"
                >
                  Proceed to Checkout
                </Link>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    to={"/booking"}
                    
                    className="inline-flex items-center gap-2 text-sm font-medium  underline hover:no-underline text-white"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          :<div className="h-screen flex text-4xl  text-red-500 font-semibold justify-center  items-center">
            <h4>Shopping is Empty!</h4>
          </div>
          }
          
        </div>
      </section>
    </div>
  );
}
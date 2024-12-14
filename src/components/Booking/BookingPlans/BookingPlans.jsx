import React, { useState, useEffect } from "react";
import BookingCard from "../BookingCards/BookingCard"


export default function Booking() {
  const plans = [
    {
      price: "39",
      billingCycle: "month",
      title: "Exterior Wash",
      features: [
        { text: "Basic exterior cleaning", active: true },
        { text: "Tire shine application", active: false },
        { text: "Window cleaning (inside & outside)", active: false },
        { text: "Deep interior vacuuming", active: false },
        { text: "Dashboard wipe & detailing", active: false },
        { text: "Carpet shampooing", active: false },
        { text: "Factory finish guarantee", active: false },
      ],
      highlightColor: "text-yellow-400",
      buttonHoverBgColor: "hover:bg-yellow-400",
    },
    {
      price: "55",
      billingCycle: "month",
      title: "Complete Wash",
      features: [
        { text: "Basic exterior cleaning", active: true },
        { text: "Tire shine application", active: true },
        { text: "Window cleaning (inside & outside)", active: true },
        { text: "Deep interior vacuuming", active: false },
        { text: "Dashboard wipe & detailing", active: false },
        { text: "Carpet shampooing", active: false },
        { text: "Factory finish guarantee", active: false },
      ],
      highlightColor: "text-blue-400",
      buttonHoverBgColor: "hover:bg-blue-400",
    },
    {
      price: "99",
      billingCycle: "month",
      title: "Full Detailing",
      features: [
        { text: "Basic exterior cleaning", active: true },

        { text: "Tire shine application", active: true },
        { text: "Window cleaning (inside & outside)", active: true },
        { text: "Deep interior vacuuming", active: true },
        { text: "Dashboard wipe & detailing", active: true },
        { text: "Carpet shampooing", active: false },
        { text: "Factory finish guarantee", active: false },
      ],
      highlightColor: "text-green-400",
      buttonHoverBgColor: "hover:bg-green-400",
    },
    {
      price: "130",
      billingCycle: "month",
      title: "Factory Reset",
      features: [
        { text: "Basic exterior cleaning", active: true },
        { text: "Tire shine application", active: true },
        { text: "Window cleaning (inside & outside)", active: true },
        { text: "Deep interior vacuuming", active: true },
        { text: "Dashboard wipe & detailing", active: true },
        { text: "Carpet shampooing", active: true },
        { text: "Factory finish guarantee", active: true },
      ],
      highlightColor: "text-green-500",
      buttonHoverBgColor: "hover:bg-green-500",
    },
  ];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const cartKey = currentUser ? `cart_${currentUser.id}` : null;

  if (!cartKey) {
    console.error("No valid user. Unable to manage the cart.");
  }

  const loadCart = () => {
    try {
      const storedCart = JSON.parse(localStorage.getItem(cartKey));
      return (
        storedCart || {
          items: [],
          totalPrice: 0,
        }
      );
    } catch (error) {
      console.error("Error loading cart data:", error);
      return {
        items: [],
        totalPrice: 0,
      };
    }
  };

  const saveCart = (cart) => {
    try {
      localStorage.setItem(cartKey, JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };

  const clearCart = () => {
    try {
      localStorage.removeItem(cartKey);
    } catch (error) {
      console.error("Error clearing cart data:", error);
    }
  };

  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
  });

  useEffect(() => {
    setCart(loadCart());
  }, []);

  const handleSelect = (plan) => {
    const currentCart = loadCart();
    const updatedCart = { ...currentCart };

    const existingPlanIndex = updatedCart.items.findIndex(
      (item) => item.title === plan.title
    );

    if (existingPlanIndex !== -1) {
      updatedCart.items[existingPlanIndex].quantity += 1;
    } else {
      updatedCart.items.push({ ...plan, quantity: 1 });
    }

    // Recalculate totalPrice
    updatedCart.totalPrice = updatedCart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCart(updatedCart);
    saveCart(updatedCart);
    
  };

  return (
    <section className="py-12">
      <div className="flex flex-wrap items-center justify-center gap-6 bg-black py-8">
        {plans.map((plan, index) => (
          <BookingCard
            key={index}
            price={plan.price}
            billingCycle={plan.billingCycle}
            title={plan.title}
            features={plan.features}
            highlightColor={plan.highlightColor}
            buttonHoverBgColor={plan.buttonHoverBgColor}
            onSelect={() => handleSelect(plan)}
          />
        ))}
      </div>
  
    </section>
  );
}
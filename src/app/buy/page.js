"use client";

import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b1cb2927-9cc9-4d84-8d30-8da9e1cdeaa8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Order Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="bg-blue-600 py-4 px-8">
          <h2 className="text-white text-2xl font-bold text-center">
            Product Order Form
          </h2>
        </div>

        <form onSubmit={onSubmit} className="p-8 space-y-6">
          <div>
            <label
              htmlFor="product"
              className="block text-sm font-medium text-blue-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="product"
              id="product"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-700"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-700"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-blue-700"
            >
              Home Address
            </label>
            <textarea
              name="address"
              id="address"
              rows="3"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your complete delivery address"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-blue-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-blue-800 font-semibold mb-2">
              Cash on Delivery
            </h3>
            <p className="text-blue-700 text-sm">
              We offer cash on delivery for all orders. Payment will be
              collected when your order is delivered. Please have the exact
              amount ready for our delivery personnel.
            </p>
            <p className="text-blue-700 text-sm mt-2">
              Delivery charges may apply depending on your location. Our team
              will contact you to confirm the order and delivery details.
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Place Order
            </button>
          </div>

          <div
            className={`text-center py-2 ${
              result.includes("Successfully")
                ? "text-green-600"
                : "text-blue-600"
            } font-medium`}
          >
            {result}
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { Caveat } from 'next/font/google';
import Navbar from "@/components/main/navbar";

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const ShoppingCart = () => {
  return (
    <div>
      <Navbar/>
      <div className="p-8 px-12 transform scale-[0.95]">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {/* Left Section - Shopping Cart Items */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-10"><span className={caveat.className}>Shopping Cart</span></h1>
          <div className="space-y-6">
            {/* Item */}
            {[
              {
                name: "PC system All in One APPLE iMac (2023)",
                details: "Apple M3, 24\" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT",
                price: "$499",
                quantity: 2,
                src:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/studio-display-gallery-1-202203?wid=640&hei=528&fmt=p-jpg&qlt=95&.v=1675709041796"
              },
              {
                name: "Restored Apple Watch Series 8 (GPS)",
                details: "41mm Midnight Aluminum Case with Midnight Sport Band",
                price: "$598",
                quantity: 1,
                src:"https://m.media-amazon.com/images/I/81kq5wkaqAL._SX679_.jpg"
              },
              {
                name: "Apple - MacBook Pro 16\" Laptop",
                details: "M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black",
                price: "$799",
                quantity: 1,
                src:"https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg"
              },
              {
                name: "Tablet APPLE iPad Pro 12.9\" 6th Gen",
                details: "128GB, Wi-Fi, Gold",
                price: "$699",
                quantity: 1,
                src:"https://m.media-amazon.com/images/I/41-OWI9h3mL._SY445_SX342_QL70_FMwebp_.jpg"
              },
              {
                name: "APPLE iPhone 15 5G phone",
                details: "256GB, Gold",
                price: "$997",
                quantity: 3,
                src:"https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg"
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-start space-x-4 w-2/3">
                  {/* Placeholder Image */}
                  <div className="w-16 h-16 bg-gray-300 rounded">
                    <img src={item.src} alt="hi" className="object-fill" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 w-1/3 justify-end">
                  <div className="flex items-center border rounded">
                    <button className="px-2 py-1">-</button>
                    <span className="px-3">{item.quantity}</span>
                    <button className="px-2 py-1">+</button>
                  </div>
                  <p className="font-bold pl-4">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg mt-10">
          <h2 className="text-3xl font-bold mb-4"><span className={caveat.className}>Order Summary</span></h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Original price</p>
              <p>$7,592.00</p>
            </div>
            <div className="flex justify-between">
              <p>Savings</p>
              <p className="text-green-500">-$299.00</p>
            </div>
            <div className="flex justify-between">
              <p>Store Pickup</p>
              <p>$99</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>$799</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>$8,191.00</p>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6">
            Proceed to Checkout
          </button>
          <button className="w-full bg-transparent text-blue-600 py-3 rounded-lg mt-3 border border-blue-600">
            Continue Shopping
          </button>
          <div className="mt-6">
            <p className="text-sm">Do you have a voucher or gift card?</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3">
              Apply Code
            </button>
          </div>
        </div>
      </div>
      </div>  
    </div>
  );
};

export default ShoppingCart;
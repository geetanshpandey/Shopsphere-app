"use client";
import { useState } from "react";
import Navbar from "@/components/main/navbar";

const ProductSection = () => {
  const [mainImage, setMainImage] = useState(
    "https://m.media-amazon.com/images/I/81kq5wkaqAL._SX679_.jpg"
  );

  const productImages = [
    "https://m.media-amazon.com/images/I/81kq5wkaqAL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71uRfemJCPL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81N5w-gsasL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71m7Ci1MCxL._SX679_.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 transform scale-95">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Product Image */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full dark:hidden h-[75%]"
              src={mainImage}
              alt="Product"
            />
            <img
              className="w-full hidden dark:block"
              src={mainImage.replace(
                "imac-front.svg",
                "imac-front-dark.svg"
              )}
              alt="Product"
            />

            {/* Small Product Images */}
            <div className="flex mt-4 space-x-2 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className="border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
            Apple Watch Series 10 [GPS + Cellular 46 mm] Smartwatch
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                $600.99
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {/* Star Ratings */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  (5.0)
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  345 Reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Add to favorites
              </a>
              <a
                href="#"
                className="text-white mt-4 sm:mt-0 bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
              >
                Add to cart
              </a>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            {/* Color and SSD Capacity Options */}
            <div className="flex grid sm:grid-cols-2 grid-cols-1 gap-8 justify-between md:space-x-6">
              <div>
                <h3 className="text-lg font-medium dark:text-white">Colour</h3>
                <div className="flex gap-2 mt-2">
                  {["Green", "Pink", "Silver", "Blue"].map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border rounded-lg border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 dark:text-white"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium dark:text-white">Apple Security</h3>
                <div className="flex gap-2 mt-2">
                  {["1 year", "1+1 year", "1+2 year"].map((size) => (
                    <button
                      key={size}
                      className="px-2 py-2 border rounded-lg border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 dark:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2 justify-between md:space-x-6">
              {/* Pickup Options */}
            <div className="mt-6">
              <h3 className="text-lg font-medium dark:text-white">Pickup</h3>
              <div className="flex flex-col gap-2 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="pickup" className="w-4 h-4" />
                  <span className="dark:text-white">Shipping - $19</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="pickup" className="w-4 h-4" />
                  <span className="dark:text-white">Pickup from Flowbox - $9</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="pickup" className="w-4 h-4" disabled />
                  <span className="text-gray-500 dark:text-gray-600">
                    Pickup from our store (Not available)
                  </span>
                </label>
              </div>
            </div>
            {/* Warranty Options */}
            <div className="mt-6">
              <h3 className="text-lg font-medium dark:text-white">Add extra warranty</h3>
              <div className="flex flex-col gap-2 mt-2">
                {["1 year - $39", "2 years - $69", "3 years - $991"].map(
                  (warranty) => (
                    <label key={warranty} className="flex items-center gap-2">
                      <input type="radio" name="warranty" className="w-4 h-4" />
                      <span className="dark:text-white">{warranty}</span>
                    </label>
                  )
                )}
              </div>
            </div>
            </div>
          {/* sdfdf */}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProductSection;

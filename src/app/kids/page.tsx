"use client";

import React from "react";
import Navbar from "@/components/main/navbar";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const FeaturedSection = () => {
  // Sample data for featured items
  const featuredItems = [
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 1",
      title: "Product 1",
      Cost: "$49.99",
    },
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 2",
      title: "Product 2",
      Cost: "$59.99",
    },
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 3",
      title: "Product 3",
      Cost: "$69.99",
    },
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 4",
      title: "Product 4",
      Cost: "$79.99",
    },
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 4",
      title: "Product 4",
      Cost: "$79.99",
    },
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 4",
      title: "Product 4",
      Cost: "$79.99",
    },
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 4",
      title: "Product 4",
      Cost: "$79.99",
    },
    {
      link: "#",
      image: "https://via.placeholder.com/150",
      alt: "Product 4",
      title: "Product 4",
      Cost: "$79.99",
    },
  ];

  return (
    <div>
      <Navbar/>
    <section className="container mx-auto mt-8">
      <h2 className="md:text-5xl text-3xl font-bold text-center">
        <span className={caveat.className}>Kids category</span>
      </h2>
      <div className="origin-top ">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-y-10 gap-x-12 transform scale-[0.93]">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-4 space-y-2"
            >
              <a href={item.link}>
                <img
                  className="p-8 rounded-t-lg text-center md:ml-4"
                  src={item.image}
                  alt={item.alt}
                />
              </a>
              <div className="px-5 pb-5">
                <a href={item.link}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(4)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {item.Cost}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FeaturedSection;

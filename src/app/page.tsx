import { ChevronDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CategoryCard from "@/components/main/category"; // Import the CategoryCard component
import { Laptop, Watch, Tablet, Headphones } from "lucide-react";
import LimitedOfferSection from "@/components/main/hero";
import Image from "next/image";
import { Caveat } from "next/font/google";
import Navbar from "@/components/main/navbar";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const featuredItems = [
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 1",
    title: "Featured Content 1",
    Cost: "600$",
    link: "/product/[id]"
  },
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 2",
    title: "Featured Content 2",
    Cost: "200$",
    link: "/product/[id]"
  },
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 2",
    title: "Featured Content 2",
    Cost: "800$",
    link: "/product/[id]"
  },
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 2",
    title: "Featured Content 2",
    Cost: "800$",
    link: "/product/[id]"
  },
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 2",
    title: "Featured Content 2",
    Cost: "800$",
    link: "/product/[id]"
  },
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 2",
    title: "Featured Content 2",
    Cost: "800$",
    link: "/product/[id]"
  },
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 2",
    title: "Featured Content 2",
    Cost: "800$",
    link: "/product/[id]"
  },
  {
    image: "/images/applewatch.jpeg",
    alt: "Featured 2",
    title: "Featured Content 2",
    Cost: "800$",
    link: "/product/[id]"
  }
  
  // Add more items here as needed
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="relative w-full h-[350px] z-0">
        {/* Image */}
        <Image
          src="/images/background.jpg" // Replace with the actual path to your image
          alt="Exclusive Deals Banner"
          fill
          className="object-cover h-full opacity-[0.4]"
          priority
        />

        {/* Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>

        {/* Content (Optional, if needed) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-center text-gray-800 mt-12"><span className={`${caveat.className}`}>Dont miss out exclusive deals on Shop<span className="text-blue-600">sphere</span></span></h1>
          <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
            Shop Now
          </button>
        </div>
      </div>
      <section className="container mx-auto px-4 mt-20 flex flex-col lg:flex-row gap-4">
        {/* Category Section */}
        <div className="flex-1 justify-center bg-transparent items-center text-center rounded-lg p-4 max-w-md mx-auto">
          {/* Dropdown Menu */}
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center space-x-2 bg-gray-100">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-100">
                <DropdownMenuItem className="bg-100">Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
                <DropdownMenuItem>Option 4</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Category Card */}
          <div className="grid place-items-center mt-4">
            <CategoryCard /> {/* Use the CategoryCard component */}
          </div>
        </div>
        {/* Suggested Section */}
        <div className="flex-1 bg-white shadow-lg rounded-lg bg-indigo-50 p-4 h-[auto] flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          {/* Text Content on Left */}
          <div className="flex-1 flex flex-col px-4 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Don’t miss out on exclusive deals.
              </h2>
              <p className="text-lg mb-4">
                Unlock even more exclusive member deals when you become a Flowbite Plus or Diamond member.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 ">Shop Now</Button>
                <Button variant="outline" className="text-blue-600">
                  Learn more &rarr;
                </Button>
              </div>
            </div>
            <div className="md:ml-0 shadow-lg rounded-lg p-4 max-w-xs mx-auto bg-gray-100">
              <h2 className="text-xl font-bold mb-4 mt-2">Shop consumer electronics</h2>

              {/* Grid Layout for Categories */}
              <div className="grid grid-cols-2 gap-y-1">
                {/* Category 1: Laptops */}
                <div className="flex flex-col items-center">
                  <Laptop className="w-12 h-12 text-gray-700 mb-2" />
                  <span className="text-sm font-semibold">Laptops</span>
                </div>

                {/* Category 2: Watches */}
                <div className="flex flex-col items-center">
                  <Watch className="w-12 h-12 text-gray-700 mb-2" />
                  <span className="text-sm font-semibold">Watches</span>
                </div>

                {/* Category 3: Tablets */}
                <div className="flex flex-col items-center">
                  <Tablet className="w-12 h-12 text-gray-700 mb-2" />
                  <span className="text-sm font-semibold">Tablets</span>
                </div>

                {/* Category 4: Accessories */}
                <div className="flex flex-col items-center">
                  <Headphones className="w-12 h-12 text-gray-700 mb-2" />
                  <span className="text-sm font-semibold">Accessories</span>
                </div>
              </div>

              {/* Shop Now Button */}
              <div className="mt-4 flex justify-center">
                <Button className="bg-blue-600 text-white w-full hover:bg-blue-700 ">Shop now &rarr;</Button>
              </div>
            </div>
          </div>

          {/* Suggested Items (Images) on Right */}
          <div className="flex-1 flex flex-col space-y-4">
            {/* Suggested Item 1 */}
            <div className="flex flex-col items-center mt-6 mb-4">
              <a href="#">
                <img
                  className="rounded-lg h-40 w-full object-cover bg-black"
                  src="/images/applewatch.jpeg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
                </a>
              </div>
            </div>

            {/* Suggested Item 2 */}
            <div className="flex flex-col items-center mt-8">
              <a href="#">
                <img
                  className="rounded-lg h-40 w-full object-cover bg-black"
                  src="/images/applewatch.jpeg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-8">
        <h2 className="md:text-4xl text-3xl font-bold mb-4 text-center"><span className={`${caveat.className}`}>Featured</span></h2>
        {/* Apply scaling to the entire component */}
        <div className="transform scale-[0.85] origin-top"> {/* Reduce size to 0.75x */}
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 gap-x-8">
            {featuredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 space-y-2"
              >
                <a href={item.link}>
                  <img
                    className="p-8 rounded-t-lg"
                    src={item.image}
                    alt={item.alt}
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(4)].map((_, index) => (
                        <svg
                          key={index}
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

export default HomePage;

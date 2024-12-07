"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // shadcn Card components
import { Plus } from "lucide-react";
import { Home, FileText, LogOut } from "lucide-react";
import Link from "next/link";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import { Skeleton } from "@/components/ui/skeleton";
import BarChart from "@/components/main/chart/barchart";
import Navbar from "@/components/main/navbar";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const DashboardLayout: React.FC = () => {
  const [recentItems, setRecentItems] = useState(["Item 1", "Item 2"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to add a new recent item
  const addRecentItem = () => {
    setRecentItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div>
      <Navbar/>
    <div className="flex flex-col md:flex-row h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 ml-4">
          <h1 className="text-4xl font-bold sm:ml-1 ml-16">
            <span className={`${caveat.className}`}>
              <span className="text-blue-700">Dashboard</span>
            </span>
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 4</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full bg-blue-50" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                  <Skeleton className="h-4 w-[100px] bg-blue-50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-6 -mt-1">
          {/* Bar Chart Section */}
          <div className="flex-1 justify-center text-center bg-white shadow rounded-md p-4">
            <h2 className="text-2xl text-blue-600 font-semibold">
              <span className={`${caveat.className}`}>Bar Chart</span>
            </h2>
            {/* Placeholder for Bar Chart */}
            <div className="md:ml-28 mt-2 h-[250px] rounded-md w-full">
              <BarChart />
            </div>
          </div>

          {/* Recent Section */}
          <div className="w-full md:w-[40%] h-[325px] bg-white shadow rounded-md p-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-blue-600 font-semibold">
                <span className={`${caveat.className}`}>Recent</span>
              </h2>
              {/* Plus Button */}
              <button
                onClick={addRecentItem}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
              >
                <Plus size={16} />
              </button>
            </div>
            {/* Scrollable Recent Items */}
            <div className="space-y-4 overflow-y-auto h-[270px] -mt-2">
              {recentItems.map((item, index) => (
                <div key={index} className="p-2 bg-blue-50 rounded-md">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
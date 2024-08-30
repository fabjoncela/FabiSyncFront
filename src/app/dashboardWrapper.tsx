"use client";

import React, { useEffect } from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, { useAppSelector } from './redux';

//connecting next js application with redux:



//the page layout;  here we add items to the main page
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  //this grabs the state when sidebar collapsed or not / darkmode
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
      const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

      //we add this in here cuz we cant make the layout tsx a client component, so we have to add the class in here and not in the html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.add("light");
    }
  })


  return( 
  <div className={` ${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
    <Sidebar />
    <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24":"md:pl-72"}`}>
    <Navbar />
      {children}
      </main>
  </div>
  );
};



//we wrap the entire application with redux
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;


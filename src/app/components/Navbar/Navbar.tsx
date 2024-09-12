"use client"; // Ensure this line is at the very top of the file

import Image from "next/image";
import { useState } from "react";
import { PopoverGroup } from "@headlessui/react"; // Ensure this is used correctly
import { Bars3Icon } from "@heroicons/react/24/outline"; // Ensure Heroicons is installed
import { NavbarProps } from "@/app/types"; // Import the NavbarProps type
import { navigationData } from "@/app/types/data"; // Import the navigation data
import Sidebar from "../Sidebar/Sidebar";

const Navbar: React.FC<NavbarProps> = ({ openDialog }) => {
  const [open, setOpen] = useState(false); // Client-side state management

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Sidebar open={open} setOpen={setOpen} navigation={navigationData} />

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    alt="Logo"
                    src="/assets/images/Logo.png"
                    width={60}
                    height={60}
                    className="h-[40px] w-[60px]"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigationData.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-[#0A316C] hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    onClick={() => openDialog(0)}
                  >
                    Login
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => openDialog(1)}
                  >
                    Join Now
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="/"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <Image
                      alt="Canada Flag"
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      width={20}
                      height={15}
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

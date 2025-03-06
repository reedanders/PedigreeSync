"use client";
import Link from "next/link";
import ThemeChanger from "@/components/ui/Button/DarkSwitch";

import { LambIcon } from "@/components/ui/Icon/LambIcon";

export const Navbar = () => {
  const navigation: any[] = [];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-[#4E4E4E] dark:text-white">
              <span>
                <LambIcon />
              </span>
            <span>PedigreeSync</span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/login" className="px-6 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md md:ml-5">
                Get Started
              </Link>
            </div>
        </div>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

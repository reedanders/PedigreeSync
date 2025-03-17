'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from '@/lib/contexts/AuthContext';
import ThemeChanger from "@/components/ui/Button/DarkSwitch";
import { LambIcon } from "@/components/ui/Icon/LambIcon";

export const Navbar = () => {
  const { user, isLoading, signOut, refreshSession } = useAuth();
  const isLoggedIn = !!user;
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Handle client-side components
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Refresh auth status when navigating between pages
  useEffect(() => {
    if (mounted) {
      refreshSession();
    }
  }, [pathname, refreshSession, mounted]);
  
  const navigation = [
    { label: "About EBVs", href: "/about-ebvs" },
    { label: "Roadmap", href: "/roadmap" }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-[#4E4E4E] dark:text-white">
              <span>
                {mounted && <LambIcon />}
              </span>
            <span>PedigreeSync</span>
          </span>
        </Link>

        {/* menu  */}
        {!isLoggedIn && (<div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href || "#"} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>)}

        {/* Auth/Theme Controls */}
        <div className="flex items-center gap-3 nav__item mr-2 lg:order-2">
          {mounted && <ThemeChanger />}
          
          <div className="h-[42px] flex items-center">
            {mounted && !isLoading && (
              isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <Link 
                    href="/dashboard" 
                    className="px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={signOut}
                    className="px-4 py-2 text-lg font-normal text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-lg font-normal text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2 text-lg font-normal text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Sign up
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
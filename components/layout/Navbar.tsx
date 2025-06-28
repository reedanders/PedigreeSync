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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
  
  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  
  const navigation = [
    { label: "Roadmap", href: "/roadmap" }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center p-6 mx-auto lg:px-8">
        {/* Logo */}
        <div className="flex-none lg:w-1/4">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-[#4E4E4E] dark:text-white">
              <span>{mounted && <LambIcon />}</span>
              <span>PedigreeSync</span>
            </span>
          </Link>
        </div>

        {/* Theme toggle + hamburger (mobile only) */}
        <div className="flex items-center ml-auto lg:hidden">
          {mounted && <ThemeChanger />}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-3 p-2 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex items-center justify-center relative">
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Desktop navigation - centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:space-x-4">
          {!isLoggedIn && navigation.map((item, index) => (
            <Link 
              key={index}
              href={item.href} 
              className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Auth controls and theme toggle */}
        <div className="hidden lg:flex lg:items-center lg:w-1/4 lg:justify-end lg:space-x-4">
          {mounted && !isLoading && isLoggedIn && (
            <>
              <Link 
                href="/manage" 
                className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Dashboard
              </Link>
              <button
                onClick={signOut}
                className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md"
              >
                Log Out
              </button>
            </>
          )}
          
          {mounted && !isLoading && !isLoggedIn && (
            <>
              <Link 
                href="/login" 
                className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md"
              >
                Sign Up
              </Link>
            </>
          )}
          
          <div>
            {mounted && <ThemeChanger />}
          </div>
        </div>
      </nav>
      
      {/* Mobile menu dropdown remains unchanged */}
      {mobileMenuOpen && (
        <div className="lg:hidden container mx-auto px-6 pb-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            {!isLoggedIn && (
              <div className="space-y-1 mb-4">
                {navigation.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href} 
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            
            {mounted && !isLoading && isLoggedIn && (
              <div className="space-y-2">
                <Link 
                  href="/manage" 
                  className="block w-full text-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  Dashboard
                </Link>
                <button
                  onClick={signOut}
                  className="block w-full text-center px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md"
                >
                  Log Out
                </button>
              </div>
            )}
            
            {mounted && !isLoading && !isLoggedIn && (
              <div className="space-y-2">
                <Link 
                  href="/login" 
                  className="block w-full text-center px-4 py-2 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  Log In
                </Link>
                <Link 
                  href="/signup" 
                  className="block w-full text-center px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

import darkDashboard from "@/public/images/dashboard_dark.png";
import lightDashboard from "@/public/images/dashboard_light.png";

export function DemoDashboard() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted || !theme) {
    return (
      <Container className="px-0 sm:px-4 md:px-6">
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden mb-4 lg:mb-20 rounded-2xl animate-pulse bg-gray-200 dark:bg-gray-700" />
      </Container>
    );
  }

  return (
    <Container className="px-0 sm:px-4 md:px-6">
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden mb-4 lg:mb-20 rounded-2xl">
        {/* The image itself */}
        <Image
          src={theme === 'dark' ? darkDashboard : lightDashboard}
          alt="PedigreeSync Dashboard"
          className="w-full h-auto rounded-2xl"
          priority
          placeholder="blur"
          height={1200}
        />
        
        {/* Gradient overlay that fades toward bottom */}
        <div 
          className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-gray-900 to-transparent rounded-b-2xl"
          aria-hidden="true"
        />
      </div>
    </Container>
  );
}
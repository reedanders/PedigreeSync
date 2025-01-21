"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Container } from "@/components/Container";

import darkDashboard from "@/public/images/dashboard_dark.png";
import lightDashboard from "@/public/images/dashboard_light.png";

export function DemoDashboard() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted || !theme) {
    return (
      <Container>
        <div className="relative w-full h-[300px] md:h-[600px] max-w-6xl mx-auto overflow-hidden mb-4 lg:mb-20 rounded-2xl animate-pulse bg-gray-200 dark:bg-gray-700" />
      </Container>
    );
  }

  return (
    <Container>
      <div className="relative w-full h-[300px] md:h-[600px] max-w-6xl mx-auto overflow-hidden mb-4 lg:mb-20 rounded-2xl">
        <Image
          src={theme === 'dark' ? darkDashboard : lightDashboard}
          alt="PedigreeSync Dashboard"
          fill
          className="object-cover md:object-contain object-left-top md:object-center"
          priority
          placeholder="blur"
        />
      </div>
    </Container>
  );
}
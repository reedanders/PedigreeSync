"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import darkLambIcon from "@/public/lamb-icon-dark.svg";
import lightLambIcon from "@/public/lamb-icon-light.svg";

export function LambIcon({ width = 32, height = 32 }) {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  
  // Only run on client side
  useEffect(() => setMounted(true), []);
  
  // Get the correct theme value
  const currentTheme = resolvedTheme || theme;
  
  // Return placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div 
        className="inline-block bg-transparent" 
        style={{ width, height }}
        aria-hidden="true"
      />
    );
  }
  
  // Show light icon for dark theme and vice versa
  return (
    <Image 
      src={currentTheme === 'dark' ? lightLambIcon : darkLambIcon}
      width={width}
      height={height}
      alt="Lamb icon"
    />
  );
}
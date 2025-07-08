"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import pedigreeSyncLogo from "@/public/images/pedigreesync_logo_green.png";

export function LambIcon({ width = 48, height = 48 }) {
  const [mounted, setMounted] = useState(false);
  
  // Only run on client side
  useEffect(() => setMounted(true), []);
  
  // Return placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div 
        className="inline-block bg-transparent rounded-lg" 
        style={{ width, height }}
        aria-hidden="true"
      />
    );
  }
  
  return (
    <Image 
      src={pedigreeSyncLogo}
      width={width}
      height={height}
      alt="PedigreeSync logo"
      className="rounded-lg"
    />
  );
}
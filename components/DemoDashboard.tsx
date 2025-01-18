"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

interface DemoDashboardProps {
  DemoDashboardId: string;
}

export function DemoDashboard({ DemoDashboardId }: Readonly<DemoDashboardProps>) {

  if (!DemoDashboardId) return null;

  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700">
        
      </div>
    </Container>
  );
}
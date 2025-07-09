import React from "react";
import { Partners } from "@/components/landing/Partners";

export const HeroBlurb = () => (
  <div className="w-full mt-12 px-4 sm:px-6 lg:px-0">
    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg px-6 py-8 md:px-10 md:py-10 shadow-lg">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Partners on the left */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <Partners />
        </div>
        
        {/* Content on the right */}
        <div className="w-full lg:w-2/3">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
            PedigreeSync is a farmer-led, open-source initiative to make livestock
            recordkeeping radically more accessible, affordable, and resilient.
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Our near-term goal is to test the viability of using NFC enabled ear tags
            scanned by iPhones as an alternative to proprietary RFID readers. In
            collaboration with sheep producers and extension advisors, we're pursuing
            a USDA SARE grant to begin field testing tags in{" "}
            <span className="font-semibold text-primary-700 dark:text-primary-400">
              Spring 2026
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

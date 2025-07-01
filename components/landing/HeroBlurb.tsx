import React from "react";

export const HeroBlurb = () => (
  <div className="w-full mt-12">
    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg px-6 py-8 shadow-lg text-center max-w-3xl mx-auto">
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium mb-4">
        PedigreeSync is a farmer-led, open-source initiative to make livestock recordkeeping radically more accessible, affordable, and resilient.
      </p>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
        Our near-term goal is to test the viability of using NFC enabled ear tags scanned by iPhones as an alternative to proprietary RFID readers. In collaboration with sheep producers and extension advisors, we're pursuing a USDA WSARE grant to begin field testing tags in <span className="font-semibold text-primary-700 dark:text-primary-400">Spring 2026</span>.
      </p>
    </div>
  </div>
);

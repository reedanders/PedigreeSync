import Image from "next/image";
import React from "react";

export const Partners = () => (
  <div className="w-full mt-12">
    <div className="px-2 sm:px-6 py-4">
      <h3 className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-semibold mb-6">
        In Collaboration With
      </h3>
      <div className="flex flex-col sm:flex-row items-start justify-start gap-12">
        <div className="flex flex-col items-center">
          <a
            href="https://www.instagram.com/rainbow_family_ranching/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded transition group"
            aria-label="Rainbow Family Ranch instagram"
          >
            <Image
              src="/images/rainbow_fam_tiny.jpg"
              alt="Rainbow Family Ranch"
              width={140}
              height={70}
              className="object-contain mb-2 transition-transform duration-200 group-hover:scale-105 group-focus:scale-105 group-active:scale-95"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://srhf.org"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded transition group"
            aria-label="San Ramon Historic Farms website"
          >
            <Image
              src="/images/fhf_tiny.png"
              alt="San Ramon Historic Farms"
              width={140}
              height={70}
              className="object-contain mb-2 transition-transform duration-200 group-hover:scale-105 group-focus:scale-105 group-active:scale-95"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

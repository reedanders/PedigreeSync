import Image from "next/image";
import { Container } from "@/components/layout/Container";
import heroImg from "@/public/images/sheep_ear_tag_tiny.png";

export const Hero = () => {
  return (
    <Container className="flex flex-wrap px-0 sm:px-4 md:px-6 py-16">
      <div className="flex items-center w-full lg:w-1/2 p-2 sm:p-4 lg:p-6">
        <div className="w-full mb-6 space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl dark:text-white">
            Scan Ear Tags with Just Your iPhone
          </h1>
          <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl dark:text-gray-300">
            Built for everyone in the field. An open-source animal welfare tool that empowers digital recordkeeping.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="/app"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-lg font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-all">
              Launch Demo
            </a>
            <a
              href="https://github.com/reedanders/pedigreesync"
              target="_blank"
              rel="noopener"
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors">
              View Source on GitHub
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2 px-2 sm:px-0">
        <div className="relative w-full max-w-xl">
          <Image
            src={heroImg}
            width={616}
            height={617}
            className="w-full object-cover rounded-xl shadow-xl"
            alt="Sheep in a pasture with NFC tag"
            priority
          />
        </div>
      </div>

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
    </Container>
  );
};

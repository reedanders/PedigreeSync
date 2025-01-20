import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "@/public/images/tanner-yould-nbklTnbXZ68-unsplash.jpg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
          <div className="max-w-2xl mb-8 space-y-4">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Fast, Convenient Sheep Pedigree Tracking
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              PedigreeSync is an unofficial web implementation PedigreeMaster, 
              designed to simplify data recording for the National 
              Sheep Improvement Program (NSIP).
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/register"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                Get Started
              </a>
              <a
                href="https://nsip.org/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600">
                Learn about NSIP
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={heroImg}
            alt="Sheep in field"
            className="rounded-lg"
            placeholder="blur"
          />
        </div>
      </Container>
    </>
  );
};
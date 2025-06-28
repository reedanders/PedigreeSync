"use client"

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { LambIcon } from '@/components/ui/Icon/LambIcon';

// GitHub repo link for the project
const githubLink = "https://github.com/reedanders/PedigreeSync";

export function Footer() {
  // Updated navigation links to match site architecture
  const navigation = [
    { label: "Roadmap", href: "/roadmap" }
  ];
  
  // Legal pages (could be implemented later)
  const legal = [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ];
  
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-[#4E4E4E] dark:text-gray-100"
              >
                <LambIcon />
                <span>PedigreeSync</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              An open-source, right-to-repair application for managing livestock records using NFC-enabled ear tags and mobile phones.
            </div>
            
          </div>

          <div>
            <h3 className="text-gray-700 dark:text-gray-200 font-medium mb-2">Navigation</h3>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-50 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-50 focus:outline-none dark:focus:bg-trueGray-700"
              >
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-gray-700 dark:text-gray-200 font-medium mb-2">Legal</h3>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-50 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h3 className="text-gray-700 dark:text-gray-200 font-medium mb-2">Connect</h3>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://twitter.com/sheepebvs" rel="noopener noreferrer" target="_blank">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a href={githubLink} rel="noopener noreferrer" target="_blank">
                <span className="sr-only">GitHub</span>
                <GitHub />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="https://github.com/reedanders"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-500"
          >
            Reed Anders
          </a>
        </div>
      </Container>
    </div>
  );
}

const Twitter = ({size = 24}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
  </svg>
);

const GitHub = ({size = 24}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.5.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
  </svg>
);


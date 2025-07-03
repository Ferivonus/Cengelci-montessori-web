"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import DarkSwitch from "./DarkSwitch";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Company", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Features", href: "#" },
  { name: "Team", href: "#" },
  { name: "Contact", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TopNavbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-700"
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-4 py-2.5 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="#" className="flex items-center">
                  <Image
                    src="/images/logo.svg"
                    alt="Landwind Logo"
                    width={36}
                    height={36}
                    className="h-6 mr-3 sm:h-9"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Landwind
                  </span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-purple-700"
                        : "text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Download Button, Dark Switch & Mobile Toggle */}
              <div className="flex items-center lg:order-2 ml-auto">
                {/* Desktop Download Button */}
                <div className="hidden lg:block">
                  <a
                    href="https://themesberg.com/product/tailwind-css/landing-page"
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                  >
                    Download
                  </a>
                </div>

                {/* Dark Mode Switch */}
                <div className="ml-4">
                  <DarkSwitch />
                </div>

                {/* Mobile Toggle Button */}
                <div className="lg:hidden ml-2">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-2 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg
                        className="block h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1z"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-purple-700 text-white"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Download Button */}
              <a
                href="https://themesberg.com/product/tailwind-css/landing-page"
                className="block w-full text-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 mt-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Download
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

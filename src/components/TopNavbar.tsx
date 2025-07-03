"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DarkSwitch from "./DarkSwitch";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Features", href: "/features" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TopNavbar() {
  const pathname = usePathname();

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
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/cengelci-logo.svg"
                    alt="Cengelci Logo"
                    width={36}
                    height={36}
                    className="h-6 mr-3 sm:h-9"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Cengelci
                  </span>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-8">
                {navigation.map((item) => {
                  const isCurrent = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        isCurrent
                          ? "text-purple-700"
                          : "text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Right actions: Download + Switch + Mobile Toggle */}
              <div className="flex items-center lg:order-2 ml-auto space-x-2">
                {/* Download Button */}
                <a
                  href="https://themesberg.com/product/tailwind-css/landing-page"
                  className="hidden lg:inline-block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >
                  Download
                </a>

                {/* Theme Switch */}
                <DarkSwitch />

                {/* Mobile Toggle */}
                <div className="lg:hidden ml-2">
                  <DisclosureButton
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  >
                    {open ? (
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      isCurrent
                        ? "bg-purple-700 text-white"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Download Button */}
              <a
                href="https://themesberg.com/product/tailwind-css/landing-page"
                className="block w-full text-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 mt-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Download
              </a>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

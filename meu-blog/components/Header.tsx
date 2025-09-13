"use client";

import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-green-600 to-green-800 shadow-lg"
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="text-white text-xl font-bold">
                MeuBlog
              </Link>

              {/* Menu Desktop */}
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-green-200 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-green-200 transition-colors"
                >
                  Sobre
                </Link>
              </div>

              {/* Menu Mobile */}
              <Disclosure.Button className="md:hidden text-white">
                {open ? <X size={24} /> : <Menu size={24} />}
              </Disclosure.Button>
            </div>

            {/* Menu Mobile Expandido */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-green-700 rounded-lg mt-2">
                <Link
                  href="/"
                  className="block text-white hover:bg-green-600 rounded px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-white hover:bg-green-600 rounded px-3 py-2"
                >
                  Sobre
                </Link>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}

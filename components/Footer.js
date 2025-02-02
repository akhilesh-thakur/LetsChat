"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          {/* Left Section - Brand */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">LetsChat</h2>
            <p className="text-gray-400 mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} Your Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

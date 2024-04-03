"use client";
import React, { useState } from "react";
import Logo from "@/app/components/Logo";
import Link from "next/link";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="p-2 sm:px-10 flex justify-between items-center bg-gray-900">
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Links for Tablets and PC */}
      <div className="sm:flex gap-6 text-xl hidden ">
        <Link
          href="/"
          className={({ isActive }) =>
            isActive
              ? "text-pink-900 font-semibold"
              : `text-black hover:text-blue-700 font-semibold`
          }
        >
          Name Analysis
        </Link>
        <Link
          href="/lifepurpose"
          className={({ isActive }) =>
            isActive
              ? "text-pink-900 font-semibold"
              : `text-black hover:text-blue-700 font-semibold`
          }
        >
          Life Purpose
        </Link>
      </div>

      {/* Links for Mobile Devices */}
      <div className="flex flex-col items-center sm:hidden">
        <button onClick={() => setMobileMenu((prev) => !prev)}>
          {mobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="bg-white absolute top-12 left-0 text-center text-2xl w-full h-auto py-4 px-4 flex flex-col">
          <Link href="/" className="border-b-2 border-gray-200">
            Name Analysis
          </Link>
          <Link href="/life-purpose" className="border-b-2 border-gray-200">
            Life Purpose
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;

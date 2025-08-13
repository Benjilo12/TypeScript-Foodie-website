"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { Navlinks } from "../../../constant/contants";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggler from "../../Helper/ThemeToggler";

type Props = {
  openNav: () => void;
};

export default function Nav({ openNav }: Props) {
  // State to control whether the navigation background is active or not
  // Default is "false" (string) — but ideally, this should be a boolean: false
  const [navBg, setNavbg] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handler = () => {
      // If scrolled 90px or more, set background active
      if (window.scrollY >= 90) setNavbg(true);
      // If scrolled less than 90px, remove background
      if (window.scrollY < 90) setNavbg(false);
    };

    // Attach scroll listener to window
    window.addEventListener("scroll", handler);
    // Cleanup: remove scroll listener when component unmounts
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-950 dark:bg-white rounded-full flex items-center justify-center flex-col">
            <MdDeliveryDining className="w-6 h-6 text-white dark:text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-black font-bold">
            Foodies
          </h1>
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-black hover:text-emerald-500 font-bold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer px-8 py-2.5">
            Join Now
          </button>
          {/* Theme Toggler */}
          <ThemeToggler />

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-blue-950 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

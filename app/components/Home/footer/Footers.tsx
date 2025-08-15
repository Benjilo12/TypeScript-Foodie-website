import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitch, FaX } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";

export default function Footers() {
  return (
    <div className="pt-14 pb-14 bg-gray-800">
      {/* Top part */}
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* firts part */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col ">
              <MdDeliveryDining className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
              Foodies
            </h1>
          </div>
          <p className="mt-4 text-base text-gray-200 font-medium w-[250] md:w-[280px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            necessitatibus minus dicta illo deleniti adipisci?
          </p>
          <div className="mt-6 flex items-center space-x-2">
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white round-full">
              <FaFacebook />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-pink-600 text-white round-full">
              <FaInstagram />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-black text-white round-full">
              <FaX />
            </div>
            <div className="flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white round-full">
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* Second Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Company</h1>
          <p className="footer_link">About</p>
          <p className="footer_link">News</p>
          <p className="footer_link">Our Customer</p>
          <p className="footer_link">Leadership</p>
        </div>
        {/* third Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white">Resourecs</h1>
          <p className="footer_link">Blog</p>
          <p className="footer_link">Webinar & Events</p>
          <p className="footer_link">Podcast</p>
          <p className="footer_link">E-book & Guides</p>
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              +233593711846
            </h1>
          </div>
          <div className="mt-2">
            <h1 className="text-sm text-white">Our Email</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t flex flex-col md:flex-row justify-between items-center">
        <p className="text-center text-white md:text-left">
          Copyright @ 2025 benjilo.All rights reserved
        </p>
        <div className="flex items-center text-white space-x-4 mt-4 md:mt-0">
          <span>socials :</span>
          <span className="hover:text-gray-500 text-violet-600">
            <FaTwitch />
          </span>
          <span className="hover:text-gray-500 text-blue-600">
            <FaFacebook />
          </span>
          <span className="hover:text-gray-500 text-black">
            <FaX />
          </span>
        </div>
      </div>
    </div>
  );
}

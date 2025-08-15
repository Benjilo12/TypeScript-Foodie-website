import Image from "next/image";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

export default function MobileApp() {
  return (
    <div className="pt-14 pb-16">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Image */}
        <Image
          src="/images/app.png"
          alt="Image"
          width={800}
          height={800}
          className="object-cover"
        />

        {/* Text content */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12">
            Connecting our user with iOS & Android apps. Download from iTune &
            Play store
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-6 sm:leading-8 text-gray-800 dark:text-gray-400">
            Pick one of our stock theme, or create your custom theme with the
            most advanced theme editor on my online survey building tool.
            We&apos;re driven beyound just finishing the projects. We want to
            find solution using our website & apps
          </p>
          {/* Download Button */}
          <div className="sm:flex space-y-3 sm:space-x-4 mt-5">
            {/* App button */}
            <a
              href="#_"
              className="flex items-center rounded-md border border-gray-400 px-4 py-3 bg-gray-950 transition-all duration-300 h-16"
            >
              <FaApple className="text-2xl mr-2 text-white" />
              <div className="leading-tight">
                <p className="text-xs text-white">Download on the</p>
                <p className="text-sm font-bold text-white whitespace-nowrap">
                  Apple Store
                </p>
              </div>
            </a>

            {/* Google button */}
            <a
              href="#_"
              className="flex items-center rounded-md border border-gray-400 px-4 py-3 bg-gray-950 transition-all duration-300 h-16"
            >
              <FaGooglePlay className="text-2xl mr-2 text-white" />
              <div className="leading-tight">
                <p className="text-xs text-white">Download on the</p>
                <p className="text-sm font-bold text-white whitespace-nowrap">
                  Google Play
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

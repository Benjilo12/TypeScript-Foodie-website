import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: string;
};

export default function FeatureCard({ icon, title }: Props) {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Image
        src={icon}
        alt="icon"
        width={100}
        height={100}
        className="mx-auto object-contain"
      />
      <h1
        data-aos="fade-left"
        data-aos-duration="2000"
        className="mt-8 text-lg font-bold text-center"
      >
        {title}
      </h1>
      <p
        data-aos="fade-left"
        data-aos-duration="2000"
        className=" text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3 font-medium"
      >
        We&apos;re driven beyound just finishing the projects. We want to find
        smart solutions.
      </p>
    </div>
  );
}

import React from "react";
import HowitWorkCard from "./HowitWorkCard";

export default function HowitWork() {
  return (
    <div className="pt-16 pb-10">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold"></h1>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div data-aos="fade-left" data-aos-delay="300">
          <HowitWorkCard
            num="01"
            image="/images/w1.png"
            title="Become a Delivery Man"
            description="As a delivery driver, you'll make reliable money-working anytime, anywhere"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <HowitWorkCard
            num="02"
            image="/images/w2.png"
            title="Become a Partner"
            description="Grow your business and reach new customers by partnering with us"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <HowitWorkCard
            num="03"
            image="/images/w3.png"
            title="Try Andriod/ios App"
            description="Get the best DoorDash experience with live order tracking"
          />
        </div>
      </div>
    </div>
  );
}

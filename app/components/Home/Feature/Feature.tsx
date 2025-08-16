import React from "react";
import FeatureCard from "./FeatureCard";

export default function Feature() {
  return (
    <div className="pt-15 pb-16">
      <h1
        data-aos="fade-up "
        data-aos-anchor-placement="top-center"
        data-aos-delay="50"
        className="text-xl sm:text-2xl text-center font-extrabold"
      >
        Meet our Quality Features
      </h1>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <FeatureCard icon="/images/f1.svg" title="Analytics Business" />
        </div>
        <div>
          <FeatureCard icon="/images/f2.svg" title="Wide coverage Map" />
        </div>
        <div>
          <FeatureCard icon="/images/f3.svg" title="Artificial Intelligence" />
        </div>
        <div>
          <FeatureCard icon="/images/f4.svg" title="Trusted & Secure" />
        </div>
        <div>
          <FeatureCard icon="/images/f5.svg" title="Mobile App" />
        </div>
        <div>
          <FeatureCard icon="/images/f6.svg" title="Mobile App" />
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function ClientRewiew() {
  return (
    <div className="pt-16 pb-10 text-center font-extrabold">
      <h1
        className="text-xl sm:text-2xl text-center font-extrabold"
        data-aos="fade-up "
        data-aos-anchor-placement="top-center"
        data-aos-delay="50"
      >
        {" "}
        What people say about us
      </h1>
      <div data-aos="fade-up" className="mt-16 w-[80%] mx-auto">
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          transitionDuration={500}
        >
          <ReviewCard
            reviewTitle="Great work!"
            username="Jassica Doe"
            userImage="/images/c1.png"
            role="UI UX Designer"
          />
          <ReviewCard
            reviewTitle="Creative work"
            username="Jane Lewis"
            userImage="/images/c2.png"
            role="web Developer"
          />
          <ReviewCard
            reviewTitle="Awesome work!"
            username="David Peters"
            userImage="/images/c3.png"
            role="App Developer"
          />
        </Carousel>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import About from "./About/About";
import Category from "./category/Category";
import ClientRewiew from "./ClientReview/ClientRewiew";
import Feature from "./Feature/Feature";
import Footers from "./footer/Footers";
import Hero from "./Hero/Hero";
import HowitWork from "./HowitWorks/HowitWork";
import MobileApp from "./MobileApp/MobileApp";
import Restaurant from "./Restaurant/Restaurant";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Restaurant />
      <Category />
      <HowitWork />
      <About />
      <Feature />
      <ClientRewiew />
      <MobileApp />
      <Footers />
    </div>
  );
}

export default Home;

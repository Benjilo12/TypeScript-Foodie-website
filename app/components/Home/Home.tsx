"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About/About";
import Category from "./category/Category";
import ClientRewiew from "./ClientReview/ClientRewiew";
import Feature from "./Feature/Feature";
import Footers from "./footer/Footers";
import Hero from "./Hero/Hero";
import HowitWork from "./HowitWorks/HowitWork";
import MobileApp from "./MobileApp/MobileApp";
import Restaurant from "./Restaurant/Restaurant";

function Home() {
  useEffect(() => {
    // Initialize AOS directly (no need for dynamic import)
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });

    // Refresh AOS when components load
    AOS.refresh();
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

import About from "./About/About";
import Category from "./category/Category";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import HowitWork from "./HowitWorks/HowitWork";
import Restaurant from "./Restaurant/Restaurant";

function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Restaurant />
      <Category />
      <HowitWork />
      <About />
      <Feature />
    </div>
  );
}

export default Home;

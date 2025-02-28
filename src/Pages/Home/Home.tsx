import About from "../../Components/About/About";
import FeaturedProducts from "../../Components/Featured/FeaturedProducts";
import HeroSection from "../../Components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5">
      <HeroSection />
      <FeaturedProducts />
      <About />
    </div>
  );
};

export default Home;

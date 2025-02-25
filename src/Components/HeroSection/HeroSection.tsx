import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SliderItem from "./SliderItem";

const HeroSection = () => {
  const sliders = [
    {
      heading: "Discover Elegant Notebooks",
      bgUrl: "assets/images/header-1.jpg",
      button: {
        path: "/shop",
        text: "Shop Notebooks",
      },
    },
    {
      heading: "Premium Pens for Every Hand",
      bgUrl: "assets/images/header-2.jpg",
      button: {
        path: "/shop",
        text: "Browse Pens",
      },
    },
    {
      heading: "Journals to Capture Your Thoughts",
      bgUrl: "assets/images/header-3.jpg",
      button: {
        path: "/shop",
        text: "Find Your Journal",
      },
    },
    {
      heading: "Creative Art Supplies",
      bgUrl: "assets/images/header-4.jpg",
      button: {
        path: "/shop",
        text: "Explore Supplies",
      },
    },
    {
      heading: "Organize with Stylish Planners",
      bgUrl: "assets/images/header-5.jpg",
      button: {
        path: "/shop",
        text: "Get Organized",
      },
    },
  ];

  return (
    <Swiper
      className="mySwiper"
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {sliders?.map((slider) => (
        <SwiperSlide key={sliders.indexOf(slider)}>
          <SliderItem heading={slider?.heading} bgUrl={slider?.bgUrl} button={slider?.button} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;

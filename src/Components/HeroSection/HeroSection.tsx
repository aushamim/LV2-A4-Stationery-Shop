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
    <div>
      <Swiper
        className="mySwiper rounded-lg"
        spaceBetween={30}
        loop={true}
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

      <div className="mt-5 border border-sky-200 p-5 grid-cols-2 grid xl:grid-cols-4 rounded">
        <div className="border-b xl:border-b-0 border-r border-sky-200 p-2 xl:p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-10 stroke-sky-600 mx-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            <path d="M3 9l4 0" />
          </svg>
          <p className="text-center mt-2 mb-1 font-semibold">FREE SHIPPING</p>
          <p className="text-center">For all order over 99$</p>
        </div>
        <div className="border-b xl:border-b-0 xl:border-r border-sky-200 p-2 xl:p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-10 stroke-sky-600 mx-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
            <path d="M12 7v5l3 3" />
            <path d="M15 19l2 2l4 -4" />
          </svg>
          <p className="text-center mt-2 mb-1 font-semibold">DELIVERY ON TIME</p>
          <p className="text-center">Perfect goods condition</p>
        </div>
        <div className="border-r border-sky-200 p-2 xl:p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-10 stroke-sky-600 mx-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
            <path d="M3 10l18 0" />
            <path d="M7 15l.01 0" />
            <path d="M11 15l2 0" />
          </svg>
          <p className="text-center mt-2 mb-1 font-semibold">SECURE PAYMENT</p>
          <p className="text-center">100% secure payment</p>
        </div>
        <div className="p-2 xl:p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="size-10 stroke-sky-600 mx-auto"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
            <path d="M18 19c0 1.657 -2.686 3 -6 3" />
            <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
            <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
          </svg>
          <p className="text-center mt-2 mb-1 font-semibold">24/7 SUPPORT</p>
          <p className="text-center">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

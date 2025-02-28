import { Link } from "react-router";

const About = () => {
  return (
    <div
      className="xl:p-20 xl:px-52 rounded-md my-16 flex flex-col xl:flex-row gap-10 bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/images/header-1.jpg')` }}
    >
      <div className="overflow-hidden rounded-md">
        <img className="h-80 object-cover" src="/assets/images/header-5.jpg" alt="" />
      </div>
      <div className="text-white flex-grow rounded-md">
        <div className="h-full w-full p-8 flex flex-col justify-center">
          <h1 className="text-2xl xl:text-5xl text-white font-bold drop-shadow-md">
            Your one-stop destination for high-quality office and school supplies.
          </h1>
          <Link to="/shop" className="bg-slate-500 p-1 px-2 xl:p-3 block mt-5 w-fit rounded-lg text-white font-semibold xl:text-lg">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Link } from "react-router";

interface SliderPropsInterface {
  button: { path: string; text: string };
  heading: string;
  bgUrl: string;
}

const SliderItem = ({ button, heading = "", bgUrl }: SliderPropsInterface) => {
  return (
    <div
      className="bg-no-repeat h-52 xl:h-[512px] bg-cover rounded-lg bg-center flex items-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgUrl})` }}
    >
      <div className="backdrop-blur-sm h-full w-full p-8 flex flex-col justify-center">
        <h1 className="text-3xl xl:text-5xl text-white font-bold drop-shadow-md">{heading}</h1>
        <Link to={button?.path} className="bg-slate-500 p-1 px-2 xl:p-3 block mt-5 w-fit rounded-lg text-white font-semibold xl:text-lg">
          {button?.text}
        </Link>
      </div>
    </div>
  );
};

export default SliderItem;

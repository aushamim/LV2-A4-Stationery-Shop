import { tailChase } from "ldrs";

const Loader = () => {
  tailChase.register();

  return (
    <div className="flex items-center justify-center h-36">
      <l-tail-chase size="40" speed="1.75" color="#334155"></l-tail-chase>
    </div>
  );
};

export default Loader;

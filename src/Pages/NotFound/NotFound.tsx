import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-[50vh]">
      <h1 className="text-6xl font-semibold">404</h1>
      <h1 className="text-3xl xl:text-6xl font-semibold">Opss! Page not found!</h1>
      <h3 className="text-xl xl:text-2xl text-center">
        Try{" "}
        <Link to="/login" className="font-semibold text-slate-600">
          logging
        </Link>{" "}
        in
        <span className="block xl:inline"> Or </span>
        Return to{" "}
        <Link to="/" className="font-semibold text-slate-600">
          Home
        </Link>
      </h3>
    </div>
  );
};

export default NotFound;

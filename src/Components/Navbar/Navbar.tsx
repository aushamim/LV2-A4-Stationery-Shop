import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-5 w-3/4 mx-auto py-3">
      <div>
        <Link to="/" className="text-3xl font-semibold flex gap-2 items-center">
          <img src="icon.png" alt="logo" className="size-10" />
          <p>
            <span className="text-sky-600">Pen</span>Craft
          </p>
        </Link>
      </div>

      <div className="col-span-3 flex items-center justify-center">
        <Link to="/" className="text-md font-semibold text-gray-600 hover:text-sky-600 duration-300 ease-in-out mx-3">
          Home
        </Link>
        <Link to="/shop" className="text-md font-semibold text-gray-600 hover:text-sky-600 duration-300 ease-in-out mx-3">
          Shop
        </Link>
        <Link to="/about" className="text-md font-semibold text-gray-600 hover:text-sky-600 duration-300 ease-in-out mx-3">
          About
        </Link>
        <Link to="/cart" className="text-md font-semibold text-gray-600 hover:text-sky-600 duration-300 ease-in-out mx-3">
          Cart
        </Link>
        <Link to="/create-product" className="text-md font-semibold text-gray-600 hover:text-sky-600 duration-300 ease-in-out mx-3">
          Create Product
        </Link>
        <Link to="/dashboard" className="text-md font-semibold text-gray-600 hover:text-sky-600 duration-300 ease-in-out mx-3">
          Dashboard
        </Link>
        <Link to="/dashboard" className="text-md font-semibold text-gray-600 hover:text-sky-600 duration-300 ease-in-out mx-3">
          Login
        </Link>
      </div>

      <div className="flex items-center justify-end">
        <Link to="/cart" className="bg-sky-100 p-1.5 rounded-full flex items-center gap-2">
          <div className="bg-sky-300 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart size-4 stroke-sky-800"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
          <div className="pl-1 pr-3 font-semibold text-sky-700">$0</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-11/12 xl:w-3/4 mx-auto pt-10 pb-5 px-2 border-b-8 border-sky-600">
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div>
          <div className="text-4xl font-semibold flex gap-2 items-center justify-center xl:justify-start">
            <img src="icon.png" alt="logo" className="size-14" />
            <p>
              <span className="text-sky-600">Pen</span>Craft
            </p>
          </div>
          <div className="mt-7 mb-5 pl-1 text-lg font-semibold text-gray-500 text-center xl:text-left">
            <p>Address: Mohammadpur, Dhaka</p>
            <p>Phone: +88 01234567890</p>
            <p>Email: support@pen-craft.com</p>
          </div>
        </div>

        <div className="col-span-2 hidden xl:grid grid-cols-3 gap-5">
          <div>
            <h1 className="uppercase text-xl font-semibold text-sky-600 my-3">information</h1>

            <Link
              to="/about"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Blog
            </Link>
            <Link
              to="/"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Testimonials
            </Link>
            <Link
              to="/"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Contact
            </Link>
          </div>

          <div>
            <h1 className="uppercase text-xl font-semibold text-sky-600 my-3">account</h1>

            <Link
              to="/dashboard"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Dashboard
            </Link>
            <Link
              to="/cart"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Shopping Cart
            </Link>
            <Link
              to="/dashboard/my-orders"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              My Orders
            </Link>
            <Link
              to="/dashboard/update-info"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Update Information
            </Link>
          </div>

          <div>
            <h1 className="uppercase text-xl font-semibold text-sky-600 my-3">Quick Shop</h1>

            <Link
              to="/shop"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Browse Products
            </Link>
            <Link
              to="/"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Deal of the week
            </Link>
            <Link
              to="/"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Clearance Sale
            </Link>
            <Link
              to="/"
              className="font-medium hover:text-sky-600 duration-300 ease-in-out block py-1 border-l-4 border-transparent hover:border-sky-400 hover:pl-2 -ml-1"
            >
              Special Discount
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 font-semibold text-gray-600">Copyright © 2025 PenCraft - All Rights Reserved</div>
    </footer>
  );
};

export default Footer;

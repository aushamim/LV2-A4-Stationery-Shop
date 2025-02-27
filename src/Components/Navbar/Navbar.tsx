import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { logout, selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav>
      <div className="hidden xl:grid grid-cols-5 w-3/4 mx-auto py-3">
        <div>
          <Link to="/" className="text-3xl font-semibold flex gap-2 items-center">
            <img src="icon.png" alt="logo" className="size-10" />
            <p>
              <span className="text-slate-600">Pen</span>Craft
            </p>
          </Link>
        </div>

        <div className="col-span-3 flex items-center justify-center">
          <Link to="/" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3">
            Home
          </Link>
          <Link to="/shop" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3">
            Shop
          </Link>
          <Link to="/about" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3">
            About
          </Link>
          <Link to="/cart" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3">
            Cart
          </Link>
          <Link to="/create-product" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3">
            Create Product
          </Link>
          <Link to="/dashboard" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3">
            Dashboard
          </Link>

          {user ? (
            <button className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out mx-3">
              Login
            </Link>
          )}
        </div>

        <div className="flex items-center justify-end">
          <Link to="/cart" className="bg-slate-100 p-1.5 rounded-full flex items-center gap-2">
            <div className="bg-slate-300 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart size-4 stroke-slate-800"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <div className="pl-1 pr-3 font-semibold text-slate-700">$0</div>
          </Link>
        </div>
      </div>

      <div className="drawer drawer-end block xl:hidden w-11/12 mx-auto">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex py-5">
          <div>
            <Link to="/" className="text-3xl font-semibold flex gap-2 items-center">
              <img src="icon.png" alt="logo" className="size-10" />
              <p>
                <span className="text-slate-600">Pen</span>Craft
              </p>
            </Link>
          </div>

          <div className="flex-grow flex justify-end items-center">
            <label htmlFor="nav-drawer" className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </label>
          </div>
        </div>

        <div className="drawer-side z-50">
          <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-white text-base-content min-h-full w-80 p-4 flex flex-col">
            <div className="flex-grow">
              <li>
                <Link to="/dashboard" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-md font-semibold text-gray-600 hover:text-slate-600 duration-300 ease-in-out">
                  Login
                </Link>
              </li>
            </div>

            <div>
              <Link to="/cart" className="bg-slate-100 p-1.5 rounded-md flex items-center gap-2">
                <div className="bg-slate-300 p-2 rounded-md flex items-center gap-3 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart size-4 stroke-slate-800"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  <p className="font-semibold">Cart</p>
                </div>
                <div className="pl-1 pr-3 font-semibold text-slate-700">$0</div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

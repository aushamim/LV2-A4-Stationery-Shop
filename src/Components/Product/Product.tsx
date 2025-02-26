import { Link } from "react-router";

const Product = () => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-md border hover:scale-[1.02] duration-300">
      <Link to="/">
        <img
          className="h-32 xl:h-60 w-full rounded-t-md object-cover"
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-7 -rotate-45 bg-red-500 text-center text-sm text-white uppercase">
        Out
      </span>
      <div className="mt-4 px-3 xl:px-5 pb-5">
        <Link to="/">
          <h5 className="text-base text-center xl:text-left xl:text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
        </Link>
        <div className="mt-2.5 mb-5 flex items-center justify-center xl:justify-start">
          <span className="mr-2 rounded bg-slate-200 px-2.5 py-0.5 text-xs font-semibold">Office Supplies</span>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-5 xl:gap-0">
          <p>
            <span className="text-3xl font-bold text-slate-900">$249</span>
            <span className="text-sm text-slate-900 line-through">$299</span>
          </p>
          <button className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 active:scale-95 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

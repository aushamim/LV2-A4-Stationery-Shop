import React from "react";

const Product = () => {
  return (
    // <div className="border border-gray-100 hover:border-slate-500 hover:scale-105 p-5 rounded-md transition duration-300">
    //   <img
    //     className="rounded-md h-48 w-full object-cover"
    //     src="https://res.cloudinary.com/dm1dblouo/image/upload/w_500/f_webp/v1738511907/b9wd6hgedyc6cupt5vbs.jpg"
    //     alt=""
    //   />

    //   <div className="mt-3">
    //     <div className="flex items-center justify-center gap-1">
    //       <div className="badge badge-primary badge-outline badge-sm">Writing</div>
    //       <div className="badge badge-success badge-outline badge-sm">In Stock</div>
    //       <div className="badge badge-error badge-outline badge-sm">Stock Out</div>
    //     </div>
    //     <p className="text-center mt-4 mb-2 text-lg font-semibold">Notebook</p>
    //     <p className="text-center">Brand: Brand</p>
    //     <p className="text-center font-semibold">$500</p>
    //     <div className="mt-5 flex items-center gap-3 w-11/12 mx-auto">
    //       <button className="btn btn-info btn-sm flex-grow rounded-md btn-outline">View Details</button>
    //       <button className="btn btn-success btn-sm flex-grow rounded-md btn-outline">Add to Cart</button>
    //     </div>
    //   </div>
    // </div>

    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-md border hover:scale-105 duration-300">
      <a href="#">
        <img
          className="h-60 rounded-t-md object-cover"
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
      </a>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-red-500 text-center text-sm text-white">Out</span>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">Office Supplies</span>
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">$249</span>
            <span className="text-sm text-slate-900 line-through">$299</span>
          </p>
          <a
            href="#"
            className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;

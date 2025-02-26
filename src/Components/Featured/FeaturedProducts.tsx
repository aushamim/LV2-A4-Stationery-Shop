import React from "react";
import Product from "../Product/Product";

const FeaturedProducts = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl xl:text-4xl font-bold text-center">Featured Products</h1>
        <span className="w-20 h-1 bg-slate-300 block mx-auto mt-2"></span>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-7">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default FeaturedProducts;

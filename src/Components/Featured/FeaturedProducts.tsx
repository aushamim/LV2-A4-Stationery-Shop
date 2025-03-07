import { Link } from "react-router";
import { useGetProductsQuery } from "../../Redux/Features/Products/productApi";
import Loader from "../Loader/Loader";
import Product from "../Product/Product";

const FeaturedProducts = () => {
  const { isLoading, data } = useGetProductsQuery({}, { refetchOnMountOrArgChange: true });
  const products = data?.products?.slice(0, 8) || [];

  return (
    <div className="mt-8 xl:mt-16">
      <div>
        <h1 className="text-2xl xl:text-4xl font-bold text-center">Featured Products</h1>
        <span className="w-20 h-1 bg-slate-300 block mx-auto mt-2"></span>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-10 grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-7">
          {products?.map((product) => <Product key={products.indexOf(product)} product={product} />)}
        </div>
      )}

      <div className="flex justify-end py-5">
        <Link
          to="/shop"
          className="ml-auto rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 active:scale-95 duration-300"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;

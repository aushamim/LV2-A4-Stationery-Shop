import { useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../../Components/Loader/Loader";
import { addProduct } from "../../Redux/Features/Cart/cartSlice";
import { useGetProductQuery } from "../../Redux/Features/Products/productApi";
import { useAppDispatch } from "../../Redux/hooks";

export interface SingleProductInterface {
  _id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  imgUrl: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Product = () => {
  const { productId } = useParams();
  const { data, isLoading, isFetching } = useGetProductQuery(productId);
  const product: SingleProductInterface = data?.data;

  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addProduct({ id: product?._id, name: product?.name, price: product?.price }));
  };

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-16">
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="min-h-56">
            <img src={product?.imgUrl} alt={product?.name} className="rounded-md" />
          </div>

          <div>
            <div>
              <div className="flex items-center gap-1">
                <p className="bg-slate-200 w-fit px-2 py-1 text-xs font-semibold rounded-md uppercase">{product?.category}</p>
                <p className="font-semibold"> - {product?.brand} ⭐</p>
              </div>

              <h1 className="text-5xl font-semibold my-2">{product?.name}</h1>

              <p className="text-slate-500">{product?.description}</p>

              <h1 className="text-3xl font-semibold my-2">${product?.price}</h1>

              {product?.inStock ? (
                <p className="text-green-500 text-sm">Only {product.quantity} items left!</p>
              ) : (
                <p className="text-red-500 text-sm">Out of Stock</p>
              )}

              {product?.inStock && (
                <button
                  className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 active:scale-95 duration-300 mt-5"
                  onClick={handleAddToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </button>
              )}
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

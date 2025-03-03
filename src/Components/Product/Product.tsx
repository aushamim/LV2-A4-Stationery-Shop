import { Link } from "react-router";
import { addProduct } from "../../Redux/Features/Cart/cartSlice";
import { useAppDispatch } from "../../Redux/hooks";

export interface IProduct {
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
}

const Product = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct({ id: product?._id, name: product?.name, imgUrl: product?.imgUrl, price: product?.price }));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-md border hover:scale-[1.02] duration-300">
      <Link to={`/product/${product?._id}`}>
        <img className="h-32 xl:h-60 w-full rounded-t-md object-cover" src={product?.imgUrl} alt={product?.name} />
      </Link>
      {product?.inStock ? (
        ""
      ) : (
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-7 -rotate-45 bg-red-500 text-center text-sm text-white uppercase">
          Out
        </span>
      )}
      <div className="mt-4 px-3 xl:px-5 pb-5">
        <Link to={`/product/${product?._id}`}>
          <h5 className="text-base text-center xl:text-left xl:text-xl font-semibold tracking-tight text-slate-900">{product?.name}</h5>
        </Link>
        <div className="mt-2.5 mb-5 flex items-center justify-center xl:justify-start">
          <span className="mr-2 rounded bg-slate-200 px-2.5 py-0.5 text-xs font-semibold">{product?.category}</span>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-5 xl:gap-0">
          <p>
            <span className="text-3xl font-bold text-slate-900">${product?.price}</span>
            <span className="text-sm text-slate-900 line-through">${product?.price + parseInt((Math.random() * 10).toFixed())}</span>
          </p>
          <button
            className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 active:scale-95 duration-300"
            onClick={handleAddToCart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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

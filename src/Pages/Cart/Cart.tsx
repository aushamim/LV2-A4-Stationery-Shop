import { Link } from "react-router";
import { toast } from "sonner";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { addProduct, clearCart, removeFromCart, removeProduct, selectCartData } from "../../Redux/Features/Cart/cartSlice";
import { useCreateOrderMutation } from "../../Redux/Features/Orders/OrdersApi";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const Cart = () => {
  const cartData = useAppSelector(selectCartData);
  const totalProducts = cartData?.products?.reduce((acc, product) => acc + product?.quantity, 0);

  const dispatch = useAppDispatch();

  const handleAddToCart = (id: string, name: string, imgUrl: string, price: number) => {
    dispatch(addProduct({ id, name, imgUrl, price }));
  };

  const handleRemoveFromCart = (id: string, name: string, imgUrl: string, price: number) => {
    dispatch(removeProduct({ id, name, imgUrl, price }));
  };

  const handleRemoveAll = (id: string, name: string, imgUrl: string, price: number) => {
    dispatch(removeFromCart({ id, name, imgUrl, price }));
  };

  const user = useAppSelector(selectCurrentUser);
  const [createOrder] = useCreateOrderMutation();
  const hancleCheckout = async () => {
    if (!user) {
      toast.error("Please login to place order");
      return;
    }

    const orderProducts = cartData?.products.map((product) => ({
      product: product?.id,
      quantity: product?.quantity,
    }));

    const promise = async () => {
      const res = await createOrder(orderProducts).unwrap();
      window.location.href = res?.data;
      dispatch(clearCart());
    };

    toast.promise(promise, {
      loading: "Placing order...",
      success: "Order placed successfully",
      error: (error) => {
        return error?.data?.message;
      },
    });
  };

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5 mb-10">
      {cartData?.products?.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartData?.products?.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/product/${product?.id}`}>
                        <img className="size-16 rounded-md object-cover" src={product?.imgUrl} alt={product?.name} />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/product/${product?.id}`} className="font-semibold">
                        {product?.name}
                      </Link>
                    </td>
                    <td>${product?.price?.toFixed(2)}</td>
                    <td>
                      <div className="join">
                        <button
                          className="btn btn-outline btn-sm join-item border-slate-300"
                          onClick={() => {
                            handleRemoveFromCart(product?.id, product?.name, product?.imgUrl, product?.price);
                          }}
                        >
                          -
                        </button>
                        <button className="btn btn-outline btn-sm join-item border-slate-300">{product?.quantity}</button>
                        <button
                          className="btn btn-outline btn-sm join-item border-slate-300"
                          onClick={() => {
                            handleAddToCart(product?.id, product?.name, product?.imgUrl, product?.price);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(product?.price * product?.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm bg-red-200 hover:bg-red-300 shadow-none border-none text-red-500"
                        onClick={() => {
                          handleRemoveAll(product?.id, product?.name, product?.imgUrl, product?.price);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div className="w-full xl:w-80 ml-auto mt-5">
              <div className="grid grid-cols-2 font-semibold">
                <p className="border py-2 px-3">Total Products:</p>
                <p className="border py-2 px-3">{totalProducts}</p>
                <p className="border py-2 px-3">Total Price:</p>
                <p className="border py-2 px-3">${cartData?.totalPrice?.toFixed(2)}</p>
              </div>

              <div className="mt-5">
                <button
                  onClick={hancleCheckout}
                  className="block w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 active:scale-95 duration-300"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-16">
          <img className="size-20 mx-auto" src="/assets/images/stationery.png" alt="no product found" />
          <p className="text-center mt-3 text-xl">No Products in the cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

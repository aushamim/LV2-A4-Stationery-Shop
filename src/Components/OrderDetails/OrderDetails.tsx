import { toast } from "sonner";
import { useDeleteOrderMutation, useUpdateOrderMutation } from "../../Redux/Features/Orders/OrdersApi";
import { OrderInterface } from "../../Types/global";

const OrderDetails = ({ role, order }: { role: string; order: OrderInterface }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const mapStatusToColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: "#fed7aa", // Orange
      paid: "#bbf7d0", // Green
      shipped: "#bfdbfe", // Blue
      completed: "#e9d5ff", // Purple
      cancelled: "#fecdd3", // Red
    };
    return colors[status.toLocaleLowerCase()];
  };

  const [updateOrder] = useUpdateOrderMutation();
  const handleChangeOrderStatus = (orderId: string) => {
    const promise = async () => {
      const status = (document.getElementById(`statusChangeSelector-${orderId}`) as HTMLSelectElement)?.value;
      await updateOrder({ orderId: orderId, orderUpdateData: { status: status } }).unwrap();
    };

    toast.promise(promise, {
      loading: "Setting order status...",
      success: "Order status updated successfully",
      error: (error) => {
        return error?.data?.message;
      },
    });
  };

  const [deleteOrder] = useDeleteOrderMutation();
  const handleChangeOrderDelete = (orderId: string) => {
    const promise = async () => {
      await deleteOrder(orderId).unwrap();
    };

    toast.promise(promise, {
      loading: "Deleting order...",
      success: "Order deleted successfully",
      error: (error) => {
        return error?.data?.message;
      },
    });
  };

  return (
    <div className="border border-slate-400 hover:border-slate-300 hover:scale-[1.01] transition duration-300 rounded-md py-3 px-5 my-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
          <p className="font-semibold">
            <span className="text-slate-500">Order ID:</span>{" "}
            <span className="uppercase tooltip" data-tip={order._id}>
              #...{order._id.slice(-8)}
            </span>
          </p>
          <div className="flex items-center gap-3">
            <p className="text-sm">{formatDate(order?.createdAt)}</p>
            <p className="text-xs rounded-md px-2 py-0.5" style={{ backgroundColor: `${mapStatusToColor(order.status)}` }}>
              {order.status}
            </p>
          </div>
        </div>

        {/* Order Statuses */}
        {role === "admin" && (
          <div className="flex justify-end gap-3">
            <div className="join w-full xl:w-fit">
              <select className="join-item select select-sm select-bordered w-full xl:w-40" defaultValue="" id={`statusChangeSelector-${order._id}`}>
                <option value="" disabled>
                  Update Status
                </option>
                <option value="Shipped">Shipped</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <button
                className="join-item btn btn-sm"
                onClick={() => {
                  handleChangeOrderStatus(order?._id);
                }}
              >
                Set
              </button>
            </div>
            <button
              className="btn btn-sm bg-red-100 hover:bg-red-200 text-red-600"
              onClick={() => {
                handleChangeOrderDelete(order?._id);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Customer Info */}
      <div className="my-5 grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="flex gap-2">
          <div>
            <div className="border-2 border-slate-400 rounded-md p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-5 stroke-slate-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-base">Customer Information</p>
            <span className="block h-1 w-10 rounded-full bg-slate-400 mb-2"></span>
            <table className="table-auto border-collapse w-full">
              <tbody>
                <tr>
                  <td className="font-semibold text-slate-500">Name: </td>
                  <td className="pl-1">{order?.user?.name}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Email: </td>
                  <td className="pl-1">{order?.user?.email}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Phone: </td>
                  <td className="pl-1">{order?.user?.phone}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Address: </td>
                  <td className="pl-1">{order?.user?.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Info */}
        <div className="flex gap-2">
          <div>
            <div className="border-2 border-slate-400 rounded-md p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-5 stroke-slate-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-base">Order Summery</p>
            <span className="block h-1 w-10 rounded-full bg-slate-400 mb-2"></span>
            <table className="table-auto border-collapse w-full">
              <tbody>
                <tr>
                  <td className="font-semibold text-slate-500">Status: </td>
                  <td className="pl-1">{order?.status}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Total Price: </td>
                  <td className="pl-1">${order?.totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Total Products: </td>
                  <td className="pl-1">{order?.products.length}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Transaction Info */}
        <div className="flex gap-2">
          <div>
            <div className="border-2 border-slate-400 rounded-md p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-5 stroke-slate-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-base">Transaction Details</p>
            <span className="block h-1 w-10 rounded-full bg-slate-400 mb-2"></span>
            <table className="table-auto border-collapse w-full">
              <tbody>
                <tr>
                  <td className="font-semibold text-slate-500">ID: </td>
                  <td className="pl-1">
                    <span className="uppercase tooltip" data-tip={order?.transaction?.id}>
                      #...{order?.transaction?.id.slice(-8)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Status: </td>
                  <td className="pl-1">{order?.transaction?.transactionStatus ?? "Completed"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Payment Method: </td>
                  <td className="pl-1">{order?.transaction?.method ?? "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-500">Date: </td>
                  <td className="pl-1">{order?.transaction?.date_time ? formatDate(order?.transaction?.date_time) : "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="collapse collapse-arrow border border-slate-500 rounded-md">
          <input type="checkbox" />
          <div className="collapse-title font-medium">Click to show products</div>
          <div className="collapse-content">
            <table className="table overflow-auto">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>

                {order?.products?.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img className="w-20 h-16 object-cover rounded-md" src={product?.product?.imgUrl} alt={product?.product?.name} />
                    </td>
                    <td>{product?.product?.name}</td>
                    <td>{product?.product?.brand}</td>
                    <td>{product?.product?.category}</td>
                    <td>${product?.product?.price?.toFixed(2)}</td>
                    <td>{product?.quantity}</td>
                    <td>${(product?.quantity * product?.product?.price).toFixed(2)}</td>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

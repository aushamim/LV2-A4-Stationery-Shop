import Loader from "../../../Components/Loader/Loader";
import OrderDetails from "../../../Components/OrderDetails/OrderDetails";
import Tab from "../../../Components/Tab/Tab";
import { selectCurrentUser } from "../../../Redux/Features/Auth/authSlice";
import { useGetMyOrdersQuery } from "../../../Redux/Features/Orders/OrdersApi";
import { useAppSelector } from "../../../Redux/hooks";
import { OrderInterface } from "../../../Types/global";
import { adminTabs, userTabs } from "../tabs";

const MyOrders = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data, isLoading } = useGetMyOrdersQuery(undefined);
  const orders: OrderInterface[] = data?.data;

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5">
      <div className="hidden xl:block">
        <Tab active="my orders" tabs={user?.role === "admin" ? adminTabs : userTabs} />
      </div>

      {isLoading ? (
        <Loader />
      ) : orders && orders?.length > 0 ? (
        <div className="mt-5">{orders?.map((order) => <OrderDetails key={order?._id} role={user?.role ?? "user"} order={order} />)}</div>
      ) : (
        <div className="py-16">
          <img className="size-20 mx-auto" src="/assets/images/stationery.png" alt="no orders" />
          <p className="text-center mt-3 text-xl">No orders yet</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;

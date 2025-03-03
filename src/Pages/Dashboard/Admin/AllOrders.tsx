import { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import OrderDetails from "../../../Components/OrderDetails/OrderDetails";
import Tab from "../../../Components/Tab/Tab";
import { selectCurrentUser } from "../../../Redux/Features/Auth/authSlice";
import { useGetAllOrdersQuery } from "../../../Redux/Features/Orders/OrdersApi";
import { useAppSelector } from "../../../Redux/hooks";
import { OrderInterface } from "../../../Types/global";
import { adminTabs, userTabs } from "../tabs";

const AllOrders = () => {
  const user = useAppSelector(selectCurrentUser);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading } = useGetAllOrdersQuery({ page: currentPage }, { refetchOnMountOrArgChange: true });
  const orders: OrderInterface[] | undefined = data?.orders;

  const totalPagesFromBackend = data?.meta?.totalPage || 1;
  useEffect(() => {
    setTotalPages(totalPagesFromBackend);
  }, [totalPagesFromBackend]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5">
      <div className="hidden xl:block">
        <Tab active="all orders" tabs={user?.role === "admin" ? adminTabs : userTabs} />
      </div>

      {/* Orders */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-5">{orders?.map((order) => <OrderDetails key={order?._id} role={user?.role ?? "user"} order={order} />)}</div>
      )}

      {/* Pagination */}
      {orders && orders.length > 0 ? (
        <div className="flex justify-center mt-8">
          <div className="btn-group join">
            <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              &lt;
            </button>
            <button className="join-item btn btn-sm">
              Page {currentPage} of {totalPages}
            </button>
            <button className="join-item btn btn-sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              &gt;
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AllOrders;

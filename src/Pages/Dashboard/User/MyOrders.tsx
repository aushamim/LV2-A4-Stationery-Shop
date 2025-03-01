import Tab from "../../../Components/Tab/Tab";
import { tabs } from "../tabs";

const MyOrders = () => {
  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5">
      <div>
        <Tab active="my orders" tabs={tabs} />
      </div>

      <div className="mt-5">My Orders</div>
    </div>
  );
};

export default MyOrders;

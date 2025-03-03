import { useSearchParams } from "react-router";
import { useVerifyOrderQuery } from "../../Redux/Features/Orders/OrdersApi";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const VerifyPayment = () => {
  const [URLSearchParams] = useSearchParams();
  const { data } = useVerifyOrderQuery(URLSearchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });
  const orderData: OrderData = data?.data?.[0];

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="w-11/12 xl:w-3/4 mx-auto mt-5 mb-10">
      <h1 className="text-3xl">✅ Payment verified successfully</h1>

      <div className="border border-slate-400 hover:border-slate-300 hover:scale-[1.01] transition duration-300 rounded-md py-3 px-5 my-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div>
            <p className="font-semibold">
              <span className="text-slate-500">Order ID:</span>{" "}
              <span className="uppercase tooltip" data-tip={orderData?.customer_order_id}>
                #...{orderData?.customer_order_id?.slice(-8)}
              </span>
            </p>
            <p className="text-xs font-semibold mt-1">
              <span className="text-slate-500">Invoice No: :</span>{" "}
              <span className="uppercase tooltip" data-tip={orderData?.invoice_no}>
                #...{orderData?.invoice_no?.slice(-8)}
              </span>
            </p>
          </div>
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
                    <td className="pl-1">{orderData?.name}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-slate-500">Email: </td>
                    <td className="pl-1">{orderData?.email}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-slate-500">Phone: </td>
                    <td className="pl-1">{orderData?.phone_no}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-slate-500">Address: </td>
                    <td className="pl-1">{orderData?.address}</td>
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
                    <td className="pl-1">{(orderData?.bank_status ?? "") === "Success" ? "Paid" : "Pending"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-slate-500">Total Price: </td>
                    <td className="pl-1">${orderData?.payable_amount}</td>
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
                      <span className="uppercase tooltip" data-tip={orderData?.invoice_no}>
                        #...{orderData?.invoice_no?.slice(-8)}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-slate-500">Status: </td>
                    <td className="pl-1">{orderData?.bank_status ?? "Pending"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-slate-500">Payment Method: </td>
                    <td className="pl-1">{orderData?.method ?? "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-slate-500">Date: </td>
                    <td className="pl-1">{orderData?.date_time ? formatDate(orderData?.date_time) : "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPayment;

import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TMeta } from "../../../Types/global";
import { baseApi } from "../../baseApi";

interface IResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    meta?: TMeta;
    data?: any[];
    result?: any[];
  };
}

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    // getAllOrders: builder.query({
    //   query: () => ({
    //     url: "/orders",
    //     method: "GET",
    //   }),
    //   providesTags: ["order"],
    // }),

    getAllOrders: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args && typeof args === "object") {
          Object.entries(args).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
              params.append(key, value.toString());
            }
          });
        }

        return {
          url: "/orders",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["order"],

      transformResponse: (response: IResponse & BaseQueryApi) => {
        return {
          orders: response?.data?.result,
          meta: response?.data?.meta,
        };
      },
    }),

    updateOrder: builder.mutation({
      query: (orderUpdateData) => ({
        url: `/orders/${orderUpdateData.orderId}`,
        method: "PATCH",
        body: orderUpdateData.orderData,
      }),
      invalidatesTags: ["order"],
    }),

    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useGetAllOrdersQuery, useGetMyOrdersQuery, useUpdateOrderMutation, useDeleteOrderMutation } = ordersApi;

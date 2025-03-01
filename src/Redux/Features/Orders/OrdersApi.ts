import { baseApi } from "../../baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      providesTags: ["order"],
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

export const { useGetMyOrdersQuery, useUpdateOrderMutation, useDeleteOrderMutation } = ordersApi;

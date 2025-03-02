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
  };
}

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
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
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],

      transformResponse: (response: IResponse & BaseQueryApi) => {
        return {
          products: response?.data?.data,
          meta: response?.data?.meta,
        };
      },
    }),

    getProduct: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useDeleteProductMutation } = productApi;

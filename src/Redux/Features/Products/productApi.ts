import { TResponseRedux } from "../../../Types/global";
import { baseApi } from "../../baseApi";

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
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;

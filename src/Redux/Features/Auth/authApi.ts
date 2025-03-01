import { baseApi } from "../../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
    }),

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetUserDataMutation, useLoginMutation, useRegisterMutation } = authApi;

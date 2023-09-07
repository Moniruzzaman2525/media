import { apiSlice } from "../EndPoints/fetchbasequery";


export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRegister: builder.mutation({
      query: (data) => ({
        url: `api/v1/auth/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["loginInfo"],
    }),
    createLogin: builder.mutation({
      query: (data) => ({
        url: `api/v1/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["loginInfo"],
    }),
    
  }),
});
export const {
  useCreateRegisterMutation,
  useCreateLoginMutation,
} = loginSlice;
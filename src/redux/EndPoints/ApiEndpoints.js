import { apiSlice } from "../EndPoints/fetchbasequery";

export const ecoSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: `/api/v1/media/create-media`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ph"],
    }),
    createUserAc: builder.mutation({
      query: (data) => ({
        url: `/api/v1/auth/create-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ph"],
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/auth/login-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ph"],
    }),
    getPost: builder.query({
      query: () => ({
        url: `/api/v1/media/get-media`,
        method: "GET",
      }),
      providesTags: ["ph"],
    }),
    getTopMedia: builder.query({
      query: () => ({
        url: `/api/v1/media/get-top-media`,
        method: "GET",
      }),
      providesTags: ["ph"],
    }),
    updateUser: builder.mutation({
      query: (body) => {
        const id = body?.id;
        const data = body?.data;
        return {
          url: `/api/v1/auth/update-user/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["ph"],
    }),
    likePost: builder.mutation({
      query: (body) => {
        const id = body?.id;
        const data = body?.data;
        return {
          url: `/api/v1/media/send-like/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["ph"],
    }),
    commentPost: builder.mutation({
      query: (body) => {
        const id = body?.id;
        const data = body?.data;
        return {
          url: `/api/v1/media/send-comment/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["ph"],
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/api/v1/auth/get-user/${id}`,
        method: "GET",
      }),
      providesTags: ["ph"],
    }),
  }),
});

export const {
  useCreatePostMutation, useGetPostQuery , useCreateUserAcMutation, useLoginUserMutation, useGetUserQuery , useUpdateUserMutation, useCommentPostMutation, useLikePostMutation, useGetTopMediaQuery

} = ecoSlice;

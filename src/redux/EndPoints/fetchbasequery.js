import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { logOut, setCredentials } from "../Slice/authSlice";

export const URL='http://localhost:5000/'

const baseApi = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    //console.log(token);
    // if (token) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }
    // return headers;
  },
});
// const baseApiWithRefresh = async (args, api, extraOptions) => {
//   let result = await baseApi(args, api, extraOptions);
//   if (result?.error?.status === 403) {
//     // send refresh token to get new access token
//     const refreshToken = api.getState().auth.refreshToken;
//     const data = { refreshToken: refreshToken };
//     const refreshResult = await axios.post(
//       `${URL}users/api/auth/refresh/`,
//       data
//     );
//     if (refreshResult?.data) {
//       const accessToken = refreshResult.data.accessToken;
//       const refreshToken = refreshResult.data.refreshToken;
//       const auth = refreshResult.data.user;
//       api.dispatch(setCredentials({ accessToken, refreshToken, auth }));
//       localStorage.setItem("userCredential", data.accessToken);
//       localStorage.setItem("refreshUserCredential", data.refreshToken);
//       localStorage.setItem("userData", data.user);
//       // console.log("with refresh");
//       result = await baseApi(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }
//   return result;
// };
export const apiSlice = createApi({
  baseQuery: baseApi,
  tagTypes: ["ph"],
  endpoints: (builder) => ({}),
});

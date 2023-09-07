// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     id: "",
//     username: "",
//     email: "",
//     firstName: "",
//     lastName: "",
//   },
//   reducers: {
//     setUser(state, action) {
//       state.id = action?.payload?.id;
//       state.username = action?.payload?.username;
//       state.email = action?.payload?.email;
//       state.firstName = action?.payload?.first_name;
//       state.lastName = action?.payload?.last_name;
//     },
//     getUser(state) {
//       const userID = state.id ;
//       return userID;
//     },
//     getNames(state) {
//       return `${state.firstName} ${state.lastName}`;
//     },
//   },
// });

// export const { setUser, getUser, getNames } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // The initial state of the user will be null since no user is logged in
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = JSON.stringify(action.payload); // Convert payload to string
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;



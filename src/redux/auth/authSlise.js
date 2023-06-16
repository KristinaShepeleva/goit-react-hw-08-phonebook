import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: biulder => {
    biulder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        console.log('state slice', state);
        console.log('action slice', action);
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(state);
        console.log(action.payload);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log(action.payload);
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;




// import { logIn, logOut, refreshUser, register } from './operations';
// const { createSlice } = require('@reduxjs/toolkit');
// const authInitialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: authInitialState,
//   extraReducers: biulder => {
//     biulder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         console.log('state slice', state);
//         console.log('action slice', action);
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(register.rejected, (state, action) => {
//         console.log(state);
//         console.log(action.payload);
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         console.log(action.payload);
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         console.log(action.payload);
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });
// export const authReducer = authSlice.reducer;
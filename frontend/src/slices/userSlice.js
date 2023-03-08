import {createReducer} from '@reduxjs/toolkit';
//import { isAuthenticated } from  '../../../backend/middlewares/auth';


const initialState = {
  loading: true,
};
export const userReducer = createReducer(initialState, {
  GET_USER_REQUEST: (state) => {
    state.loading = true;
  },
  GET_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  GET_USER_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});

export const loginReducer = createReducer(initialState, {
  LOGIN_REQUEST: (state) => {
    state.loading = true;
    state.isAuthenticated=false;
  },
  LOGIN_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuthenticated=true;
    state.user = action.payload;
           
  },
  LOGIN_FAILURE: (state, action) => {
    state.isAuthenticated=false;
    state.loading = false;
    state.error = action.payload;
  },
});





// import {createSlice} from '@reduxjs/toolkit';

// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         user: null,
//     },
//     reducers: {
//         login: (state, action) => {
//             state.user = action.payload;
//         }
//     }
// });

//  export const {login} = userSlice.actions;
// export default userReducer.reducer;
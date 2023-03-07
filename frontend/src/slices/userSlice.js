import {createReducer} from '@reduxjs/toolkit';


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
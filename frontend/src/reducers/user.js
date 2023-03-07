import {createReducer} from "@reduxjs/toolkit";

const intialState = {
    loading: true,
};
export const userReducer = createReducer(intialState, {
    GET_USER_REQUEST: (state, action) => {
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
});

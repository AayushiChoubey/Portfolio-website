import { configureStore } from "@reduxjs/toolkit";
import {userReducer,loginReducer} from "./slices/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        login : loginReducer,
    },
});


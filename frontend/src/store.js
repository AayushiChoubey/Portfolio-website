import { configureStore } from "@reduxjs/toolkit";
import {userReducer,loginReducer,updateReducer} from "./slices/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        login : loginReducer,
        update: updateReducer,
    },
});


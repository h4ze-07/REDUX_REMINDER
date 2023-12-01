import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlice";
import listReducer from './listSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        list: listReducer,
    }
})

export default store;

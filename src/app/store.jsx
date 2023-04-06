import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";

const store=configureStore({
    reducer:{
        categorys:categorySlice
    }
});

export default store    
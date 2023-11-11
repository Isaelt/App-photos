import { configureStore } from "@reduxjs/toolkit";
import info from './slices/info.slices'
export default configureStore({
    reducer: {
        info
    }
})
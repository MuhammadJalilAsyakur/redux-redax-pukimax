import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./reducers/todo-reducers";


const store = configureStore({
    reducer: {
        todo: todoReducers
    }
})

export default store;

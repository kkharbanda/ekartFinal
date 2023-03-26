import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer,ordersReducer } from "./reducers/orderReducer";
import { authReducer } from "./reducers/userReducer";


const store = configureStore({
  reducer: {
    auth: authReducer,
    cart : cartReducer,
   admin : adminReducer,
   order: orderReducer,
   orders: ordersReducer,
  },
});

export default store;

export const server = "https://ekart-f8ej.onrender.com/api/v1";

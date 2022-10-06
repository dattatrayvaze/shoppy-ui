import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import ProductReducer from '../features/Product/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    products: ProductReducer
  },
});

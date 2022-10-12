import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import ProductReducer from '../features/Product/productSlice';
import CategoriesReducer from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    category: CategoriesReducer,
    products: ProductReducer
    
  },
});

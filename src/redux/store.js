import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import productReducer from './Slices/productSlice'; // make sure the filename matches

const store = configureStore({
  reducer: {
    auth: authReducer,       // state.auth -> login, token, user info, etc.
    products: productReducer // state.products -> product list, loading, error
  },
});

export default store;

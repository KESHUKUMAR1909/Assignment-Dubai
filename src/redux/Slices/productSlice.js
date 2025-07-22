import { createSlice } from '@reduxjs/toolkit';
import { createProduct, fetchProducts } from '../Thunk/productThunk.js';// adjust path as needed

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    error: null,
    loading: false
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // assuming payload is an array of products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch products';
      })

      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload]; // add new product to the list
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Product creation failed';
      });
  }
});

export default productSlice.reducer;

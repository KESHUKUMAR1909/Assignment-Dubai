import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const createProduct = createAsyncThunk(
    'products/add',
    async (productData, thunkAPI) => {
        try {
            const response = await axios.post('https://dummyjson.com/products/add', productData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);
export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            console.log(res) // replace with actual URL
            return res.data.products;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);
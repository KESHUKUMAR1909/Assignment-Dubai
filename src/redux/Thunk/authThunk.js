import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// LOGIN THUNK
export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post(
                'https://dummyjson.com/auth/login',
                {
                    username,
                    password,
                    expiresInMins: 1000, // optional
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // withCredentials:true
                }
            );

           
            // console.log(response)
            return response.data.accessToken;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Login failed'
            );
        }
    }
);

// LOGOUT THUNK
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/logout',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Logout failed'
      );
    }
  }
);

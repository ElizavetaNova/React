import { createAsyncThunk } from '@reduxjs/toolkit';

export const productsList = createAsyncThunk(
    'api/products',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:3004/api/products');
            const data = await res.json();
            return data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);

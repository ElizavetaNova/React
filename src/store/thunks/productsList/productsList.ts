import { createAsyncThunk } from '@reduxjs/toolkit';
import { globalApiServer } from '../../../global';

export const getProductsList = createAsyncThunk(
    'api/products',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${globalApiServer}/products`);
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

export const getCategoriesList = createAsyncThunk(
    'api/categories',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${globalApiServer}/categories`);
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

export const setCheckedCategory = createAsyncThunk(
    'api/categories/check',
    async (categoryValue: string, { rejectWithValue }) => {
        
        try {
            //if (categoryValue === 'ALL') return categoryValue;
            const res = await fetch(`http://localhost:3004/products?category=${categoryValue}`);
            const data = await res.json();
            return {data, categoryValue};
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);

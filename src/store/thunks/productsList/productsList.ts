import { createAsyncThunk } from '@reduxjs/toolkit';
import { globalApiServer } from '../../../global';

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

export const getProductsWithFilters = createAsyncThunk(
    'getProductsWithFilters',
    async (props: { filterIs: boolean, name?: string, category?: string, sortedBy?: string, order?: string }, { rejectWithValue }) => {
        const { filterIs, name, category, sortedBy, order } = props;
        try {
            if (filterIs) {
                const res = await fetch(`http://localhost:3004/api/products?${category && category !== 'ALL'
                        ? `&category=${category}`
                        : ''}${sortedBy
                            ? order?.length
                                ? `&_sort=${sortedBy}&_order=${order}`
                                : `&_sort=${sortedBy}&_order=asc`
                            : ''}`);
                const data = await res.json();
                return { data, name };
            }
            const res = await fetch(`${globalApiServer}/products`);
            const data = await res.json();
            return { data, name };
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);

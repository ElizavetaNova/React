import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../interfaces/product';
import { getCategoriesList, getProductsWithFilters } from '../../thunks/productsList/productsList';

const initialState: any = {
    products: [],
    categories: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCategoriesList.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
        builder.addCase(getProductsWithFilters.fulfilled, (state, action) => {
            if (action.payload.name) {
                const products: Product[] = action.payload.data.filter((product: Product) => product.name.toLowerCase().includes(action.payload.name!.toLowerCase()));
                if (products.length > 0) {
                    state.products = products;
                } else {
                    state.products = action.payload.data;
                }
                
            } else {
                state.products = action.payload.data;
            }
        });
    },
});

export default productSlice.reducer;

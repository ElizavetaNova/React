import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../interfaces/product";
import { getCategoriesList, getProductsList, setCheckedCategory } from "../../thunks/productsList/productsList";

const initialState: any = {
    products: [],
    categories: [],
    checkedCategory: '',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProductsList.fulfilled, (state, action) => {
            console.log(action.payload);
            state.products = state.checkedCategory === ''
            ? action.payload
            : action.payload.map((product: Product) => product.category === state.checkedCategory);
        });
        builder.addCase(getCategoriesList.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
        builder.addCase(setCheckedCategory.fulfilled, (state, action) => {
            
            state.checkedCategory = action.payload.categoryValue;
            state.products = action.payload.data;
        })
    }
})

export default productSlice.reducer;
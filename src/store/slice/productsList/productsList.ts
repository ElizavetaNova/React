import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../interfaces/product";
import { productsList } from "../../thunks/productsList/productsList";

const initialState: any = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(productsList.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export default productSlice.reducer;
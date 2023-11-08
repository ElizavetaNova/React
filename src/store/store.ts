import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './slice/productsList/productsList';
// ...

const store = configureStore({
  reducer: {
    productsList: productSlice.reducer,
    // categoryList: productSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;
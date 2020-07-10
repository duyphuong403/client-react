import productReducer from '../1.slices/productSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
    products: productReducer,
}

export const store = configureStore({
    reducer: rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // React Devtool extension
});
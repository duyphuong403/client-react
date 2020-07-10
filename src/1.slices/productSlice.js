import { createSlice } from "@reduxjs/toolkit";
import data from './data/products';

const initialState = {
    list: data,
    activeId: null
};

const product = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            const removeProductId = action.payload;
            return state.filter(prod => prod.id !== removeProductId);
        },
        updateProduct: (state, action) => {
            const newProd = action.payload;
            const prodIndex = state.findIndex(prod => prod.id === newProd.id);

            if (prodIndex >= 0){
                state[prodIndex] = newProd;
            }
        }
    } 
});

const { reducer, actions } = product;
export const { addProduct, removeProduct, updateProduct } = actions;
export default reducer;
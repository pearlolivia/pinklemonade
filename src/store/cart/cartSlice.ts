import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const CartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
//             pizzaGameCompleted: (state, { payload }: PayloadAction<boolean>) => {
//                   state.pizzaChefs.completed = payload;
//             },
        updateCart: (state, { payload }) => {
            state.items = payload;
        },
    },
});

export const {
} = CartSlice.actions;

export default CartSlice.reducer;
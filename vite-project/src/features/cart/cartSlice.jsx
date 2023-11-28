// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const { item } = action.payload;
      state[item] = (state[item] || 0) + 1;
    },
    decrement: (state, action) => {
      const { item } = action.payload;
      state[item] = Math.max((state[item] || 0) - 1, 0);
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;

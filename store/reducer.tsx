import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface State {
  products: any[];
  cart: any[];
}

const initialState: State = {
  products: [],
  cart: [],
};

export const Slice = createSlice({
  name: "ecom",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload;
    },
    addToCart: (state, actions) => {
      state.cart.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      state.cart = state.cart.filter(
        (item: any) => item.id !== actions.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProducts,addToCart,removeFromCart} = Slice.actions;

export default Slice.reducer;

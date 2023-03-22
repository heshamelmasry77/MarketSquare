import { createSlice } from "@reduxjs/toolkit";
import { SET_LOADER } from "./loaderSlice"; // import the setLoadingState action

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // Here is the initial state // = data
    productsInCart: [],
    numberOfProductsInCart: 0,
  },
  //   Reducers describe how the state changes in response to actions sent to the store. Each reducer is responsible for its own slice of the state.
  reducers: {
    // Here are the functions which amend the state // mutations for state
    ADD_PRODUCT_TO_CART: (state, action) => {
      // e.g
      console.log("ADD_PRODUCT_TO_CART: action.payload", action.payload);
      state.productsInCart = [...state.productsInCart, action.payload];
      state.numberOfProductsInCart = state.productsInCart.length;
    },
  },
});
export default cartSlice.reducer;

// Actions // api calls etc
const { ADD_PRODUCT_TO_CART } = cartSlice.actions;

// Add Single Product to Cart
export const addSingleProductToCart = (productData) => (dispatch) => {
  console.log("Store productData:", productData);
  dispatch(SET_LOADER(true)); // use the setLoadingState action
  dispatch(ADD_PRODUCT_TO_CART(productData));
  dispatch(SET_LOADER(false)); // use the setLoadingState action hide the loader
};

import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsInCart: [],
        numberOfProductsInCart: 0,
    },
    reducers: { // here we write the functions which will update the state
        ADD_PRODUCT_TO_CART: (state, action) => {
            // Check if the product is already in the cart                          is my product id available in the productsInCart []
            const isProductInCart = state.productsInCart && state.productsInCart.some(product => product.id === action.payload.id);

            if (isProductInCart) {
                // If the product is already in the cart, don't add it again

            } else {
                // If the product is not in the cart, add it to the cart
                state.productsInCart = [...state.productsInCart, action.payload];
                state.numberOfProductsInCart = state.productsInCart.length;
            }
        },
        REMOVE_PRODUCT_FROM_CART:(state, action) => {
            console.log("state:",state);
            console.log("action:",action);
            state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload);
            state.numberOfProductsInCart = state.productsInCart.length;
        }
    }
})

export default cartSlice.reducer;

// Actions
const {ADD_PRODUCT_TO_CART} = cartSlice.actions;
const {REMOVE_PRODUCT_FROM_CART} = cartSlice.actions


export const addSingleProductToCart = (productData) => (dispatch) => {
    console.log("productData: ", productData);
    dispatch(ADD_PRODUCT_TO_CART(productData));
    // API CALL TO add product to the user cart in the BE
}

export const removeSingleProductFromCart = (productId) => (dispatch) => {
    console.log("productId", productId);
    dispatch(REMOVE_PRODUCT_FROM_CART(productId));
}





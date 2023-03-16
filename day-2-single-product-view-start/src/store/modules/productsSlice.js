import {createSlice} from "@reduxjs/toolkit";

// Slice
// name
// initial state
// reducers // those are the functions which amend of change the state

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        products: [],
        singleProduct: null,
        total: 0
    },
    reducers: { // Here we declare the functions which amend our state
        SET_PRODUCTS: (state, action) => { // state is the current state at this time - action: it will have the new state we get from the API call for example
            console.log("action: ", action.payload)
            state.products = action.payload
        },
        SET_SINGLE_PRODUCT: (state, action) => {
            state.singleProduct = action.payload
        }
    }
})

export default productsSlice.reducer


// Actions // API calls etc. NB: ***** WE DON'T CHANGE THE STATE HERE ******
const {SET_PRODUCTS} = productsSlice.actions
const {SET_SINGLE_PRODUCT} = productsSlice.actions
// fetch multiple products
export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data.products);

        dispatch(SET_PRODUCTS(data.products));
    } catch (e) {
        // handle any errors that occur during the API call fetch products
        return console.error(e);
    }
}

// fetch single product by ID
export const fetchSingleProduct = (id) => async (dispatch) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const singleProductData = await response.json();
        dispatch(SET_SINGLE_PRODUCT(singleProductData))
    } catch (e) {
        console.log("Error happened :( so sad man", e)
    }
}




import {createSlice} from '@reduxjs/toolkit'
import {SET_LOADER} from './loaderSlice'; // import the setLoadingState action

// Slice
// A function that accepts an initial state, an object full of reducer functions,
// and a “slice name”, and automatically generates action creators and action types that correspond to the reducers and state.
//The reducer argument is passed to createReducer()
const productsSlice = createSlice({
    name: 'products',
    initialState: { // Here is the initial state // = data
        products: [], // e.g
        singleProduct: null,
    },
    reducers: { // Here are the functions which amend the state // mutations for state
        SET_PRODUCTS: (state, action) => { // e.g
            console.log("SET_PRODUCTS: action.payload", action.payload)
            state.products = action.payload;
        },
        SET_SINGLE_PRODUCT: (state, action) => {
            console.log("SET_SINGLE_PRODUCT: action.payload", action.payload)
            state.singleProduct = action.payload;
        }
    },
});
export default productsSlice.reducer

// Actions // api calls etc
const {SET_PRODUCTS} = productsSlice.actions
const {SET_SINGLE_PRODUCT} = productsSlice.actions


// Fetch multiple products
export const fetchProducts = () => async dispatch => {
    dispatch(SET_LOADER(true)); // use the setLoadingState action
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);

        // dispatch an action with the retrieved products data
        dispatch(SET_PRODUCTS(data.products));
        // disable loader because we have the data now
        dispatch(SET_LOADER(false)); // use the setLoadingState action
    } catch (e) {
        // handle any errors that occur during fetching the products data
        return console.error(e.message);
    }
}

// Fetch single product
export const fetchProductById = (id) => async dispatch => {
    dispatch(SET_LOADER(true)); // use the SET_LOADER action
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log("Single Product Data: ", data);
        // dispatch an action with the retrieved data
        dispatch(SET_SINGLE_PRODUCT(data));
        // disable loader because we have the data now
        dispatch(SET_LOADER(false)); // use the setLoadingState action
    } catch (e) {
        // handle any errors that occur during the fetch
        return console.error(e.message);
    }
}


//
// import { createSlice } from '@reduxjs/toolkit' is a line of code used in JavaScript for importing a specific function called createSlice from the @reduxjs/toolkit library.
//
//     This function helps you write Redux reducers with less boilerplate code. It generates a slice of the Redux state and corresponding actions, and automatically handles the immutability of the state updates.
//
//     In simpler terms, this line of code allows you to use a powerful tool called createSlice to simplify the management of state in a Redux application, saving you time and effort.

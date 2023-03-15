import {createSlice} from '@reduxjs/toolkit'

// Slice
                // A function that accepts an initial state, an object full of reducer functions,
                // and a “slice name”, and automatically generates action creators and action types that correspond to the reducers and state.
                //The reducer argument is passed to createReducer()
const slice = createSlice({
    name: 'listings',
    initialState: { // Here is the initial state // = data
        products: [] // e.g
    },
    reducers: { // Here are the functions which amend the state // mutations for state
        SET_PRODUCTS: (state, action) => { // e.g
            console.log("action.payload", action.payload)
            state.products = action.payload;
        },
    },
});
export default slice.reducer

// Actions // api calls etc
const {SET_PRODUCTS} = slice.actions

export const fetchProducts = () => async dispatch => {
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);

        // dispatch an action with the retrieved data
        dispatch(SET_PRODUCTS(data.products));
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

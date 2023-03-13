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
        dispatch(SET_PRODUCTS());
    } catch (e) {
        return console.error(e.message);
    }
}


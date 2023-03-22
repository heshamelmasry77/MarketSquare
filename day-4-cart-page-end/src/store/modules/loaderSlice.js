import {createSlice} from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false,
    },
    reducers: { // are the functions responsible for amending my state
        SET_LOADER: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});


const {actions, reducer} = loaderSlice;
export default reducer;
export const {SET_LOADER} = actions;

//Actions

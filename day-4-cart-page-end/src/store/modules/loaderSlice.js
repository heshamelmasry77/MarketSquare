import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false,
    },
    reducers: {
        SET_LOADER: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export default loaderSlice.reducer;

//Actions
const { SET_LOADER } = loaderSlice.actions;

// loader
export const setLoadingState = (loadingStatus) => async dispatch => {
    console.log("loadingStatus", loadingStatus)
    dispatch(SET_LOADER(loadingStatus));
}

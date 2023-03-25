import {createSlice} from '@reduxjs/toolkit'

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        isError: false,
        errorMessage: 'Sorry we have a bad issue :('
    },
    reducers: { // here have functions which will amend the state only
        SET_ERROR: (state, action) => { // The SET_ERROR is a reducer type
            console.log(action)
            state.isError = action.payload;
        },
        SET_ERROR_MESSAGE: (state, action) => { // The SET_ERROR_MESSAGE is a reducer type
            console.log(action)
            state.errorMessage = action.payload || state.errorMessage;
        }
    }
})


const {actions, reducer} = errorSlice;
export default reducer;
const {SET_ERROR} = actions;
const {SET_ERROR_MESSAGE} = actions;

// Actions

export const setError = (hasError, errorMessage) => (dispatch) => {
    console.log(hasError)
    console.log(errorMessage)
    dispatch(SET_ERROR(hasError));
    dispatch(SET_ERROR_MESSAGE(errorMessage));
}


import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import listings from "./modules/listings.js";

const reducer = combineReducers({
    // here we will be adding reducers
    listings // NOTE: Remember this name you will use with useSelector
})
const index = configureStore({
    reducer,
})
export default index;

import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import Listings from "./modules/Listings.js";

const reducer = combineReducers({
    // here we will be adding reducers
    Listings
})
const index = configureStore({
    reducer,
})
export default index;

import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import products from "./modules/products.js";

const reducer = combineReducers({
    // here we will be adding reducers
    products // NOTE: Remember this name you will use with useSelector
})
const index = configureStore({
    reducer,
})
export default index;

import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import productsSlice from "./modules/productsSlice";
import loaderSlice from "./modules/loaderSlice"
import cartSlice from "./modules/cartSlice";
import errorSlice from "./modules/errorSlice";

const reducer = combineReducers({
    // here we will be adding reducers
    products: productsSlice, // NOTE: Remember this name you will use with useSelector
    loader: loaderSlice,
    cart: cartSlice,
    error: errorSlice
})
const index = configureStore({
    reducer,
})
export default index;

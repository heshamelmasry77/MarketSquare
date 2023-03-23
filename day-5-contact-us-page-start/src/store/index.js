import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import productsSlice from "./modules/productsSlice";
import loaderSlice from "./modules/loaderSlice"
import cartSlice from "./modules/cartSlice";

const reducer = combineReducers({
    // here we will be adding reducers
    products: productsSlice, // NOTE: Remember this name you will use with useSelector
    loader: loaderSlice,
    cart: cartSlice
})
const index = configureStore({
    reducer,
})
export default index;

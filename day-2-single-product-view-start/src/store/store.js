// this will help you create the redux store
import {configureStore} from "@reduxjs/toolkit";
// it will help you to combine all your modules E.G(products, productDetails, etc)
import {combineReducers} from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice";

// Here I am combining my modules
const reducer = combineReducers({
    //I will list my modules
    productsSlice
});

// here I am creating  my store
const store = configureStore({
    reducer,
})

export default  store;



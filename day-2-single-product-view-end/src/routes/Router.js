import React from 'react';
import {Route, Routes} from "react-router-dom";
import Products from "../components/views/Products";
import SingleProduct from "../components/views/SingleProduct";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="product/:id" element={<SingleProduct/>}/>
            </Routes>
        </>
    );
}

export default Router;

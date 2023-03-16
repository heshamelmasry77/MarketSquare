import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProductsPage from "../components/views/ProductsPage";
import SingleProductPage from "../components/views/SingleProductPage";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="products" element={<ProductsPage/>}/>
                <Route path="products">
                    <Route path=":id" element={<SingleProductPage/>} />
                </Route>
                <Route path="product/:id" element={<SingleProductPage/>}/>
            </Routes>
        </>
    );
}

export default Router;

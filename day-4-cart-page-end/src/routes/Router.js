import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../components/views/HomePage";
import ProductDetailsPage from "../components/views/ProductDetailsPage";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="products" element={<HomePage/>}/>
                <Route path="products">
                    <Route path=":id" element={<ProductDetailsPage/>}/>
                </Route>
                <Route path="product/:id" element={<ProductDetailsPage/>}/>
            </Routes>
        </>
    );
}

export default Router;

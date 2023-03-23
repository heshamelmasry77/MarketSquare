import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../components/views/HomePage";
import ProductDetailsPage from "../components/views/ProductDetailsPage";
import CartCheckOutPage from "../components/views/CartCheckOutPage";
import ContactUsPage from "../components/views/ContactUsPage";
import PageNotFound from "../components/views/PageNotFound";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<HomePage/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                <Route path="/cart" element={<CartCheckOutPage/>}/>
                <Route path="/contact-us" element={<ContactUsPage/>}/>

                {/*ONLY MATCH THIS WHEN NO OTHER ROUTES IS VALID MATCH*/}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default Router;

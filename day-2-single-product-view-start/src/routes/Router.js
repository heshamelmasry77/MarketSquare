import {Route, Routes} from "react-router-dom";
import HomePage from "../components/views/HomePage";
import ProductDetailsPage from "../components/views/ProductDetailsPage"
import CartPage from "../components/views/CartPage";

function Router(){
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<HomePage/>} />
                <Route path="/product/:id" element={<ProductDetailsPage/>} />
                <Route path="/cart" element={<CartPage/>} />
            </Routes>
        </>
    )

}
export default Router;

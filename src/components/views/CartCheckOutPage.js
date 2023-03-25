import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeSingleProductFromCart} from "../../store/modules/cartSlice";
import {Link} from "react-router-dom";

const CartCheckOutPage = () => {
    const dispatch =  useDispatch();
    const {productsInCart} = useSelector(state => state.cart);
    console.log("productsInCart: ",productsInCart);
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {productsInCart.length > 0 ? <div className="flex h-full flex-col overflow-y-scroll bg-white">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-lg font-medium text-gray-900"
                                id="slide-over-title">Shopping cart</h2>
                        </div>

                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {productsInCart.map((product, index) => (
                                        <li key={index} className="flex py-6">
                                            <div
                                                className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.thumbnail}
                                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                    className="h-full w-full object-contain object-center"/>
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div
                                                        className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href="#">{product.title}</a>
                                                        </h3>
                                                        <p className="ml-4">NOK{product.price}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                                </div>
                                                <div
                                                    className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty 1</p>

                                                    {product.id}

                                                    <div className="flex">
                                                        <button type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                onClick={()=> dispatch(removeSingleProductFromCart(product.id))}
                                                        >Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at
                            checkout.</p>
                        <div className="mt-6">
                            <a href="#"
                               className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or
                                <button type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div> : <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-600 text-xl mb-4">Sorry :( You have not added any item to your cart</p>
                    <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Item</Link>
                </div>
                }
            </div>
        </div>
    );
};

export default CartCheckOutPage;

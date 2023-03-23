import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Header = () => {
    const {numberOfProductsInCart} = useSelector(state => state.cart);
    console.log("numberOfProductsInCart: ", numberOfProductsInCart)
    return (
        <div>
            <div className="bg-white">
                <header className="relative bg-white">
                    <p className="flex h-10 items-center justify-center bg-blue-600 px-4 text-xs lg:text-sm font-medium text-white sm:px-6 lg:px-8">Get
                        free delivery on orders over NOK500</p>

                    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center">
                                {/*Logo*/}
                                <div className="flex">
                                    <NavLink to="/">
                                        <span className="font-semibold text-xs lg:text-sm">🍒 Market Square</span>
                                    </NavLink>
                                </div>
                                <div className="ml-auto flex items-center">
                                    <div className="space-x-2 lg:space-x-6 flex flex-1 items-center justify-end">
                                        <NavLink
                                            to="/"
                                            className={({isActive}) => isActive ? "underline text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800" : "text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800"}
                                        >
                                            All Products
                                        </NavLink>
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                        <NavLink
                                            to="/contact-us"
                                            className={({isActive}) => isActive ? "underline text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800" : "text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800"}>
                                            Contact Us
                                        </NavLink>
                                    </div>

                                    {/*Cart*/}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <NavLink to="/cart" className="-m-2 flex items-center p-2 group">
                                            <svg
                                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" aria-hidden="true">
                                                <path
                                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                            </svg>
                                            <span
                                                className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{numberOfProductsInCart}</span>
                                            <span className="sr-only">items in cart, view cart</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;

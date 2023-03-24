import React from 'react';
import {Link} from "react-router-dom";

const ProductListItem = ({product}) => {
    return (
        <>
            <div className="group relative flex flex-col gap-y-3">
                <div
                    className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Link to={`product/${product.id}`}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                            loading="lazy"
                        />
                    </Link>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-md text-gray-700 relative">
                            <Link to={`product/${product.id}`}>
                                <span aria-hidden="true" className="absolute inset-0"/>
                                {product.title}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">NOK{product.price}</p>
                </div>
                <Link to={`product/${product.id}`}
                      className="py-2 px-4 bg-teal-500 text-white mt-auto text-center rounded-md hover:bg-teal-600">
                    View
                </Link>
            </div>
        </>
    );
};

export default ProductListItem;

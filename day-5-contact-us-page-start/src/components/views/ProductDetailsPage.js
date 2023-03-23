import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductById} from '../../store/modules/productsSlice';
import {addSingleProductToCart} from "../../store/modules/cartSlice";

const ProductDetailsPage = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProduct(id))
    const {singleProduct, isError} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    let {id} = useParams();

    useEffect(() => {
        if (id) { //  id exists before calling fetchProduct is necessary to prevent errors.
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    return (
        <>
            {singleProduct && !isError && <div>
                <div className="bg-white">
                    <div className="pt-6">
                        {/*Image gallery*/}
                        {singleProduct.images && singleProduct.images.length >= 1 &&
                            <div
                                className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                {singleProduct.images[0] &&
                                    <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                                        <img
                                            src={singleProduct.images[0]}
                                            alt="Two each of gray, white, and black shirts laying flat."
                                            className="object-contain object-center h-72"/>
                                    </div>}

                                {singleProduct.images[1] && singleProduct.images[2] &&
                                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                            <img
                                                src={singleProduct.images[1]}
                                                alt="Model wearing plain black basic tee."
                                                className="h-full w-full object-contain object-center"/>
                                        </div>
                                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                            <img
                                                src={singleProduct.images[2]}
                                                alt="Model wearing plain gray basic tee."
                                                className="h-full w-full object-contain object-center"/>
                                        </div>
                                    </div>
                                }
                                {singleProduct.images[3] &&
                                    <div
                                        className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                                        <img
                                            src={singleProduct.images[3]}
                                            alt="Model wearing plain white basic tee."
                                            className="h-full w-full object-contain object-center"/>
                                    </div>
                                }
                            </div>
                        }


                        {/*Product info*/}
                        <div
                            className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{singleProduct.title}</h1>
                                <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{singleProduct.brand}</h2>
                            </div>

                            {/*Options*/}
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900">NOK{singleProduct.price}</p>
                                <div className="mt-10">
                                    <button type="submit"
                                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            onClick={()=> dispatch(addSingleProductToCart(singleProduct))}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div
                                className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                                {/*Description and details*/}
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{singleProduct.description}</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                    <div className="mt-4">
                                        <ul className="list-disc space-y-2 pl-4 text-sm">
                                            <li className="text-gray-400"><span
                                                className="text-gray-600 capitalize">rating: {singleProduct.rating}</span>
                                            </li>

                                            <li className="text-gray-400"><span
                                                className="text-gray-600 capitalize">stock: {singleProduct.stock}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {isError && <h1>Sorry :( an Error accord my friend..</h1>}
        </>
    );
};

export default ProductDetailsPage;

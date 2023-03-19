import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from '../../store/modules/productsSlice';
import {Link} from 'react-router-dom'

function HomePage() {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    // Note that the dispatch function is added to the useEffect() dependency array to ensure that the fetchProducts() action is only dispatched once, when the component mounts.
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative flex flex-col gap-y-3">
                                <div
                                    className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                                    />
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

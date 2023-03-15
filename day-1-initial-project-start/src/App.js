import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./store/modules/listings";

function App() {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.listings);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    console.log(products);
    return (
        <div>
            {products.map((product) => (
                <div>
                    <span>{product.title}</span>
                </div>
            ))}
        </div>
    );
}

export default App;

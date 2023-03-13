import {useDispatch, useSelector} from 'react-redux'

function App() {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.listings); // GETS YOU THE PRODUCTS FROM THE STORE
    console.log("products: ", products);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
}

export default App;

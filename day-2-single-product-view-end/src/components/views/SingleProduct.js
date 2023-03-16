import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProduct} from '../../store/modules/products';
const SingleProduct = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProduct(id))
    const {singleProduct} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    const {isLoading} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    let {id} = useParams();

    useEffect(() => {
        if (id) {
            console.log(id)
            console.log("id here", id)
            dispatch(fetchProduct(id));
        }
    }, [dispatch, id]);

    return (
        <>
            {isLoading ? <h1>loading getting your data</h1> : <div> {singleProduct.brand}</div> }
        </>
    );
};

export default SingleProduct;

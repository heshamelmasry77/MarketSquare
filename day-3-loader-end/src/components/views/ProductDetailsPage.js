import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductById} from '../../store/modules/productsSlice';

const ProductDetailsPage = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProduct(id))
    const {singleProduct} = useSelector(state => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    let {id} = useParams();

    useEffect(() => {
        if (id) { //  id exists before calling fetchProduct is necessary to prevent errors.
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    return (
        <>
            {singleProduct && <div> {singleProduct.brand}</div>}
        </>
    );
};

export default ProductDetailsPage;

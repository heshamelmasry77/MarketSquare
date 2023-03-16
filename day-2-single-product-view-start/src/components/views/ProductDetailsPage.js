import {useParams} from "react-router-dom";
import {useEffect} from "react"; // it will help me to run the function to fetch
// product by id when the component mount
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleProduct} from "../../store/modules/productsSlice";

const ProductDetailsPage = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const {singleProduct} = useSelector(state => state.productsSlice);
    console.log("id: ",id);

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [dispatch, id])

    return (
        <div>
            <h1>hello i am single product view {id}</h1>
        </div>
    );
};

export default ProductDetailsPage;

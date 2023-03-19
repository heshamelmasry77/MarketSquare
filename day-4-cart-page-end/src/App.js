import Router from "./routes/Router"
import Loader from "./components/shared/Loader";
import {useSelector} from "react-redux";

function App() {
    const {isLoading} = useSelector(state => state.loader);

    return (
        <>
            <Router/>
            {isLoading && <Loader/>}
        </>
    );
}

export default App;

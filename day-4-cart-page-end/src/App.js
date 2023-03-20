import Router from "./routes/Router"
import Loader from "./components/shared/Loader";
import Header from "./components/shared/Header";

import {useSelector} from "react-redux";

function App() {
    const {isLoading} = useSelector(state => state.loader);

    return (
        <>
            <Header/>
            <Router/>
            {isLoading && <Loader/>}
        </>
    );
}

export default App;

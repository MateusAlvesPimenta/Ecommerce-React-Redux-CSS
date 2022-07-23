import React from "react";
import { Provider } from 'react-redux'
import store from './Components/Store';
import Home from "./Components/Pages/Home";
function App()
{
    return(
        <Provider store={store}>
            <Home />
        </Provider>
    )
}
export default App;
import {createBrowserRouter} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import Home from "../pages/Home";


const Router = createBrowserRouter([
    {
        patch:"/",
        children:[
            {
                index:true,
                element:<WelcomePage/>
            },
            {
                patch:"home",
                element: <Home/>
            }
        ]

    }
])


export default Router
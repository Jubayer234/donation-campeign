import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const Route = createBrowserRouter([
    {
        path :"/",
        element : <Layout></Layout>,
        children : [
            {
                path :"/",
                element : <Home></Home>,
                loader : () => fetch('card.json')
            },
            {
                path :"/Donation",
                element : <Donation></Donation>
            },
            {
                path : "/Statistics",
                element : <Statistics></Statistics>
            }
        ]
    }
])
export default Route;
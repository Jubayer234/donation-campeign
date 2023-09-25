import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardPage from "../Pages/CardPage/CardPage";

const Route = createBrowserRouter([
    {
        path :"/",
        element : <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path :"/",
                element : <Home></Home>,
                loader : () => fetch('/card.json')
            },
            {
                path :"/Donation",
                element : <Donation></Donation>
            },
            {
                path : "/Statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/cards/:id",
                element : <CardPage></CardPage>,
                loader : () => fetch('/card.json')
            }
        ]
    }
])
export default Route;
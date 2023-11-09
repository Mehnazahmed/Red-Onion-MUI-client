import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import MealDetails from "../components/MealDetails/MealDetails";
import Register from "../components/Register/Register";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home/Home";
import OrderStatus from "../pages/Home/OrderStatus/OrderStatus";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/order-status',
                element:<OrderStatus/>
            },
            {
                path: '/checkout',
                element:<CheckOut/>
            },
            {
                path: '/meal/:mealId',
                element:<PrivateRoute>
                    <MealDetails/>
                </PrivateRoute>
            }
        ]
    }
])
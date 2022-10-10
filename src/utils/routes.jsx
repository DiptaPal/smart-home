import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main'
import Home from '../components/Home'
import ErrorPage from '../components/ErrorPage'
import Shop from '../components/Shop'
import About from '../components/About.jsx'
import Cart from "../components/Cart";
import { productsAndCartData } from "../loaders/getCart&ProductsData";

export const router = createBrowserRouter([
    {
        path: '/',
        loader: productsAndCartData,
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
])
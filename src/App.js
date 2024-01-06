import React from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './component/Header.js';
import Body from './component/Body';
import { createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';
import './index.css';
import About from './component/About.js';
import ContactUs from './component/ContactUs.js';
import Error from './component/Error.js';
import Cart from './component/Cart.js';
import RestaurantMenu from './component/RestaurantMenu.js';

const AppLayout =()=>{
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element:<AppLayout/>,
        children:[
            {
                path: '/',
                element:<Body/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/contact',
                element:<ContactUs/>
            },
            {
                path: '/cart',
                element:<Cart/>
            },
            // {
            //     path: '/restaurants/:resId',
            //     element:<RestaurantMenu/>
            // },
        ],
        errorElement:<Error/>
    },
   
    
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
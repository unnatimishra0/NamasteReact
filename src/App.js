import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
// import About from './component/About.js';
import ContactUs from "./component/ContactUs.js";
import Error from "./component/Error.js";
import Cart from "./component/Cart.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
//bridge b/w react and redux
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
// import Grocery from './component/Grocery.js';

//chunking
//on demand loading
//lazy loading
// const file = `${__dirname/component/Grocery.js}`;

// const Grocery = lazy(() => import(file));

const Grocery = lazy(() => import("./component/Grocery.js"));

const About = lazy(() => import("./component/About.js"));

const AppLayout = () => {
  const [username, setUserName] = useState();

  useEffect(() => {
   const data={
    name:'Unnati Mishra'
   }
   setUserName(data.name);

  }, []);
  //u can use context provider in sepreately for header as well as for whole component as well or wherever u want to use in code just wrap it inside userContext.provider
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:username , setUserName}}>
      <div className="app">
        {/* <UserContext.Provider value={{loggedInUser:'Elon Musk'}}>  <Header /></UserContext.Provider> */}
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

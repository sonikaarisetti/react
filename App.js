import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
//RouterProvide-> it will provide routing configuration

//chunking
//code splitting
//demand Bundling
//lazy loading
//on demand loading

const Grocery=lazy(()=>import("./components/Grocery"));
//if we import grocery using lazy loading we will not have grocery's code in the index.js file....when we click on grocery then only frocery's code will be loaded

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        // errorElement: <Error/>
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />)  earlier we rendered only applayout
root.render(<RouterProvider router={appRouter}/>);

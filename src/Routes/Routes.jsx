import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home/Home';
import AllDonations from '../Pages/Root/AllDonations/AllDonations';
import Dashboard from '../Pages/Root/Dashboard/Dashboard';
import Login from '../Pages/Root/Login/Login';



 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
        },
        {
          path:"donations",
          element:<AllDonations></AllDonations>
        },
        {
          path:"dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"login",
          element:<Login></Login>
        }
       
    ]
  },
]);

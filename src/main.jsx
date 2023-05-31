import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Offers from './Component/Offers/Offers.jsx';
import Support from './Component/Support/Support.jsx';
import LayOut from './Component/LayOut/LayOut.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/offers",
        element: <Offers></Offers>
      },
      {
        path: "/support",
        element: <Support></Support>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

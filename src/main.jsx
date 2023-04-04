import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './COMPONENT/LAout/home';
import Shop from './COMPONENT/SHOP/Shop';
import Oders from './COMPONENT/ODERS/Oders';
import Inventory from './COMPONENT/Manage-Inventory/Inventory';
import Login from './COMPONENT/Login/Login';
import cartProductLoader from './Loders/cartProdectLoder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'Order-Review'
        ,
        element:<Oders></Oders>,
        loader:cartProductLoader
      },
      {
        path:'Manage-Inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'Login',
        element:<Login></Login>
      }
      
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

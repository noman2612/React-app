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
import Proceed from './COMPONENT/Proceed Checkout/Proceed';
import SignUp from './COMPONENT/Singup/Singup';
import AuthProvider from './COMPONENT/provider/AuthProvider';
import PrivetRouter from './COMPONENT/router/PribetRouter';

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
        element:<PrivetRouter><Inventory></Inventory></PrivetRouter>
      },
      {
        path:'checkout',
        element:<PrivetRouter><Proceed></Proceed></PrivetRouter>
      }
      ,
      {
        path:'Login',
        element:<Login></Login>
      },
      {
        path:'SignUp',
        element:<SignUp></SignUp>
      }
      
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

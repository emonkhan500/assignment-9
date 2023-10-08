import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home';

import Photo from './Components/Photo/Photo';
import Team from './Components/Teeam/Team';
import ServiceDetails from './Components/Servise Details/ServiceDetails';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import PrivateRoute from './Components/Private/PrivateRoute';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,

    children:[ 
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/speakers",
        element:<PrivateRoute><Team></Team></PrivateRoute> ,
      },
      {
        path:"/photo",

        element:<PrivateRoute><Photo></Photo></PrivateRoute>
        
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> ,
        loader: ()=>fetch('../Service.json')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    
  </React.StrictMode>,
)

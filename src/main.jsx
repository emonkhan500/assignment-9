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
        element:<Team></Team>,
      },
      {
        path:"/photo",
        element:<Photo></Photo>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

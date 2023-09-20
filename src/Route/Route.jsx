import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Products/Products';

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path:"/",
          element: <Home></Home>,
        },
        {
          path:"/products",
          element: <Products></Products>
        }
      ]
    },
  ]);

export default myCreatedRoute

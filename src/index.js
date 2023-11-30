import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import HomePage from './pages/homePage';
import WisataPage from './pages/wisataPage';
import DestinationPage from './pages/destinationPage';
import KomunitasPage from './pages/komunitasPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path: "/wisata",
    element:<WisataPage/>
  },
  {
    path: "/destination",
    element:<DestinationPage/>
  },
  {
    path: "/komunitas",
    element: <KomunitasPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
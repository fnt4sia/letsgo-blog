import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import HomePage from './pages/homePage';

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
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
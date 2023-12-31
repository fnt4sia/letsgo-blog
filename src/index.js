import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import HomePage from './pages/homePage';
import WisataPage from './pages/wisataPage';
import DestinationPage from './pages/destinationPage';
import KomunitasPage from './pages/komunitasPage';
import AccountPage from './pages/accountPage';
import AddDestinationPage from './pages/addDestinationPage';
import ListBlogPage from './pages/listBlogPage';
import ListDestinationPage from './pages/listDestinationPage';
import BlogPage from './pages/blogPage';
import SearchPage from './pages/searchPage';
import LogOut from './services/logout';
import ListEventPage from './pages/listEventPage';
import AddeventPage from './pages/addEventPage';
import TestPage from './pages/testPage';
import EditPage from './pages/editPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddBlogPage from './pages/addBlogPage';

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
    path: "/destination/:id",
    element:<DestinationPage/>
  },
  {
    path: "/community",
    element: <KomunitasPage/>
  },
  {
    path: "/account/:name",
    element: <AccountPage/>
  },
  {
    path: "/addBlog",
    element: <AddBlogPage/>
  },
  {
    path: "/addDestination",
    element: <AddDestinationPage/>
  },
  {
    path: "/listBlog",
    element: <ListBlogPage/>
  },
  {
    path: "/listDestination",
    element: <ListDestinationPage/>
  },
  {
    path:"/blog/:id",
    element: <BlogPage/>
  },
  {
    path: "/search/:keyword",
    element: <SearchPage/>
  },
  {
    path: "/logout",
    element: <LogOut/>
  },
  {
    path: "/addevent",
    element: <AddeventPage/>
  },
  {
    path: "/test",
    element: <TestPage/>
  },
  {
    path: "/listEvent",
    element: <ListEventPage/>
  },
  {
    path: "/edit/:id",
    element: <EditPage/>
  },
  {
    path: "*",
    element: <>
      <p className='text-xs'>404</p>
      <h1 className='w-full h-screen grid place-items-center text-8xl font-bold text-center'>Salah Link Goblog</h1>
    </>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
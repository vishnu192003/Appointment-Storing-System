import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import AddStudent from './views/AddPatient/AddPatient';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/add-student",
    element: <AddStudent />
  },
  {
    path: "*",
    element: <h1>Not Found</h1>
  }
])

root.render(<RouterProvider router={router}/>);

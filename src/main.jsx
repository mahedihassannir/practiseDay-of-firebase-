import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import About from './Components/About.jsx/About';
import Contact from './Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "About",
        element: <About></About>
      },
      {
        path: "Contact",
        element: <Contact></Contact>
      },

      {
        path: "Login",
        element: <Login></Login>
      },
      {
        path: "Register",
        element: <Register></Register>
      },


    ]
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

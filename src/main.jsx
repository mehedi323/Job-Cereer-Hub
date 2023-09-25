import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPages from './Components/ErrorPages/ErrorPages';
import Blogs from './Components/Blogs/Blogs';
import Jobs from './Components/Jobs/Jobs';
import About from './Components/About/About';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "about",
        element: <About></About>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

import Main from "../Layout/Main";
import AboutPage from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&registration/Login";
import Registration from "../Pages/Login&registration/Registration";
import { createBrowserRouter } from 'react-router-dom'
import Message from "../Pages/Message/Message";
import Media from "../Pages/Media/Media";




export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    // errorElement:  ,
    children: [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/register",
        element: <Registration/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/message",
        element: <Message/>
      },
      {
        path: "/media",
        element: <Media/>
      },
 
     
     
    ],
  }

]);

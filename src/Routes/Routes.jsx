import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import Update from "../pages/Update/Update";
import SingleCategory from "../pages/SingleCategory/SingleCategory";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/addBook',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>,
        },
        {
          path: '/allBook',
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path: '/books/:category',
          element: <PrivateRoute><SingleCategory></SingleCategory></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.category}`)
        },
  
      ],
    },
  ]);
  
  export default router;
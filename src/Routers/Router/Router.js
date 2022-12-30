import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Sector from "../../Pages/Sector/Sector";
import Update from "../../Pages/Update/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sector",
        element: <Sector></Sector>,
      },
      {
        path: "/sector/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sector/${params.id}`),
      },
    ],
  },
]);
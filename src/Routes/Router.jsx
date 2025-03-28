import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

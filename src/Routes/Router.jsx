import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../Layouts/Mainlayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
  },
]);

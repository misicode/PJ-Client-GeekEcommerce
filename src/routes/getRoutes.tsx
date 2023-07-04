import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";

export const getRoutes = () => 
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
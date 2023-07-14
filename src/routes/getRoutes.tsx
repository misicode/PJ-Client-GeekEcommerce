import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const getRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
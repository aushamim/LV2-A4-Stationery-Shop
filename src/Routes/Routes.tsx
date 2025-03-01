import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../Pages/About/About";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Dashboard/Profile";
import MyOrders from "../Pages/Dashboard/User/MyOrders";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;

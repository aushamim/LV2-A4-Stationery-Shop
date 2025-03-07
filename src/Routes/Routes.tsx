import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../Pages/About/About";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Cart from "../Pages/Cart/Cart";
import AddProduct from "../Pages/Dashboard/Admin/AddProduct";
import AllOrders from "../Pages/Dashboard/Admin/AllOrders";
import AllProducts from "../Pages/Dashboard/Admin/AllProducts";
import Profile from "../Pages/Dashboard/Profile";
import MyOrders from "../Pages/Dashboard/User/MyOrders";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Product from "../Pages/Product/Product";
import Shop from "../Pages/Shop/Shop";
import VerifyPayment from "../Pages/VerifyPayment/VerifyPayment";
import { TResponseUser } from "../Types/global";

export const getRouter = (user: TResponseUser | null) => {
  let childRoutes = [
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
      path: "/product/:productId",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/verifyPayment",
      element: <VerifyPayment />,
    },
  ];

  if (user) {
    childRoutes.push(
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    );
  }

  if (user && user.role === "user") {
    childRoutes.push({
      path: "/dashboard/my-orders",
      element: <MyOrders />,
    });
  }

  if (user && user.role === "admin") {
    childRoutes.push(
      {
        path: "/dashboard/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/edit-product/:productId",
        element: <AddProduct />,
      },
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: childRoutes,
    },
  ]);

  return router;
};

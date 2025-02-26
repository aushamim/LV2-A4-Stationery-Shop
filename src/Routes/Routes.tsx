import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

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
    ],
  },
]);

export default router;

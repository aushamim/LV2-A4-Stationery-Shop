import { RouterProvider } from "react-router";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../../Redux/hooks";
import { getRouter } from "../../Routes/Routes";

const Layout = () => {
  const user = useAppSelector(selectCurrentUser);
  return <RouterProvider router={getRouter(user)} />;
};

export default Layout;

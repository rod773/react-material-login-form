import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import SignIn from "../SignIn";
import SignInShadow from "../SignInShadow";
import SignInSide from "../SignInSide";
import Layout from "./Layout";
import Sidenav from "./Sidenav";

const Routes = () => {
  const routesForPublic = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <SignIn />,
        },

        {
          path: "/signinshadow",
          element: <SignInShadow />,
        },
        {
          path: "/signinslide",
          element: <SignInSide />,
        },

        {
          path: "/sidenav",
          element: <Sidenav />,
          children: [
            {
              path: "/sidenav",
              element: <SignIn />,
            },
            {
              path: "/sidenav/signinshadow",
              element: <SignInShadow />,
            },
            {
              path: "/sidenav/signinslide",
              element: <SignInSide />,
            },
          ],
        },

        {
          path: "/*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routesForPublic]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;

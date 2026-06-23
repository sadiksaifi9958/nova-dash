import AppLayout from "@/layout/AppLayout";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Analytics = lazy(() => import("../pages/Analytics"));
const Login = lazy(() => import("../pages/Login"));
const Settings = lazy(() => import("../pages/Settings"));
const Users = lazy(() => import("../pages/Users"));
const Profile = lazy(() => import("../pages/Profile"));

const router = createBrowserRouter([
  {
    path: "login",
    element: (
      <Suspense fallback={<div>Loading page..</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <AppLayout />,
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<div>Loading page..</div>}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: "analytics",
            element: (
              <Suspense fallback={<div>Loading page..</div>}>
                <Analytics />
              </Suspense>
            ),
          },
          {
            path: "settings",
            element: (
              <Suspense fallback={<div>Loading page..</div>}>
                <Settings />
              </Suspense>
            ),
          },
          {
            path: "users",
            element: (
              <Suspense fallback={<div>Loading page..</div>}>
                <Users />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<div>Loading page..</div>}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

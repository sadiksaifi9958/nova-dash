import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Analytics = lazy(() => import("../pages/Analytics"));
const Login = lazy(() => import("../pages/Login"));
const Settings = lazy(() => import("../pages/Settings"));
const Users = lazy(() => import("../pages/Users"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>...Loading</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/analytics",
    element: (
      <Suspense fallback={<div>...Loading</div>}>
        <Analytics />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>...Loading</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/settings",
    element: (
      <Suspense fallback={<div>...Loading</div>}>
        <Settings />
      </Suspense>
    ),
  },
  {
    path: "/users",
    element: (
      <Suspense fallback={<div>...Loading</div>}>
        <Users />
      </Suspense>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

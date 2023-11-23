import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import { getRoom } from "../api/rooms";
import DashboardLayout from "../layouts/Dashboard";
import AddRoom from "../pages/Dashboard/Host/AddRoom";
import MyListings from "../pages/Dashboard/Host/MyListings";
import HostRoutes from "./HostRoutes";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import MyBookings from "../pages/Dashboard/Guest/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoutes>
            <RoomDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "add-room",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <AddRoom />
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-listings",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <MyListings />
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <ManageUsers />
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

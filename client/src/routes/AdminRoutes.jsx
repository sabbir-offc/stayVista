import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";

const AdminRoutes = ({ children }) => {
  const { role, isLoading } = useRole();
  const { user } = useAuth();

  if (isLoading) return <Loader />;
  if (user && role === "admin") return children;

  return <Navigate to="/dashboard" />;
};

export default AdminRoutes;

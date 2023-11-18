import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) return <Loader />;
  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRoutes;

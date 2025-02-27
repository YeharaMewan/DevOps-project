import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  return <Outlet />; // Allow access without authentication
};

export default ProtectedRoute;

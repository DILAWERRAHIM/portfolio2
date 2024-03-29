import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, admin }) => {
  if (!admin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

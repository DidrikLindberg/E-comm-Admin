import { Navigate, useLocation } from 'react-router-dom';
import AuthService from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const isLoggedIn = AuthService.loggedIn();
  // const isAdmin = AuthService.getRole() === 'admin';

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
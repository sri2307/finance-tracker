import { useAuth0 } from '@auth0/auth0-react';
import { FC, PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface PrivateRouteProps extends PropsWithChildren {}

const PrivateRoute: FC<PrivateRouteProps> = () => {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // You can use a loading spinner here
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

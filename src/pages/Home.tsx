import LoginButton from '@/components/auth/Login';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    isAuthenticated && navigate('/dashboard');
  }, [isAuthenticated]);
  return <>{isLoading ? <h1>Loading...</h1> : <LoginButton />}</>;
};

export default Home;

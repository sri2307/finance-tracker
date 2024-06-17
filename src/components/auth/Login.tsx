// src/components/LoginButton.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../shared/Button';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      label="Log In"
      variant="primary-outlined"
    />
  );
};

export default LoginButton;

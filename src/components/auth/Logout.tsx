// src/components/LogoutButton.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../shared/Button';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <Button
      label="Logout"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      variant="light"
    />
  );
};

export default LogoutButton;

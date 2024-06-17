import LogoutButton from './auth/Logout';
import Button from './shared/Button';

const Header = () => {
  return (
    <header className="header">
      <h1>Expense Tracker</h1>
      <nav>
        <Button variant="light" onClick={() => {}} label="Profile" />
        <LogoutButton />
      </nav>
    </header>
  );
};

export default Header;

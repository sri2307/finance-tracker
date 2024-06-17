import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';

const DashboardLayout = () => (
  <div className="dashboard-layout">
    <Header />
    <div className="dashboard-content">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default DashboardLayout;

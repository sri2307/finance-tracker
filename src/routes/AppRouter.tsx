// src/routes/AppRouter.tsx
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '@/components/dashboard/Layout';
import Home from '@/pages/Home';
import Expenses from '@/pages/expenses/Expenses';
import AddExpense from '@/pages/expenses/AddExpense';
import EditExpense from '@/pages/expenses/EditExpense';
import Profile from '@/pages/Profile';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="" element={<h1>Dashboard</h1>} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="edit-expense" element={<EditExpense />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
    </Routes>
  );
};

export default AppRouter;

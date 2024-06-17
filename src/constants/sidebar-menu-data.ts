import { IconType } from 'react-icons';
import {
  FaHome,
  FaDollarSign,
  FaRegListAlt,
  FaRegUserCircle,
} from 'react-icons/fa';

export interface SidebarItem {
  id: string;
  label: string;
  icon: IconType;
  href: string;
}

export const sidebarMenu: SidebarItem[] = [
  { id: '1', label: 'Home', icon: FaHome, href: '/' },
  {
    id: '2',
    label: 'Add Expense',
    icon: FaDollarSign,
    href: '/dashboard/add-expense',
  },
  {
    id: '3',
    label: 'Modify Expense',
    icon: FaDollarSign,
    href: '/dashboard/edit-expense',
  },
  {
    id: '4',
    label: 'Expenses Report',
    icon: FaRegListAlt,
    href: '/dashboard/expenses',
  },
  {
    id: '5',
    label: 'Profile',
    icon: FaRegUserCircle,
    href: '/dashboard/profile',
  },
];

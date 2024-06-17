import { sidebarMenu } from '@/constants/sidebar-menu-data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__menu">
          {sidebarMenu.map((menu) => (
            <li key={menu.id} className="sidebar__menu-item">
              <Link to={menu.href} className="sidebar__menu-link">
                <menu.icon className="sidebar__menu-icon" />
                <span className="sidebar__menu-label">{menu.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

import { NavLink } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

export default function Navbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  const navItems = isAuthenticated
    ? [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Progress', path: '/progress' },
        { name: 'Track Orders', path: '/track-orders' },
      ]
    : [
        { name: 'Login', path: '/login' },
        { name: 'Signup', path: '/signup' },
      ];

  return (
    <nav className="bg-[#121212] text-white px-10 py-6 flex justify-between items-center shadow-md">
      <div className="text-4xl font-light tracking-wide font-mono">
        Acme Corp
      </div>
      <ul className="flex space-x-8 text-xl font-semibold items-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-white underline underline-offset-4'
                  : 'text-white hover:text-gray-300'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {isAuthenticated && (
          <li>
            <button
              onClick={logout}
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

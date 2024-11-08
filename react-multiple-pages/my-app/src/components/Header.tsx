import { Outlet, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <div onClick={() => navigate('/about')} className="text-white">
              About
            </div>
          </li>
          <li className="inline-block py-2 px-4">
            <div onClick={() => navigate('/')} className="text-white">
              Dashboard
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
      {/* Page content goes here */}
    </div>
  );
}

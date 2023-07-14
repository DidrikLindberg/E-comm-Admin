import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../utils/auth';

export default function Navbar() {
  const isLoggedIn = AuthService.loggedIn();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <div className="mt-8">
            <h2 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
              Dashboard
            </h2>
            <ul className="mt-2">
              <li className="flow-root">
                <Link
                  to="/dashboard"
                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="flow-root">
                <Link
                  to="/account"
                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  <span>Account</span>
                </Link>
              </li>
              <li className="flow-root">
                <Link
                  to="/cashbot"
                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  <span>Cashbot</span>
                </Link>
              </li>
            </ul>
            <div className="py-6">
              <Link
                to="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          {!isLoggedIn && (
            <Link
              to="/login"
              className="text-sm font-semibold leading-6"

            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          {isLoggedIn && (
            <button
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 "
              onClick={handleLogout}
            >
              Log out
            </button>
          )}
        </div>
        </div>
    </nav>
  );
}

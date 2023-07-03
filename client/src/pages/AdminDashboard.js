import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/admin" className="text-xl font-bold text-gray-800">Admin Dashboard</Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <Link to="/admin/home" className="text-gray-600 hover:text-gray-800">Home</Link>
                </li>
                <li>
                  <Link to="/admin/products" className="text-gray-600 hover:text-gray-800">Product Library</Link>
                </li>
                <li>
                  <Link to="/admin/settings" className="text-gray-600 hover:text-gray-800">Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <p>Welcome, Admin User!</p>
        {/* Add more components and content specific to the dashboard */}
      </div>
    </div>
  );
};

export default AdminDashboard;

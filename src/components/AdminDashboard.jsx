import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout
    // Redirect to login page after logout
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <nav>
          <ul>
            <li><Link to="/admin">Buses</Link></li>
            <li><Link to="manageorders">manageorders</Link></li>
            <li><Link to="manageusers">manageusers</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
            <li><Link to="manageBuses">Manage Buses</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;

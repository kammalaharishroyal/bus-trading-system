import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <nav>
        <ul>
          <li><Link to="/dashboard/orders">Orders</Link></li>
          <li><Link to="/dashboard/cart">Cart</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;

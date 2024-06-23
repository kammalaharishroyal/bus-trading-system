import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/users" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="buses" activeClassName="active">Buses</NavLink>
            </li>
            <li>
              <NavLink to="orders" activeClassName="active">orders</NavLink>
            </li>
            <li>
              <NavLink to="cart" activeClassName="active">cart</NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">Logout</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;

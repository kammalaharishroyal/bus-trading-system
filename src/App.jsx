import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import BusList from './components/BusList';
import BusDetails from './components/BusDetails';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Checkout from './components/Checkout';
import OrderDetails from './components/OrderDetails';
import AdminDashboard from './components/AdminDashboard';
import ManageBuses from './components/ManageBuses';
import ManageOrders from './components/ManageOrders';
import ManageUsers from './components/ManageUsers';
import AdminSettings from './components/AdminSettings';
import './App.css';

function App() {
  return (
    <Router>
      
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
        <Route path="users/" element={<Header />} >
        <Route index element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
       
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="buses" element={<BusList />} />
        <Route path="buses/:busId" element={<BusDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:orderId" element={<OrderDetails />} />
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/admin/*" element={<AdminDashboard />}>
          <Route index element={<BusList />} />
          <Route path=':id' element={<BusDetails />} />
          <Route path="manageBuses" element={<ManageBuses />} />
          <Route path="manageorders" element={<ManageOrders />} />
          <Route path="manageusers" element={<ManageUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

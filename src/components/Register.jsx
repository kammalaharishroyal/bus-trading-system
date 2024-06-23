import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    isCustomer: true,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setFormData({
      ...formData,
      isCustomer: !formData.isCustomer,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      role: formData.isCustomer ? 'Customer' : 'User',
    });
  };
  return (
    <div className="register-container">
      <div className="register-overlay">

      </div>
      <div className="register-form">
      <Link to={'/'}><span>back</span></Link>
        <h2>Register as {formData.isCustomer ? 'Customer' : 'User'}</h2>
        <button 
          className={`toggle-button ${formData.isCustomer ? 'customer' : 'user'}`}
          onClick={handleToggle}
        >
          Register as {formData.isCustomer ? 'User' : 'Customer'}
        </button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

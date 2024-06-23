import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import img1 from '../Images/bus1.jpeg';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true); // State to toggle between user and admin login
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate an API call
    fetch('https://jsonplaceholder.typicode.com/users') // Temporary API link
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.email === email);
        if (true || user && password === 'password') { // Assume password is 'password' for demonstration
          if (isAdmin) {
            // Redirect to admin dashboard on successful admin login
            navigate('/admin');
          } else {
            // Redirect to home page on successful user login
            navigate('/users');
          }
        } else {
          setError('Invalid email or password');
        }
      })
      .catch(() => setError('Something went wrong. Please try again.'));
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={img1} alt="Bus" className="login-image" />
      </div>
      <div className="login-right">
        <div className="login-form">
          <h2>{isAdmin ? 'Admin Login' : 'User Login'}</h2>
          <button 
            className={`toggle-button ${isAdmin ? 'admin' : 'user'}`}
            onClick={() => setIsAdmin(!isAdmin)}
          >
            Switch to {isAdmin ? 'User' : 'Admin'} Login
          </button>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
            
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='use password as password'
            />
            
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="login-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/reset-password">Reset Password</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

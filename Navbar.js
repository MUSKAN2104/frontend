import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '1rem', color: '#fff' }}>
      <h1>My Website</h1>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/login" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Login</Link>
        <Link to="/signup" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
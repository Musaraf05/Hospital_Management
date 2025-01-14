// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';

// const Navbar = () => (
//   <nav className="navbar">
//      <Link to="/login">Login</Link>
//     <Link to="/manager-dashboard">Manager Dashboard</Link>
//     <Link to="/pantry-dashboard">Pantry Dashboard</Link>
//     <Link to="/delivery-dashboard">Delivery Dashboard</Link>
//   </nav>
// );

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="brand">Hospital Food Management</Link>
    <div className="nav-links">
      <Link to="/manager-dashboard">Manager Dashboard</Link>
      <Link to="/pantry-dashboard">Pantry Dashboard</Link>
      <Link to="/dietchart-dashboard">Diet Chart Dashboard</Link>
      <Link to="/delivery-dashboard">Delivery Dashboard</Link>
      <Link to="/login" className="login-btn">Login</Link>
    </div>
  </nav>
);

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <header>
      <h1>Blood Bank Management System</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default index;

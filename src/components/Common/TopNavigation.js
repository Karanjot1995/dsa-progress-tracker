// TopNavigation.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './TopNavigation.scss'; // Import the SCSS file for styling

const TopNavigation = () => {
  return (
    <nav className="top-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/editor">Editor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigation;

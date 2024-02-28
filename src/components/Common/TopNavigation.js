// TopNavigation.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './TopNavigation.scss'; // Import the SCSS file for styling

const TopNavigation = () => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('token'))
  const navigate = useNavigate();


  const logout = (e) =>{
    e.preventDefault()
    localStorage.removeItem('token')
    navigate(0);
    // window.location.reload()
  }

  return (
    <div>
      <nav className="top-navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/editor">Editor</Link>
          </li>
          {isLogged?
            <li className="logout-btn">
              <button className="btn btn-sm btn-danger" onClick={logout}>Logout</button>
            </li>
          :''}
          
        </ul>
      </nav>
    </div>

  );
};

export default TopNavigation;

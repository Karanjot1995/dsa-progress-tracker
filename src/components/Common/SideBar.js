// Sidebar.js
import React, { useState } from 'react';
import './SideBar.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const SideBar = ({users}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const getUserQuestions = (id) => {
    navigate(`/users/${id}`)
    window.location.reload()
  }

  if(users.length){

    return (
      <div className='sidebar-container'>
        <a className='menu-btn' onClick={toggleSidebar}><GiHamburgerMenu fill='red'/></a>
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
          {/* <div className="overlay"></div> */}
          <div className="sidebar-content">
            {/* <button className="toggle-btn" onClick={toggleSidebar}>
              {isOpen ? 'Close' : 'Open'} Sidebar
            </button> */}
            <div style={{'padding':'10px'}}>Other Users</div>
            <ul className="menu">
              {users.map(u=>
                // <li onClick={()=>getUserQuestions(u._id)}>{u.email.substring(0,u.email.indexOf('@'))}</li>
                <li>{u.email.substring(0,u.email.indexOf('@'))}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }else{
    return 'Loading...'
  }
};

export default SideBar;

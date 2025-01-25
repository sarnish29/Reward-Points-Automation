import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './StudentNavBar.css'; // Include your CSS for styling

const StudentNavBar = ({ setAuth }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    console.log('Logging out...'); // Debugging log
    setAuth({ isAuthenticated: false, role: '' }); // Reset auth state
    navigate('/'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3eKBrpJqokqflN1N3ooSWWLBb7H9zXgkr2-qSf0wWfOPHYQ64iMeS4pDY-z6CpQJeA&usqp=CAU" 
          alt="College Logo" 
          className="logo" 
        />
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon user-icon" />
        <h1><span className="user">Sarnish</span></h1>
        <button className="logout-button1" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default StudentNavBar;

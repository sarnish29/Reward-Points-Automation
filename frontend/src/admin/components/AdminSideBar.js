import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css'; // Include CSS for styling

const AdminSideBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown visibility
  };


  return (
    <div className="admin-sidebar">
      <br></br>
      <br></br>
      <br></br>
      <ul className="sidebar-menu">
        <li>
          <Link to="/home1">
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          {/* Handle click to toggle dropdown */}
          <div onClick={toggleDropdown} className="dropdown-link">
            <i className="fa fa-chart-line"></i> Redemption Process
          </div>
          {/* Conditionally render dropdown */}
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/ratio-page">Ratio</Link>
              </li>
              <li>
                <Link to="/proceed-page">Proceed</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/queries-page1">
            <i className="fa fa-question-circle"></i> Queries
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;

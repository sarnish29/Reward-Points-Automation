import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentSideBar.css'; // Include CSS for styling

const StudentSideBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Hook to handle navigation

  // Function to handle the Redemption Details click
  const handleRedemptionClick = () => {
    setShowDropdown(true); // Ensure dropdown is displayed
    navigate('/redemption-details'); // Navigate to Redemption Details home page
  };

  return (
    <div className="student-sidebar">
      <br></br>
      <br></br>
      <br></br>
      <ul className="sidebar-menu">
        <li>
          <Link to="/home">
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          {/* Handle click to show dropdown and redirect */}
          <div onClick={handleRedemptionClick} className="dropdown-link">
            <i className="fa fa-chart-line"></i> Redemption Details
          </div>
          {/* Conditionally render dropdown */}
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/verified-page">Verified Page</Link>
              </li>
              <li>
                <Link to="/queries-page">Queries Page</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default StudentSideBar;

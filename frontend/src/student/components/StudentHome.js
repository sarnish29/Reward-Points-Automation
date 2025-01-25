import React from 'react';
import './StudentHome.css';

const Home = () => {
  const student = {
    name: 'Sarnish C',
    regNo: '7376222CT145',
    deptyear : 'Computer Technology & 3rd Year',
    average : 1500.00,
    totalRewards: 2000.00,
    redemptiondate: '25.05.2024',
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'GOOD MORNING!! 😊';
    if (hour < 16) return 'GOOD AFTERNOON!! 😊';
    if (hour < 20) return 'GOOD EVENING!! 😊';
    return 'GOOD NIGHT!! 😊';
  };

  return (
    <div className="main-content">
      {}
      <h2 className="greeting1">{getGreeting()}</h2>
      <div className="info-row1">
        <div className="info-box">
          <span className="label">Name</span><br/>
          <span className="value">{student.name}</span>
        </div>
        <div className="info-box">
          <span className="label">Reg No</span><br/>
          <span className="value">{student.regNo}</span>
        </div>
        <div className="info-box">
          <span className="label">Department & Year</span><br/>
          <span className="value">{student.deptyear}</span>
        </div>
      </div>
      <div className="info-row2">
        <div className="info-box">
          <span className="label">Total Rewards Points</span><br/>
          <span className="value">{student.totalRewards.toFixed(2)}</span>
        </div>
        <div className="info-box">
          <span className="label">Average Rewards Points</span><br/>
          <span className="value">{student.average.toFixed(2)}</span>
        </div>
        <div className="info-box">
          <span className="label">Redemption Date</span><br/>
          <span className="value">{student.redemptiondate}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

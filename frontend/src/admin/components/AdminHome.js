import React, { useState } from 'react';
import './AdminHome.css';

const Home1 = () => {
  const [date, setDate] = useState('');
  const [year, setYear] = useState('');

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'GOOD MORNING!! 😊';
    if (hour < 16) return 'GOOD AFTERNOON!! 😊';
    if (hour < 20) return 'GOOD EVENING!! 😊';
    return 'GOOD NIGHT!! 😊';
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    setDate(''); // Clears the date input
    setYear(''); // Clears the year selection
    alert('Responses have been cleared!'); // Optional: confirmation message
  };

  return (
    <div className="main-content7">
      {/* Greeting Section */}
      <h2 className="greeting2">{getGreeting()}</h2>

      {/* Form Section */}
      <form className="form-container6" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label">
            <center>REDEMPTION DATE</center>
          </label>
          <input
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)} // Updates state
          />
        </div>

        <div className="form-row">
          <label className="form-label">
            <center>YEAR</center>
          </label>
          <select
            className="form-input"
            value={year}
            onChange={(e) => setYear(e.target.value)} // Updates state
          >
            <option value="" disabled>
              Select Year
            </option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Home1;

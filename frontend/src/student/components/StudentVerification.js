import React, { useState } from 'react';
import './StudentVerification.css'; // Assuming you have CSS for styling

const CenterPage = () => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [rewardsVerified, setRewardsVerified] = useState('');
  const [isDisabled, setIsDisabled] = useState(false); // State to control disabling of inputs

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Simulate form submission logic here
    console.log('Form Submitted:', { name, regNo, rewardsVerified });

    // Clear the form responses after submission
    setName('');
    setRegNo('');
    setRewardsVerified('');

    // Disable the inputs after clicking submit
    setIsDisabled(true);
  };

  return (
    <div className="center-page1">
      <form className="form-container1" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NAME</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            disabled={isDisabled} // Disable input after submit
            required
          />
        </div>
        <div className="form-group">
          <label>REG NO</label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Enter Reg No"
            disabled={isDisabled} // Disable input after submit
            required
          />
        </div>
        <div className="form-group">
          <label>REWARDS POINTS VERIFIED (YES/NO)</label>
          <input
            type="text"
            value={rewardsVerified}
            onChange={(e) => setRewardsVerified(e.target.value)}
            placeholder="Yes/No"
            disabled={isDisabled} // Disable input after submit
            required
          />
        </div>
        <button
          type="submit"
          className="submit-btn"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CenterPage;

import React, { useState } from 'react';
import './StudentQueries.css'; // Custom CSS file for styling

const CompliancePage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    complianceReason: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Compliance Form Submitted:', formData);

    // Clear the form fields after submission
    setFormData({
      name: '',
      regNo: '',
      complianceReason: '',
    });
  };

  return (
    <div className="compliance-page1">
      <form className="form-container2" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NAME </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>REG NO </label>
          <input
            type="text"
            name="regNo"
            value={formData.regNo}
            onChange={handleChange}
            placeholder="Enter your registration number"
            required
          />
        </div>
        <div className="form-group">
          <label>REASON FOR COMPLIANCE </label>
          <textarea
            name="complianceReason"
            value={formData.complianceReason}
            onChange={handleChange}
            placeholder="Enter the reason for compliance"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CompliancePage;

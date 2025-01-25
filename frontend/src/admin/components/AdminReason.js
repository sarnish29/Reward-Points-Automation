import React, { useState } from 'react';
import './AdminReason.css'; // Import your CSS file

const AdminReason = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    regno: '',
    mail: '',
    query: '',
    reply: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(formData); // Log form data (optional)

    // Clear the form
    setFormData({
      name: '',
      regno: '',
      mail: '',
      query: '',
      reply: ''
    });
  };

  return (
    <div className="form-container11">
      <form className="reason-form" onSubmit={handleSubmit}>
        <label>
          NAME:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          REG NO:
          <input
            type="text"
            name="regno"
            value={formData.regno}
            onChange={handleChange}
          />
        </label>
        <label>
          MAIL ID:
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
          />
        </label>
        <label>
          QUERY:
          <input
            name="query"
            value={formData.query}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          REPLY:
          <input
            name="reply"
            value={formData.reply}
            onChange={handleChange}
            style={{ height: '60px', backgroundColor: 'white', color: 'black' }}
          ></input>
        </label>
        <center><button type="submit" className="submit-button">
          SUBMIT
        </button></center>
      </form>
    </div>
  );
};

export default AdminReason;

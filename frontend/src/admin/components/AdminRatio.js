import React, { useState } from 'react';
import './AdminRatio.css'; // Importing the CSS file

const AdminRatio = () => {
  // Define initial table data
  const [data, setData] = useState([
    { id: 1, department: 'CSE', ratio: 1.2, isEditing: false },
    { id: 2, department: 'CT', ratio: 0.8, isEditing: false },
    { id: 3, department: 'IT', ratio: 1.5, isEditing: false },
    { id: 4, department: 'AIDS', ratio: 1.2, isEditing: false },
    { id: 5, department: 'AIML', ratio: 0.8, isEditing: false },
    { id: 6, department: 'BM', ratio: 1.5, isEditing: false },
    { id: 7, department: 'ISE', ratio: 1.2, isEditing: false },
    { id: 8, department: 'CSBS', ratio: 0.8, isEditing: false },
    { id: 9, department: 'TX', ratio: 1.5, isEditing: false },
    { id: 10, department: 'CE', ratio: 1.2, isEditing: false },
    { id: 11, department: 'MC', ratio: 0.8, isEditing: false },
  ]);

  // Handle click to enable editing
  const handleEdit = (id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, isEditing: !row.isEditing } : row
    );
    setData(updatedData);
  };

  // Handle input change
  const handleInputChange = (e, id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, ratio: e.target.value } : row
    );
    setData(updatedData);
  };

  return (
    <div className="table-container6">
      <table className="custom-table">
        <thead>
          <tr>
            <th>DEPARTMENT</th>
            <th>RATIO</th>
            <th>EDIT BUTTON</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.department}</td>
              <td>
                {row.isEditing ? (
                  <input
                    type="text"
                    value={row.ratio}
                    onChange={(e) => handleInputChange(e, row.id)}
                  />
                ) : (
                  row.ratio
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(row.id)}>
                  {row.isEditing ? 'Save' : 'Edit'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRatio;

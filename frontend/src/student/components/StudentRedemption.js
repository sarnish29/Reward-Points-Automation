import React, { useState } from 'react';
import './StudentRedemption.css'; // Custom CSS file for styling

const RedemptionDetails = () => {
  const [marksData] = useState({
    subjects: ['22CT401', '22CT402', '22CT403', '22CT404', '22CT405', '22CT406', '22CT407'],
    marks: [15, 15, 20, 15, 20, 15, 15],
  });

  return (
    <div className="redemption-details-page">
      <div className="header-with-box">
      <h1 class="m-0 text-2xl leading-[50px]">Rewards Points Taken for Redemption:</h1>
        <div className="box-container">
          <p>15000.00</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="marks-table-container">
        <table className="marks-table">
          <thead>
            <tr>
              {marksData.subjects.map((subject, index) => (
                <th key={index}>{subject}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {marksData.marks.map((mark, index) => (
                <td key={index}>{mark}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
      <div className="total-marks">
        <h2>Total Marks: {marksData.marks.reduce((acc, curr) => acc + curr, 0)}</h2>
      </div>
    </div>
  );
};

export default RedemptionDetails;

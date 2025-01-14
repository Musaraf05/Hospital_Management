import React from 'react';
import '../styles/table.css';

const Dashboard = ({ title, data }) => (
  <div>
    <h2>{title}</h2>
    {data.length > 0 ? (
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No data available.</p>
    )}
  </div>
);

export default Dashboard;

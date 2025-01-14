import React, { useEffect, useState } from 'react';
import { getPatients } from '../services/api';

const ManagerDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem('token');
      const data = await getPatients(token);
      setPatients(data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <table>
        <thead>
          <tr>
          <th>Name</th>
            <th>Disease</th>
            <th>Allergies</th>
            <th>Room Number</th>
            <th>Bed Number</th>
            <th>Floor Number</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact Information</th>
            <th>Emergency Contact</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
               <td>{patient.name}</td>
              <td>{patient.disease}</td>
              <td>{patient.allergies}</td>
              <td>{patient.roomNumber || 'N/A'}</td>
              <td>{patient.bedNumber || 'N/A'}</td>
              <td>{patient.floorNumber || 'N/A'}</td>
              <td>{patient.age || 'N/A'}</td>
              <td>{patient.gender || 'N/A'}</td>
              <td>{patient.contactInfo || 'N/A'}</td>
              <td>{patient.emergencyContact || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerDashboard;

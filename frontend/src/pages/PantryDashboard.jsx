import React, { useEffect, useState } from 'react';
import { getPantryTasks, getDeliveryPersonnel, assignTask } from '../services/api';
import '../styles/table.css';

const PantryDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [personnel, setPersonnel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getPantryTasks();
      const personnelData = await getDeliveryPersonnel();
      setTasks(tasksData);
      setPersonnel(personnelData);
    };
    fetchData();
  }, []);

  const handleAssign = async (taskId, personnelId) => {
    await assignTask(taskId, personnelId);
    alert('Task assigned successfully!');
  };

  return (
    <div>
      <h2>Pantry Dashboard</h2>
      <h3>Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.assignedTo || 'Unassigned'}</td>
              <td>{task.status}</td>
              <td>
                <select
                  onChange={(e) => handleAssign(task.id, e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Assign to...
                  </option>
                  {personnel.map((person) => (
                    <option key={person.id} value={person.id}>
                      {person.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PantryDashboard;

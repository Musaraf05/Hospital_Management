import React, { useEffect, useState } from 'react';
import { getAssignedDeliveries, updateDeliveryStatus } from '../services/api';
import '../styles/table.css';

const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      const data = await getAssignedDeliveries();
      setDeliveries(data);
    };
    fetchDeliveries();
  }, []);

  const handleStatusUpdate = async (deliveryId) => {
    await updateDeliveryStatus(deliveryId, 'Delivered');
    alert('Delivery status updated!');
    setDeliveries((prev) =>
      prev.map((d) => (d.id === deliveryId ? { ...d, status: 'Delivered' } : d))
    );
  };

  return (
    <div>
      <h2>Delivery Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Meal Box</th>
            <th>Patient</th>
            <th>Room</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.boxId}</td>
              <td>{delivery.patientName}</td>
              <td>{delivery.room}</td>
              <td>{delivery.status}</td>
              <td>
                {delivery.status !== 'Delivered' && (
                  <button onClick={() => handleStatusUpdate(delivery.id)}>
                    Mark as Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryDashboard;

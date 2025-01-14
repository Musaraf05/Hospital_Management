import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const login = async (email, password) => {
  return { token: 'mock-token' }; // Replace with real response structure
};

export const getPatients = async () => {
  return [
    { id: 1, name: 'John Doe', disease: 'Flu', allergies: 'None' },
    { id: 2, name: 'Jane Smith', disease: 'Diabetes', allergies: 'Pollen' },
  ];
};

// For Diet Charts
export const getDietCharts = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/diet-charts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };
  
  export const createDietChart = async (token, chartData) => {
    const response = await axios.post(`${API_BASE_URL}/diet-charts`, chartData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };
  
  // For Pantry Tasks
  export const getPantryTasks = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/pantry/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };
  
  export const assignTask = async (taskId, personnelId, token) => {
    const response = await axios.post(
      `${API_BASE_URL}/pantry/tasks/${taskId}/assign`,
      { personnelId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  };
  
  // For Delivery Personnel
  export const getDeliveryPersonnel = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/pantry/personnel`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };
  
  // For Delivery Updates
  export const getAssignedDeliveries = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/delivery`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };
  
  export const updateDeliveryStatus = async (deliveryId, status, token) => {
    const response = await axios.patch(
      `${API_BASE_URL}/delivery/${deliveryId}`,
      { status },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  };
  
// Add additional API functions for diet charts, pantry tasks, etc.

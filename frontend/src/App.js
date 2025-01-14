import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ManagerDashboard from './pages/ManagerDashboard';
import PantryDashboard from './pages/PantryDashboard';
import DeliveryDashboard from './pages/DeliveryDashboard';
import DietChartForm from './components/DietChartForm';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/pantry-dashboard" element={<PantryDashboard />} />
        <Route path="/dietchart-dashboard" element={<DietChartForm />} />
        <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
      </Routes>
    </div>
  );
};


export default App;

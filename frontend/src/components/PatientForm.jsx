import React from 'react';
import '../styles/form.css';

const PatientForm = ({ onSubmit, patient }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="Patient Name" defaultValue={patient?.name} required />
    <input type="text" placeholder="Disease" defaultValue={patient?.disease} required />
    <input type="text" placeholder="Allergies" defaultValue={patient?.allergies} />
    <button type="submit">Save</button>
  </form>
);

export default PatientForm;

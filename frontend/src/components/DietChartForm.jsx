// import React from 'react';
// import '../styles/form.css';

// const DietChartForm = ({ onSubmit, chart }) => (
//   <form onSubmit={onSubmit}>
//     <input type="text" placeholder="Morning Meal" defaultValue={chart?.morning} required />
//     <input type="text" placeholder="Evening Meal" defaultValue={chart?.evening} required />
//     <input type="text" placeholder="Night Meal" defaultValue={chart?.night} required />
//     <button type="submit">Save</button>
//   </form>
// );

// export default DietChartForm;
import React from 'react';
import '../styles/form.css';

const DietChartForm = ({ onSubmit, chart, patientDetails }) => (
  <div className="form-container">
    <h2>Create Diet Chart</h2>
    <form onSubmit={onSubmit} className="diet-chart-form">
      {/* Patient Details */}
      <div className="form-group">
        <label htmlFor="patient-name">Patient Name</label>
        <input
          id="patient-name"
          type="text"
          value={patientDetails?.name || ''}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bed-number">Bed Number</label>
        <input
          id="bed-number"
          type="text"
          value={patientDetails?.bedNumber || ''}
          required
        />
      </div>

      {/* Meal Plan */}
      <div className="form-group">
        <label htmlFor="morning">Morning Meal</label>
        <input
          id="morning"
          type="text"
          // placeholder="Enter morning meal plan"
          defaultValue={chart?.morning}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="evening">Evening Meal</label>
        <input
          id="evening"
          type="text"
          // placeholder="Enter evening meal plan"
          defaultValue={chart?.evening}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="night">Night Meal</label>
        <input
          id="night"
          type="text"
          // placeholder="Enter night meal plan"
          defaultValue={chart?.night}
          required
        />
      </div>

      {/* Specific Instructions */}
      <div className="form-group">
        <label htmlFor="instructions">Specific Instructions</label>
        <textarea
          id="instructions"
          // placeholder="Add specific instructions (e.g., 'no salt', 'low sugar')"
        
        />
      </div>
      <button type="submit" className="submit-btn">Save</button>
    </form>
  </div>
);

export default DietChartForm;

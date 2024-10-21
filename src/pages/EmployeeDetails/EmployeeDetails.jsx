import React from "react";
import { useParams } from "react-router-dom";
import Components from "../../Exports/Components";
import './EmployeeDetails.css'
function EmployeeDetails() {
  const { id } = useParams(); // This will retrieve the employee's ID from the URL

  // Fetch the employee data based on the id or display static data for now
  return (
    <div className="EmployeeDetail__mainContainer">
      <Components.SideBar />
      <div className="EmployeeDetail__content">
        <Components.Header />
        <div className="EmployeeDetail__body">
          <h2>Employee Details for ID: {id}</h2>
          {/* Display employee-specific details */}
          <p>Employee Name: Sanihussain Patel</p>
          <p>Email: Sanihussain.patel@spyne.ai</p>
          <p>Department: Product & Tech</p>
          <p>Status: Active</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;

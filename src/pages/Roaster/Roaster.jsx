import React, { useState } from "react";
import Components from "../../Exports/Components"; // Adjust path if needed
import "./Roaster.css";

function Roaster() {
  const [numEmployees, setNumEmployees] = useState(0);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [pickupTime, setPickupTime] = useState("");
  const [dropTime, setDropTime] = useState("");

  // Handle change in the number of employees
  const handleNumEmployeesChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumEmployees(count);
    setEmployeeDetails(new Array(count).fill({ name: "", email: "" }));
  };

  // Handle individual employee input change
  const handleEmployeeChange = (index, field, value) => {
    const updatedDetails = [...employeeDetails];
    updatedDetails[index] = { ...updatedDetails[index], [field]: value };
    setEmployeeDetails(updatedDetails);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Roster:", employeeDetails);
    console.log("Pickup Time:", pickupTime);
    console.log("Drop Time:", dropTime);
    // Add logic here to handle form submission (e.g., sending data to an API)
  };

  return (
    <div className="Roaster__mainContainer">
      <Components.SideBar />
      <div className="Roaster__content">
        <Components.Header />
        <div className="Roaster__body">
          <h4 className="Roaster__creationTitle">Create an Employee Roster</h4>
          <form onSubmit={handleSubmit}>
            <label>
              Number of Employees:
              <select
                value={numEmployees}
                onChange={handleNumEmployeesChange}
                className="Roaster__numEmployeesSelect"
                required
              >
                <option value="" disabled>
                  Select number
                </option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </label>
            {employeeDetails.map((employee, index) => (
              <div key={index} className="Roaster__employeeInputs">
                <input
                  type="text"
                  placeholder="Employee Name"
                  value={employee.name}
                  onChange={(e) => handleEmployeeChange(index, "name", e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Employee Email"
                  value={employee.email}
                  onChange={(e) => handleEmployeeChange(index, "email", e.target.value)}
                  required
                />
              </div>
            ))}
            <label>
              Pickup Time:
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                required
              />
            </label>
            <label>
              Drop Time:
              <input
                type="time"
                value={dropTime}
                onChange={(e) => setDropTime(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="Roaster__createButton">Create Roster</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Roaster;

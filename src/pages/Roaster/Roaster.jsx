import React, { useState, useEffect } from "react";
import Components from "../../Exports/Components"; // Adjust path if needed
import "./Roaster.css";
import axios from "axios";
import getUserDetailsFromToken from "../../HelperServices/GetUserDetails";
function Roaster() {
  const [numEmployees, setNumEmployees] = useState(3);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [pickupTime, setPickupTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [employees, setEmployees] = useState([]);
  // Initialize employee details on mount and when numEmployees changes
  useEffect(() => {
    setEmployeeDetails(new Array(numEmployees).fill({ name: "" }));
  }, [numEmployees]);

  // Handle change in the number of employees
  const handleNumEmployeesChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumEmployees(count);
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

  const getEmployees = async () => {
    try {
      const userDetails = getUserDetailsFromToken();
      const enterpriseId = userDetails.enterpriseDetails.enterpriseId;
      const response = await axios.get(
        `http://localhost:3001/api/v1/admin/employees?enterpriseId=${enterpriseId}`
      );
      setEmployees(response.data.employees);
    } catch (error) {
      console.log("omething went wrong: ", error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  if( employees){
    console.log("These are the fetched employees: ", employees);
    
  }

  return (
    <div className="Roaster__mainContainer">
      <Components.SideBar />
      <div className="Roaster__content">
        <Components.Header />
        <div className="Roaster__body">
          <h4 className="Roaster__creationTitle">Create an Employee Roster</h4>
          <form onSubmit={handleSubmit}>
            <label className="Roaster__label">
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
            <div className="Roaster__employeesDiv">
              {employeeDetails.map((employee, index) => (
                <div key={index} className="Roaster__employeeInputs">
                  <input
                    type="text"
                    placeholder="Employee Email"
                    value={employee.email}
                    onChange={(e) =>
                      handleEmployeeChange(index, "name", e.target.value)
                    }
                    required
                  />
                </div>
              ))}{" "}
            </div>
            <div className="Roaster__picupDropTime">
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
            </div>

            <button type="submit" className="Roaster__createButton">
              Create Roster
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Roaster;

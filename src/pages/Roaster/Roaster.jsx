import React, { useState, useEffect } from "react";
import Components from "../../Exports/Components"; // Adjust path if needed
import "./Roaster.css";
import axios from "axios";
import getUserDetailsFromToken from "../../HelperServices/GetUserDetails";
import { ToastContainer, toast } from "react-toastify";
function Roaster() {
  const [numEmployees, setNumEmployees] = useState(3);
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [pickupTime, setPickupTime] = useState("");
  const [dropTime, setDropTime] = useState("");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = getUserDetailsFromToken();
    const enterpriseId = userDetails.enterpriseDetails.enterpriseId;
    console.log("Employee Roster:", employeeDetails);
    console.log("Pickup Time:", pickupTime);
    console.log("Drop Time:", dropTime);
    const roasterData = {
      employeeDetails,
      pickupTime,
      dropTime,
    };
    const roasterResponse = await axios.post(
      "http://localhost:3001/api/v1/admin/create-roaster",
      { employeeDetails, pickupTime, dropTime, enterpriseId }
    );
    if (roasterResponse.status == 200) {
      toast.success("Roaster created successfully!", {
        position: "top-right",
        autoClose: 3000, // Closes after 3 seconds
      });
    } else {
      toast.error("Error creating roaster", {
        position: "top-right",
        autoClose: 3000, // Closes after 3 seconds
      });
    }
  };

  return (
    <div className="Roaster__mainContainer">
      <Components.SideBar />
      <div className="Roaster__content">
        <Components.Header />
        <div className="Roaster__body">
          <span className="Roaster__title__roaster__button"> <h4 className="Roaster__creationTitle">Create an Employee Roster</h4>
          <button className="Roaster__Button">See Roaster</button></span>
         
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
      <ToastContainer />
    </div>
  );
}

export default Roaster;

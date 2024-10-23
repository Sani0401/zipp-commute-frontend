import React, { useState } from "react";
import axios from "axios";
import Components from "../../Exports/Components";
import "./AddEmployee.css";
import getUserDetailsFromToken from "../../HelperServices/GetUserDetails";

function AddEmployee() {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    employeeEmail: "",
    dateOfJoining: "",
    gender: "",
    workLocation: "",
    address: ""
  });
  const userToken = localStorage.getItem('userToken');
  console.log("This is the user token: ", userToken);
  
const enterpriseDetails = getUserDetailsFromToken(userToken);
console.log("This is the enterprise details: ", enterpriseDetails);

const enterpriseId = enterpriseDetails?.enterpriseDetails?.enterpriseId;
console.log("This is the enterpriseId: ", enterpriseId);

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/v1/admin/add-employees", {
        employeeName: {
          firstName: employeeData.firstName,
          middleName: employeeData.middleName,
          lastName: employeeData.lastName
        },
        employeeEmail: employeeData.employeeEmail,
        dateOfJoining: employeeData.dateOfJoining,
        gender: employeeData.gender,
        workLocation: employeeData.workLocation,
        address: employeeData.address,
        enterpriseId: enterpriseId // Add enterpriseId if needed
      });
      console.log("Employee added successfully:", response.data);
    } catch (error) {
      console.error("Error adding employee:", error.response?.data || error.message);
    }
  };

  return (
    <div className="AddEmployee__mainContainer">
      <Components.SideBar />
      <div className="AddEmployee__content">
        <Components.Header />
        <div className="AddEmployee__body">
          <form onSubmit={handleSubmit} className="AddEmployee__inputContainer">
            <div className="AddEmployee__title">
              <h4>Add Employee</h4>
            </div>
            <div className="AddEmployee__detailsInputContainer">
              <p className="AddEmployee__inputTitle">Employee Name</p>
              <span className="AddEmployee__nameInputs">
                <input
                  type="text"
                  name="firstName"
                  value={employeeData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="middleName"
                  value={employeeData.middleName}
                  onChange={handleChange}
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={employeeData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </span>

              <span className="AddEmployees__secondLineInfo">
                <span>
                  <label>Employee Email</label>
                  <input
                    type="email"
                    name="employeeEmail"
                    value={employeeData.employeeEmail}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </span>
                <span>
                  <label>Date of Joining</label>
                  <input
                    type="date"
                    name="dateOfJoining"
                    value={employeeData.dateOfJoining}
                    onChange={handleChange}
                    required
                  />
                </span>
              </span>

              <span className="AddEmployees__thirdLineInfo">
                <span>
                  <label>Gender</label>
                  <input
                    type="text"
                    name="gender"
                    value={employeeData.gender}
                    onChange={handleChange}
                    placeholder="Gender"
                    required
                  />
                </span>
                <span>
                  <label>Work Location</label>
                  <input
                    type="text"
                    name="workLocation"
                    value={employeeData.workLocation}
                    onChange={handleChange}
                    placeholder="Work Location"
                    required
                  />
                </span>
              </span>

              <span className="AddEmployees__lastLineInfo">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={employeeData.address}
                  onChange={handleChange}
                  placeholder="Employee Address"
                  required
                />
              </span>

              <span className="addEmployeeButton">
                <button type="submit" className="AddEmployees__addEmplyee">
                  Add Employee
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;

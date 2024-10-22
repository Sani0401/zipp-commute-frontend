import React from "react";
import Components from "../../Exports/Components";
import "./AddEmployee.css"; // If needed, create a new CSS file or reuse the Employees.css

function AddEmployee() {
  return (
    <div className="AddEmployee__mainContainer">
      <Components.SideBar />
      <div className="AddEmployee__content">
        <Components.Header />
        <div className="AddEmployee__body">
          <div className="AddEmployee__inputContainer">
            <div className="AddEmployee__title">
              <h4>Add Employee</h4>
            </div>
            <div className="AddEmployee__detailsInputontainer">
              <p className="AddEmployee__inputTitle">Employee Name</p>
              <span className="AddEmployee__nameInputs">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Middle Name" />
                <input type="text" placeholder="Last Name" />
              </span>

              <span className="AddEmployees__secondLineInfo">
                <span>
                  <label>Employee Email</label>
                  <input type="text" placeholder="Email" />
                </span>
                <span>
                  <label>Date of Joining</label>
                  <input
                    type="text"
                    placeholder="Date of Joining"
                    type="date"
                  />
                </span>
              </span>

              <span className="AddEmployees__thirdLineInfo">
                <span>
                  <label>Gender</label>
                  <input type="text" placeholder="Gender" />
                </span>
                <span>
                  <label>Work Location</label>
                  <input type="text" placeholder="Work Location" />
                </span>
              </span>
              <span className="AddEmployees__lastLineInfo">
                
                <label>Address</label>
                <input type="text" placeholder="Employee Address" />
              </span>
              <span className="addEmployeeButton"><button className="AddEmployees__addEmplyee">Add Employee</button></span>\
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;

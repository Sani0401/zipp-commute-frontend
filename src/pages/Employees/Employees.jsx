import React from "react";
import { Link } from "react-router-dom";
import "./Employees.css";
import Components from "../../Exports/Components";

function Employees() {
  return (
    <div className="Employees__mainContainer">
      <Components.SideBar />
      <div className="Employees__content">
        <Components.Header />
        <div className="Employees__body">
          <div className="Employees__firstTab">
            <p>Employees List</p>
            <div className="Employees__firstTab__filters">
              <button className="Employess_firstTab__addEmployeesButton">
                Add Employees
              </button>
              <div className="Filters__exportImportDatas">
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="Employees__detailHeader">
            <p>Employee Name</p>
            <p>Work Email</p>
            <p>Department</p>
            <p>Employee Status</p>
          </div>
          <div className="Employees_details">
            <span className="EmployeeImageName">
              <img src="" alt="" />
              <Link to="/employees/1"> 
                <p>Sanihussain Patel</p>
              </Link>
            </span>
            <p>Sanihussain.patel@spyne.ai</p>
            <p>Product & Tech</p>
            <p>Active</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Employees;

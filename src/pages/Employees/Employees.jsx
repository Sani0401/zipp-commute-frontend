import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Employees.css";
import Components from "../../Exports/Components";

function Employees() {
  const navigate = useNavigate();
  return (
    <div className="Employees__mainContainer">
      <Components.SideBar />
      <div className="Employees__content">
        <Components.Header />
        <div className="Employees__body">
          <div className="Employees__firstTab">
            <p>Employees List</p>
            <div className="Employees__firstTab__filters">
              <button className="Employess_firstTab__addEmployeesButton" onClick={() =>{
                navigate("/add-employees")
              }}>
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
          <Link to="/employees/1">
            <div className="Employees_details">
              <span className="EmployeeImageName">
                <img src="" alt="" />
                <p>Sanihussain Patel</p>
              </span>
              <p>Sanihussain.patel@spyne.ai</p>
              <p>Product & Tech</p>
              <p>Active</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Employees;

import React from "react";
import "./SideBar.css";
import logoImage from "../../Assets/Images/icon-payroll.svg";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="SideBar__mainContainer">
      <div className="SideBar__logoContainer">
        <img src={logoImage} />
      </div>
      <div className="SideBar__list">
        <span className="SideBar__listElement" onClick={() =>{
navigate("/employees")
        }}>
          <p>Employees</p>
        </span>
        <span className="SideBar__listElement" onClick={() =>{
          navigate("/roaster")
        }}>
          <p>Roaster</p>
        </span>
        <span className="SideBar__listElement">
          <p>Rides</p>
        </span>
        <span className="SideBar__listElement">
          <p>Notification</p>
        </span>
      </div>
    </div>
  );
}

export default SideBar;

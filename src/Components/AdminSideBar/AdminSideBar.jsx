import React from "react";
import "./AdminSideBar.css";
import logoImage from "../../Assets/Images/icon-payroll.svg";
import { useNavigate } from "react-router-dom";
function AdminSideBar() {
  const navigate = useNavigate();
  return (
    <div className="SideBar__mainContainer">
      <div className="SideBar__logoContainer">
        <img src={logoImage} />
      </div>
      <div className="SideBar__list">
        <span className="SideBar__listElement" >
          <p>Enterprises</p>
        </span>
        <span className="SideBar__listElement">
          <p>Drivers</p>
        </span>
        <span className="SideBar__listElement">
          <p>Rides</p>
        </span>
        <span className="SideBar__listElement">
          <p>Settings</p>
        </span>
      </div>
    </div>
  );
}

export default AdminSideBar;

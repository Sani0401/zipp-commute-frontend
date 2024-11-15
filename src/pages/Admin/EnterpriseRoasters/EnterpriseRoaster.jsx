import React from "react";
import Components from "../../../Exports/Components";
import "./EnterpriseRoaster.css";

function EnterpriseRoaster() {
  return (
    <div className="EnterpriseRoaster__mainContainer">
      <Components.AdminSideBar />
      <div className="EnterpriseRoaster__content">
        <Components.Header />
        <div className="EnterpriseRoaster__body">
          <div className="EnterpriseRoaster__title">
            <h4>Enterprise Roasters</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseRoaster;

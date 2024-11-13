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
          <h4>Enterprise Roaster</h4>
          {/* Add your content for the Enterprise Roaster page here */}
        </div>
      </div>
    </div>
  );
}

export default EnterpriseRoaster;

import React from "react";
import Components from "../../Exports/Components";
import "./OpenRoaster.css"; // Reuse the same CSS for consistent styling

function OpenRoaster() {
  return (
    <div className="Employees__mainContainer">
      <Components.SideBar />
      <div className="Employees__content">
        <Components.Header />
        <div className="Employees__body">
          <div className="Employees__firstTab">
            <p>Open Roaster</p>
          </div>
          {/* Add any other elements or details specific to OpenRoaster here */}
        </div>
      </div>
    </div>
  );
}

export default OpenRoaster;

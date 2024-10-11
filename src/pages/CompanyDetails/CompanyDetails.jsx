import React from "react";
import "./CompanyDetails.css";
function CompanyDetails() {
  return (
    <div className="CompanyDetails__mainContainer">
      <div className="CompanyDetails__leftContainer"></div>
      <div className="CompanyDetails__rightContainer">
        <div className="CompanyDetails__rightContainer__innerContainer">
          <h4>Company Details</h4>
          <span>
            <label>Company Name</label>
            <input type="text" placeholder="Company Name" />
          </span>
          <span className="seperate_column">
            <span>
              <label>Location</label>
              <input type="text" placeholder="Location" />
            </span>
            <span>
              <label>State</label>
              <input type="text" placeholder="State" />
            </span>
          </span>
          <span>
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </span>
          <span>
            <label>Industry</label>
            <input type="text" placeholder="Industry" />
          </span>
          <span>
            <label>Number of Employees</label>
           
            <select>
              <option value="50">50+</option>
              <option value="100">100+</option>
              <option value="200">200+</option>
            </select>
          </span>
          <button className="rightContainer__submit__button">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;

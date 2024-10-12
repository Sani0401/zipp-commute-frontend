import React from "react";
import "./CompanyDetails.css";
import { useNavigate } from "react-router-dom";
function CompanyDetails() {
  const navigate = useNavigate();
  const handleChange =()=>{
navigate('/dashboard')
  }
  return (
    <div className="CompanyDetails__mainContainer">
      <div className="CompanyDetails__leftContainer"></div>
      <div className="CompanyDetails__rightContainer">
        <div className="CompanyDetails__rightContainer__innerContainer">
          <h4>Company Details</h4>
          <span>
            <label>Company Name</label>
            <input type="text" placeholder="Company Name" className="span_input" />
          </span>
          <span className="seperate_column">
            <span>
              <label>Location</label>
              <input type="text" placeholder="Location" className="span_input1" />
            </span>
            <span>
              <label>State</label>
              <input type="text" placeholder="State" className="span_input1" />
            </span>
          </span>
          <span>
            <label>Country</label>
            <input type="text" placeholder="Country" className="span_input" />
          </span>
          <span>
            <label>Industry</label>
            <input type="text" placeholder="Industry" className="span_input"/>
          </span>
          <span>
            <label>Number of Employees</label>
           
            <select>
              <option value="50">50+</option>
              <option value="100">100+</option>
              <option value="200">200+</option>
            </select>
          </span>
          <button className="rightContainer__submit__button" onClick={handleChange}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;

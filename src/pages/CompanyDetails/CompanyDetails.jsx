import React, { useState } from "react";
import "./CompanyDetails.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

function CompanyDetails() {
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState({
    enterpriseName: "",
    location: "",
    state: "",
    country: "",
    industry: "",
    no_of_employees: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails({
      ...companyDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/auth/add-enterprise-details", {
        ...companyDetails,
        adminID: localStorage.getItem("userId"), // Replace with dynamic admin ID if needed
      });

      if (response.status === 200) {
        // Store JWT in localStorage
        localStorage.setItem("userToken", response.data.token);
        // Navigate to dashboard
        navigate("/dashboard");
      } else {
        console.log("Error: ", response.data.message);
      }
    } catch (error) {
      console.error("Error submitting company details: ", error);
    }
  };

  return (
    <div className="CompanyDetails__mainContainer">
      <div className="CompanyDetails__leftContainer"></div>
      <div className="CompanyDetails__rightContainer">
        <div className="CompanyDetails__rightContainer__innerContainer">
          <h4>Company Details</h4>
          <span>
            <label>Company Name</label>
            <input
              type="text"
              name="enterpriseName"
              placeholder="Company Name"
              className="span_input"
              value={companyDetails.enterpriseName}
              onChange={handleChange}
            />
          </span>
          <span className="seperate_column">
            <span>
              <label>Location</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="span_input1"
                value={companyDetails.location}
                onChange={handleChange}
              />
            </span>
            <span>
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                className="span_input1"
                value={companyDetails.state}
                onChange={handleChange}
              />
            </span>
          </span>
          <span>
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="span_input"
              value={companyDetails.country}
              onChange={handleChange}
            />
          </span>
          <span>
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              className="span_input"
              value={companyDetails.industry}
              onChange={handleChange}
            />
          </span>
          <span>
            <label>Number of Employees</label>
            <select
              name="no_of_employees"
              value={companyDetails.no_of_employees}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="50">50+</option>
              <option value="100">100+</option>
              <option value="200">200+</option>
            </select>
          </span>
          <button
            className="rightContainer__submit__button"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;

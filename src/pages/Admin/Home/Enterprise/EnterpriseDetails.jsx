import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Components from "../../../../Exports/Components";
import "./EnterpriseDetails.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function EnterpriseDetails() {
  const { enterpriseId } = useParams();
  const [enterprise, setEnterprise] = useState({});
  const [originalEnterprise, setOriginalEnterprise] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const getEnterprise = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.post(
        "http://localhost:3001/api/v1/superadmin/get-enterprise",
        { enterpriseId: enterpriseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEnterprise(response.data.data);
      setOriginalEnterprise(response.data.data); // Store original data for comparison
    } catch (error) {
      console.error("Error fetching enterprise data:", error);
    }
  };

  useEffect(() => {
    getEnterprise();
  }, [enterpriseId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnterprise((prevEnterprise) => ({
      ...prevEnterprise,
      [name]: value,
    }));
    checkForUpdates(name, value);
  };

  // Check if any changes are made compared to the original data
  const checkForUpdates = (name, value) => {
    if (value !== originalEnterprise[name]) {
      setIsUpdated(true);
    } else {
      // Recheck all fields in case some other field was changed back to original
      const isDifferent = Object.keys(enterprise).some(
        (key) => enterprise[key] !== originalEnterprise[key]
      );
      setIsUpdated(isDifferent);
    }
  };

  return (
    <div className="EnterpriseDetails__mainContainer">
      <Components.AdminSideBar />
      <div className="EnterpriseDetails__content">
        <Components.Header />
        <div className="EnterpriseDetails__body">
          <div className="EnterpriseDetails__enterpriseTitle">
            <h4>Enterprise Details</h4>
            <button
              className="enterpriseDetails_roasterButton"
              onClick={() => {
                navigate("/enterprise/enterprise-roasters");
              }}
            >
              Visit Roaster
            </button>
          </div>
          <div className="EnterpriseDetails__dataDiv">
            <span className="EnterpriseDetails__dataDiv__first">
              <input
                type="text"
                name="enterpriseName"
                placeholder="Enterprise Name"
                className="enterpriseName"
                value={enterprise.enterpriseName || ""}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="enterpriseLocation"
                className="enterpriseLocation"
                placeholder="Enterprise Location"
                value={enterprise.enterpriseLocation || ""}
                onChange={handleInputChange}
              />
            </span>
            <span className="EnterpriseDetails__dataDiv__second">
              <input
                type="text"
                name="enterpriseState"
                placeholder="State"
                className="enterpriseState"
                value={enterprise.enterpriseState || ""}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="enterpriseCountry"
                className="enterpriseCountry"
                placeholder="Country"
                value={enterprise.enterpriseCountry || ""}
                onChange={handleInputChange}
              />
            </span>
            <input
              type="text"
              name="enterpriseEmployeeCount"
              placeholder="Number of Employees"
              className="enterpriseCount"
              value={enterprise.enterpriseEmployeeCount || ""}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="EnterpriseDetails__saveButton"
            disabled={!isUpdated}
            style={{ opacity: isUpdated ? 1 : 0.5 }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseDetails;

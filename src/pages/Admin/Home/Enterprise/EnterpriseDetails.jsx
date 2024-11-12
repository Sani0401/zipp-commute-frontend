import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Components from "../../../../Exports/Components";
import "./EnterpriseDetails.css";
import axios from "axios";

function EnterpriseDetails() {
  const { enterpriseId } = useParams();
  const [enterprise, setEnterprise] = useState({}); // Initialize as an empty object

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
    } catch (error) {
      console.error("Error fetching enterprise data:", error);
    }
  };

  useEffect(() =>{
    console.log("This is the enterprise data: ", enterprise);
    
  },[enterprise])

  useEffect(() => {
    console.log("Enterprise ID:", enterpriseId);
    getEnterprise();
  }, [enterpriseId]);

  return (
    <div className="EnterpriseDetails__mainContainer">
      <Components.AdminSideBar />
      <div className="EnterpriseDetails__content">
        <Components.Header />
        <div className="EnterpriseDetails__body">
          <div className="EnterpriseDetails__enterpriseTitle">
            <h4>Enterprise Details</h4>
            <button className="enterpriseDetails_roasterButton">Visist Roaster</button>
          </div>
          <div className="EnterpriseDetails__dataDiv">
            <span className="EnterpriseDetails__dataDiv__first">
              <input
                type="text"
                placeholder="Enterprise Name"
                className="enterpriseName"
                value={enterprise?.enterpriseName || ""}
                
              />
              <input
                type="text"
                className="enterpriseLocation"
                placeholder="Enterprise Location"
                value={enterprise?.enterpriseLocation || ""}
                
              />
            </span>
            <span className="EnterpriseDetails__dataDiv__second">
              <input
                type="text"
                placeholder="State"
                className="enterpriseState"
                value={enterprise?.enterpriseState || ""}
                
              />
              <input
                type="text"
                className="enterpriseCountry"
                placeholder="Country"
                value={enterprise?.enterpriseCountry || ""}
                
              />
            </span>
            <input
              type="text"
              placeholder="Number of Employees"
              className="enterpriseCount"
              value={enterprise?.enterpriseEmployeeCount || ""}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseDetails;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Components from "../../Exports/Components";
import "./OpenRoaster.css"; // Reuse the same CSS for consistent styling
import getUserDetailsFromToken from "../../HelperServices/GetUserDetails";
function OpenRoaster() {
  const [roasters, setRoasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the roaster data on component mount
  useEffect(() => {
    const fetchRoasters = async () => {
      try {
        const userDetails = getUserDetailsFromToken(); 
        const enterpriseId = userDetails.enterpriseDetails.enterpriseId;
        const response = await axios.get(
          `http://localhost:3001/api/v1/admin/get-roaster?enterpriseId=${enterpriseId}`
        );
        const data = response.data;

        // Group the roasters by roaster_id and count employees
        const groupedRoasters = Object.values(
          data.reduce((acc, roaster) => {
            const { roaster_id } = roaster;
            if (!acc[roaster_id]) {
              acc[roaster_id] = { roaster_id, employees: [] };
            }
            acc[roaster_id].employees.push(roaster);
            return acc;
          }, {})
        );

        setRoasters(groupedRoasters);
      } catch (error) {
        console.error("Error fetching roasters:", error);
        setError("Failed to load roasters");
      } finally {
        setLoading(false);
      }
    };

    fetchRoasters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="Employees__mainContainer">
      <Components.SideBar />
      <div className="Employees__content">
        <Components.Header />
        <div className="Employees__body">
          <div className="Employees__firstTab">
            <p>Open Roaster</p>
          </div>

          {roasters.map((roaster) => (
            <div key={roaster.roaster_id} className="Roaster__item">
              <p>Roaster ID: {roaster.roaster_id}</p>
              <p>Number of Employees: {roaster.employees.length}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenRoaster;

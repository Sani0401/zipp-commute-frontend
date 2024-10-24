import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Add Axios for API calls
import "./Employees.css";
import Components from "../../Exports/Components";
import getUserDetailsFromToken from "../../HelperServices/GetUserDetails";

function Employees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch employee data from API
  const fetchEmployees = async () => {
    try {
      const userDetails = getUserDetailsFromToken(); 
      const enterpriseId = userDetails.enterpriseDetails.enterpriseId;
      const response = await axios.get(
        `http://localhost:3001/api/v1/admin/employees?enterpriseId=${enterpriseId}`
      );
      setEmployees(response.data.employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setError("Failed to load employees");
    } finally {
      setLoading(false);
    }
  };

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
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
            <p>Employees List</p>
            <div className="Employees__firstTab__filters">
              <button
                className="Employess_firstTab__addEmployeesButton"
                onClick={() => {
                  navigate("/add-employees");
                }}
              >
                Add Employees
              </button>
              <div className="Filters__exportImportDatas">
                <p>...</p>
              </div>
            </div>
          </div>
          <div className="Employees__detailHeader">
            <p>Employee Name</p>
            <p>Work Email</p>
            <p>Department</p>
            <p>Employee Status</p>
          </div>

          {employees.length > 0 ? (
            employees.map((employee) => (
              <Link key={employee.user_id} to={`/employees/${employee.user_id}`}>
                <div className="Employees_details">
                  <span className="EmployeeImageName">
                    <p>{employee.first_name +" "+ employee.last_name  || "N/A"}</p>
                  </span>
                  <p>{employee.email || "N/A"}</p>
                  <p>{employee.role || "N/A"}</p>
                  <p>{employee.isActive ? "Active" :  "Deactive"}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No employees found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Employees;

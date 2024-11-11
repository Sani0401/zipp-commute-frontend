import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Components from "../../../Exports/Components";
import "./Home.css";
import axios from "axios";

function Home() {
  const [enterprises, setEnterprises] = useState([]);

  const getEnterprises = async () => {
    try {
      const token = localStorage.getItem("userToken");

      const response = await axios.get(
        "http://localhost:3001/api/v1/superadmin/get-enterprises",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("These are the enterprises: ", response.data.enterprises);

      setEnterprises(response.data.enterprises);
    } catch (error) {
      console.error("Error fetching enterprises:", error);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  return (
    <div className="Home__mainContainer">
      <Components.AdminSideBar />
      <div className="Home__content">
        <Components.Header />
        <div className="Home__body">
          <div className="Home__title">
            <h4 className="Home__title__text">Enterprise List</h4>
            <span className="Home__enterprise_search">
              <input
                type="text"
                placeholder="Search Enterprises"
                className="Home__enterprise__input"
              />
              <button className="Home__enterprise__input__button">Search</button>
            </span>
          </div>

          {/* Render the list of enterprises with clickable links */}
          <div className="Home__enterpriseList">
            {enterprises.map((enterprise) => (
              <Link
                to={`/enterprise/${enterprise.enterpriseId}`}
                key={enterprise.enterpriseId}
                className="Home__enterpriseItem"
              >
                <h5>{enterprise.enterpriseName}</h5>
                <p>Employees: {enterprise.numberOfEmployees}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

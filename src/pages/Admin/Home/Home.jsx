import React from "react";
import Components from "../../../Exports/Components";
import "./Home.css";

function Home() {
  return (
    <div className="Home__mainContainer">
      <Components.AdminSideBar />
      <div className="Home__content">
        <Components.Header />
        <div className="Home__body">
    
        </div>
      </div>
    </div>
  );
}

export default Home;

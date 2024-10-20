import React, { useEffect, useState } from "react";
import "./Header.css";
import Images from "../../Exports/Assets";
import helper from "../../Exports/HelperServices";
function Header() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const userDetails = helper.getUserDetails(userToken);
    console.log("This is the decrypted user details: ", userDetails);
    setUserName(userDetails.userDetails.first_name);
  }, []);
  return (
    <div className="Header__mainContainer">
      <p>Hello {userName}!</p>
      <div className="Header__leftDiv">
        <span>
          <img
            src={Images.profilePicture}
            alt="profile Image"
            className="Header__mainContainer__profileImage"
          />
          <img
            src={Images.downIcon}
            alt=""
            className="Header__mainContainer_downIcon"
          />
        </span>
      </div>
    </div>
  );
}

export default Header;

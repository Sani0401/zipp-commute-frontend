import React from "react";
import "./Header.css";
import Images from "../../Exports/Assets";
function Header() {
  return (
    <div className="Header__mainContainer">
      <p>Hello User!</p>
      <div className="Header__leftDiv">
        <span>
          <img
            src={Images.profilePicture}
            alt="profile Image"
            className="Header__mainContainer__profileImage"
          />
          <img src={Images.downIcon} alt="" className="Header__mainContainer_downIcon" />
        </span>
      </div>
    </div>
  );
}

export default Header;

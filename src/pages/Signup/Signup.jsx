import React from "react";
import "./Signup.css";
import Images from "../../Exports/Assets";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/company-details");
  };
  return (
    <div className="Signup__mainContainer">
      <div className="Signup__leftContainer">
        <img
          src={Images.logoImage}
          alt=""
          className="Signup__leftContainer__logoIcon"
        />
        <p className="Signup__leftContainer__description">
          Zoho Payroll is online payroll software that helps businesses in India
          manage their payroll operations and pay employees on time.
        </p>
        <p className="Signup__leftContainer__decriptionTitle">
          We have built Zipp Commute for:
        </p>
        <ul className="Signup__leftContainer__decriptionList">
          <li>
            <strong>Streamline</strong> your payroll process end-to-end.
          </li>
          <li>
            <strong>Automate</strong> payroll calculations and tax filings.
          </li>
          <li>
            <strong>Ensure</strong> timely payments to employees.
          </li>
          <li>
            <strong>Integrate</strong> seamlessly with other business systems.
          </li>
          <li>
            <strong>Monitor</strong> employee ride schedules and reduce human
            intervention.
          </li>
        </ul>
      </div>
      <div className="Signup__rightContainer">
        <h4 className="signup__rightContainerTitle">Create Account</h4>
        <p className="signup__rightContainerDescription">
          Please fill all the details
        </p>
        <div className="signup__rightContainerInputContainer">
          <span>
            <input
              type="text"
              className="signup__rightContainerInputContainer__fname"
              placeholder="First Name"
            />
            <input
              type="text"
              className="signup__rightContainerInputContainer__lname"
              placeholder="Last Name"
            />
          </span>
          <input
            type="text"
            placeholder="Email"
            className="SignupContainer__input"
          />
          <span>
            <input
              type="text"
              className="signup__rightContainerInputContainer__fname"
              placeholder="Password"
            />
            <input
              type="text"
              className="signup__rightContainerInputContainer__lname"
              placeholder="Confirm Password"
            />
          </span>
          <input
            type="text"
            placeholder="Phone Number"
            className="SignupContainer__input"
          />
          <span>
            <input
              type="text"
              className="signup__rightContainerInputContainer__fname"
              placeholder="City"
            />
            <input
              type="text"
              className="signup__rightContainerInputContainer__lname"
              placeholder="State"
            />
          </span>
          <input
            type="text"
            placeholder="Country"
            className="SignupContainer__input"
          />
        </div>
        <button className="SignupButton" onClick={handleSignupClick}>
          {" "}
          Signup For Now
        </button>
      </div>
    </div>
  );
}

export default Signup;

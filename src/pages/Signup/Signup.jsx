import React, { useState } from "react";
import "./Signup.css";
import Images from "../../Exports/Assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  // Function to handle API call on signup
  const handleSignup = async () => {
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      phone_number: phoneNumber,
      city: city,
      state: state,
      country: country,
    };

    try {
      // Replace with your API endpoint
      const response = await axios.post("http://localhost:3001/api/v1/auth/signup", userData);
      console.log("Signup successful:", response.data);
      navigate("/company-details"); // Navigate after successful signup
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle error (e.g., show error message to user)
    }
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="signup__rightContainerInputContainer__lname"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </span>
          <input
            type="email"
            placeholder="Email"
            className="SignupContainer__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            <input
              type="password"
              className="signup__rightContainerInputContainer__fname"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="signup__rightContainerInputContainer__lname"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </span>
          <input
            type="tel"
            placeholder="Phone Number"
            className="SignupContainer__input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <span>
            <input
              type="text"
              className="signup__rightContainerInputContainer__fname"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              className="signup__rightContainerInputContainer__lname"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </span>
          <input
            type="text"
            placeholder="Country"
            className="SignupContainer__input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button className="SignupButton" onClick={handleSignup}>
          Signup For Now
        </button>
      </div>
    </div>
  );
}

export default Signup;

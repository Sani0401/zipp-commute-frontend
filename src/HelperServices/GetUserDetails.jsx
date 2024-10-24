import {jwtDecode} from "jwt-decode";

const getUserDetailsFromToken = () => {
  try {
    // Decode the token
    const token = localStorage.getItem("userToken")
    const decodedData = jwtDecode(token);
    
    // Return the decoded data
    return decodedData;
  } catch (error) {
    console.error("Invalid token or decoding failed: ", error);
    return { message: "Invalid token", error };
  }
};

export default getUserDetailsFromToken;

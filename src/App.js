import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./Exports/Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Signup />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/company-details" element={<Pages.CompanyDetails />} />

      </Routes>
    </Router>
  );
}

export default App;

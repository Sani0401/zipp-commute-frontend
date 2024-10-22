import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./Exports/Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Signup />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/company-details" element={<Pages.CompanyDetails />} />
        <Route path="/dashboard" element={<Pages.Dashboard />} />
        <Route path="/employees" element={<Pages.Employees />} />
        <Route path="/employees/:id" element={<Pages.EmployeeDetails />} /> 
        <Route path="/add-employees" element={<Pages.AddEmployee />} /> 
      </Routes>
    </Router>
  );
}

export default App;

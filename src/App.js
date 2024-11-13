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
        <Route path="/roaster" element={<Pages.Roaster />} />
        <Route path="/open-roaster" element={<Pages.OpenRoaster />} />
        <Route path="/admin/home" element={<Pages.Home />} />
        <Route path="/enterprise/:enterpriseId" element={<Pages.EnterpriseDetails />} />
        <Route path="/enterprise/enterprise-roasters" element={<Pages.EnterpriseRoaster />} />
      </Routes>
    </Router>
  );
}

export default App;

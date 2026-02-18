
import { Routes, Route, Link } from "react-router-dom";
import Employees from "./components/Employees";
import Attendance from "./components/Attendance";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/attendance">Attendance</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </div>
    </>
  );
}


import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://hrms-lite-dvkp.onrender.com";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get(API + "/employees/").then(res=>setEmployees(res.data));
  }, []);

  const markAttendance = async (status) => {
    await axios.post(API + "/attendance/", {
      employee_id: selected,
      date: new Date().toISOString().split("T")[0],
      status
    });
    loadAttendance();
  };

  const loadAttendance = async () => {
    const res = await axios.get(API + "/attendance/" + selected);
    setRecords(res.data);
  };

  return (
    <div className="card">
      <h2>Attendance</h2>
      <select onChange={e=>setSelected(e.target.value)}>
        <option>Select Employee</option>
        {employees.map(emp=>(
          <option key={emp.id} value={emp.id}>{emp.full_name}</option>
        ))}
      </select>
      <button onClick={()=>markAttendance("Present")}>Mark Present</button>
      <button onClick={()=>markAttendance("Absent")}>Mark Absent</button>
      <button onClick={loadAttendance}>View Records</button>

      <ul>
        {records.map(r=>(
          <li key={r.id}>{r.date} - {r.status}</li>
        ))}
      </ul>
    </div>
  );
}

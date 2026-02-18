
import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://hrms-lite-dvkp.onrender.com";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ employee_id:"", full_name:"", email:"", department:"" });

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API + "/employees/");
      setEmployees(res.data);
    } catch {
      setError("Failed to load employees");
    }
    setLoading(false);
  };

  useEffect(() => { fetchEmployees(); }, []);

  const addEmployee = async () => {
    try {
      await axios.post(API + "/employees/", form);
      fetchEmployees();
    } catch (err) {
      setError(err.response?.data?.detail || "Error adding employee");
    }
  };

  const deleteEmployee = async (id) => {
    await axios.delete(API + "/employees/" + id);
    fetchEmployees();
  };

  return (
    <div>
      <div className="card">
        <h2>Add Employee</h2>
        <input placeholder="Employee ID" onChange={e=>setForm({...form, employee_id:e.target.value})} />
        <input placeholder="Full Name" onChange={e=>setForm({...form, full_name:e.target.value})} />
        <input placeholder="Email" onChange={e=>setForm({...form, email:e.target.value})} />
        <input placeholder="Department" onChange={e=>setForm({...form, department:e.target.value})} />
        <button onClick={addEmployee}>Add</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </div>

      <div className="card">
        <h2>Employee List</h2>
        {loading ? <p>Loading...</p> : (
          employees.length === 0 ? <p>No employees found</p> :
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.employee_id}</td>
                  <td>{emp.full_name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td><button onClick={()=>deleteEmployee(emp.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

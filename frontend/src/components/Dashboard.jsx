
import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://127.0.0.1:8000";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(API + "/employees/").then(res=>setCount(res.data.length));
  }, []);

  return (
    <div className="card">
      <h2>Dashboard Summary</h2>
      <p>Total Employees: {count}</p>
    </div>
  );
}

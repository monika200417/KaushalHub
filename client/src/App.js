import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>KaushalHub</h1>

        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
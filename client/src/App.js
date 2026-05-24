import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import MyProposals from "./pages/MyProposals";
import ProjectProposals from "./pages/ProjectProposals";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-proposals" element={<MyProposals />} />
        <Route path="/project-proposals/:projectId" element={<ProjectProposals />} />
  
  


      </Routes>
    </Router>
  );
}

export default App;
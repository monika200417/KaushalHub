import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import MyProposals from "./pages/MyProposals";
import ProjectProposals from "./pages/ProjectProposals";
import ProtectedRoute from "./components/ProtectedRoute";
import MyProjects from "./pages/MyProjects";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route 
          path="/my-proposals"
          element={
            <ProtectedRoute allowedRole="freelancer">
              <MyProposals />
            </ProtectedRoute>
          }
        />
        <Route path="/project-proposals/:projectId" element={<ProjectProposals />} />
        <Route 
          path="/create-project"
          element={
            <ProtectedRoute allowedRole="client">
              <CreateProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="client">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project-proposals/:projectId"
          element={
            <ProtectedRoute allowedRole="client">
              <ProjectProposals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-projects"
          element={
            <ProtectedRoute allowedRole="client">
              <MyProjects />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
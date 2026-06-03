import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
function Sidebar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="hidden md:block w-64 min-w-[16rem] bg-white shadow-lg min-h-screen p-6 sticky top-0">
      <h1 className="text-3xl font-bold text-primary mb-12 border-b pb-4">
        KaushalHub
      </h1>

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:text-primary"
      >
        ← Back
      </button>

      <div className="flex flex-col gap-5">
        <Link
          to="/"
          className="text-gray-700 hover:text-primary font-medium hover:bg-gray-100 px-3 py-2 rounded-lg transition"
        >
          Home
        </Link>

        <p className="text-xs uppercase text-gray-400 mt-2 mb-1">
          Navigation
        </p>

        {/* Client Links */}
        {role === "client" && (
          <>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-primary font-medium hover:bg-gray-100 px-3 py-2 rounded-lg transition"
            >
              Dashboard
            </Link>

            <Link
              to="/create-project"
              className="text-gray-700 hover:text-primary font-medium hover:bg-gray-100 px-3 py-2 rounded-lg transition"
            >
              Create Project
            </Link>

            <Link
              to="/my-projects"
              className="text-gray-700 hover:text-primary font-medium hover:bg-gray-100 px-3 py-2 rounded-lg transition"
            >
              My Projects
            </Link>
          </>
        )}

        {/* Freelancer Links */}
        {role === "freelancer" && (
          <Link
            to="/my-proposals"
            className="text-gray-700 hover:text-primary font-medium hover:bg-gray-100 px-3 py-2 rounded-lg transition"
          >
            My Proposals
          </Link>
        )}

        <p className="text-xs uppercase text-gray-400 mt-6 mb-1">
          Account
        </p>

        <Button
  variant="accent"
  onClick={handleLogout}
  className="mt-6 w-full"
>
  Logout
</Button>
      </div>
    </div>
  );
}

export default Sidebar;
import { Link } from "react-router-dom";

function Navbar() {
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 md:py-5 border-b bg-white shadow-sm gap-4">
      <h1 className="text-3xl font-bold text-primary">
        KaushalHub
      </h1>

      <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium items-center">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>

        {/* Freelancer Links */}
        {role === "freelancer" && (
          <Link to="/my-proposals" className="hover:text-primary">
            My Proposals
          </Link>
        )}

        {/* Client Links */}
        {role === "client" && (
          <Link
            to="/dashboard"
            className="hover:text-primary"
          >
            Dashboard
          </Link>
        )}

        {/* Logged Out */}
        {!role && (
          <>
            <Link to="/login" className="hover:text-primary">
              Login
            </Link>

            <Link to="/register" className="hover:text-primary">
              Register
            </Link>
          </>
        )}

        {/* Logged In */}
        {role && (
          <button
            onClick={handleLogout}
            className="bg-accent hover:bg-accentDark text-white px-4 py-2 rounded-xl transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
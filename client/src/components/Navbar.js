function Navbar() {
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b bg-white shadow-sm">
      <h1 className="text-3xl font-bold text-blue-600">
        KaushalHub
      </h1>

      <div className="flex gap-6 text-gray-700 font-medium items-center">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>

        {/* Freelancer Links */}
        {role === "freelancer" && (
          <a
            href="/my-proposals"
            className="hover:text-blue-600"
          >
            My Proposals
          </a>
        )}

        {/* Client Links */}
        {role === "client" && (
          <>
            <a
              href="/dashboard"
              className="hover:text-blue-600"
            >
              Dashboard
            </a>
          </>
        )}

        {/* Logged Out */}
        {!role && (
          <>
            <a href="/login" className="hover:text-blue-600">
              Login
            </a>

            <a href="/register" className="hover:text-blue-600">
              Register
            </a>
          </>
        )}

        {/* Logged In */}
        {role && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
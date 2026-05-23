function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b bg-white shadow-sm">
      <h1 className="text-3xl font-bold text-blue-600">
        KaushalHub
      </h1>

      <div className="flex gap-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>

        <a href="/login" className="hover:text-blue-600">
          Login
        </a>

        <a href="/register" className="hover:text-blue-600">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
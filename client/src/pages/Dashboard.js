import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <section className="py-20 px-6 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Client Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Create Project */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">
                Create Project
              </h2>

              <p className="text-gray-600 mb-6">
                Post a new project and hire freelancers.
              </p>

              <a
                href="/create-project"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
              >
                Create Now
              </a>
            </div>

            {/* Manage Projects */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">
                Manage Projects
              </h2>

              <p className="text-gray-600 mb-6">
                View all your posted projects and proposals.
              </p>

              <a
                href="/create-project"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
              >
                View Projects
              </a>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">
                Activity
              </h2>

              <p className="text-gray-600 mb-6">
                Track freelancer interactions and hiring progress.
              </p>

              <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
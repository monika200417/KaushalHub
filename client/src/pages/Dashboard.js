import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
function Dashboard() {
  return (
    <div>
      <div className="flex">
  <Sidebar />

  <div className="flex-1 p-6">

      <section className="py-10 px-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Client Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Create Project */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Create Project
              </h2>

              <p className="text-gray-600 mb-6">
                Post a new project and hire freelancers.
              </p>

              <a
                href="/create-project"
                className="bg-primary hover:bg-primaryDark text-white px-5 py-3 rounded-xl"
              >
                Create Now
              </a>
            </Card>

            {/* Manage Projects */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Manage Projects
              </h2>

              <p className="text-gray-600 mb-6">
                View all your posted projects and proposals.
              </p>

              <a
                href="/my-projects"
                className="bg-primary hover:bg-primaryDark text-white px-5 py-3 rounded-xl"
              >
                View Projects
              </a>
            </Card>

            {/* Activity */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Activity
              </h2>

              <p className="text-gray-600 mb-6">
                Track freelancer interactions and hiring progress.
              </p>

              <button className="bg-accent hover:bg-accentDark text-white px-5 py-3 rounded-xl">
                Coming Soon
              </button>
            </Card>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
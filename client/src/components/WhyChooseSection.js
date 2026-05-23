const features = [
  {
    title: "Multilingual Access",
    description: "Use the platform in your preferred Indian language.",
    icon: "🌐",
  },
  {
    title: "Local + Remote Work",
    description: "Find nearby services or remote freelance opportunities.",
    icon: "📍",
  },
  {
    title: "Trusted Profiles",
    description: "Workers build trust through ratings and reviews.",
    icon: "⭐",
  },
  {
    title: "Easy Connections",
    description: "Customers and workers can connect quickly and easily.",
    icon: "🤝",
  },
];

function WhyChooseSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Why Choose KaushalHub?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Empowering workers and customers across India through one unified platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
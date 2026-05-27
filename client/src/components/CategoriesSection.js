const categories = [
  { title: "Developer", icon: "💻" },
  { title: "Designer", icon: "🎨" },
  { title: "Electrician", icon: "🔧" },
  { title: "Tutor", icon: "📚" },
  { title: "Delivery", icon: "🚚" },
  { title: "Photographer", icon: "📷" },
];

function CategoriesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Explore Categories
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Discover opportunities across multiple professions and skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-primary hover:bg-primaryDark transition rounded-2xl p-8 text-center shadow-sm hover:shadow-lg cursor-pointer"
            >
              <div className="text-5xl mb-4">
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
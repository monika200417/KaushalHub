function HeroSection() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-b from-primary to-white">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
        Connecting India’s <span className="text-white">Skills</span>
        <br />
        with Opportunities
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Find trusted freelancers, local workers, and skilled professionals
        across India in your preferred language.
      </p>

      <div className="mt-10 flex justify-center gap-5">
        <button className="bg-primary hover:bg-primaryDark text-white px-6 py-3 rounded-xl font-semibold shadow-md">
          Find Work
        </button>

        <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold">
          Hire Talent
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
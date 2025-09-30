const Hero = () => {
  return (
    <section
      className="relative h-[70vh] bg-container bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-fashion.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">
          Discover Your Style
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Minimal, Modern, and Timeless Apparel
        </p>
        <a
          href="#products"
          className="bg-white text-black py-3 px-8 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

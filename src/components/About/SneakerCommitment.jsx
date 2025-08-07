export default function SneakerCommitment() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative flex justify-center">
          <img
            src="/images/nike-5020608_1280.jpg"
            alt="Production"
            className="rounded-xl shadow-lg w-[60%] h-[280px] object-cover"
          />
          <img
            src="/images/sneaker2.jpg"
            alt="Community"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/8 -translate-y-1/8 w-[50%] rounded-xl z-10"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Commitment <br /> To Sneaker Culture
          </h2>
          <div className="text-gray-600 space-y-1">
            <p>We don’t just sell sneakers — we live them.</p>
            <p>Every pair tells a story of style and innovation.</p>
            <p>We’re committed to authenticity, design, and community spirit.</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Let's Go
          </button>
        </div>
      </div>
    </section>
  );
}
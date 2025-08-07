export default function SneakerJourney() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <img
          src="/images/nike-5020608_1280.jpg"
          alt="Sneaker Left"
          className="w-full lg:w-1/3 rounded-2xl shadow-lg"
        />
        <div className="w-full lg:w-1/3 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Sneaker Journey</h2>
          <p className="text-lg text-gray-600">
            Discover how our passion for sneakers started and evolved into a
            community-driven brand dedicated to style and comfort.
          </p>
        </div>
        <img
          src="/images/prem.jpg"
          alt="Sneaker Right"
          className="w-full lg:w-1/3 rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
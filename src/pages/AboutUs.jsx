import React, { useState } from 'react';

function StepProgressBar({ steps, currentStep, onBack, onNext }) {
  const progressPercent = ((currentStep - 1) / (steps - 1)) * 100;

  return (
    <div className="relative w-full max-w-xl h-10 flex items-center select-none mx-auto">
      {/* Back button - "1" */}
      <button
        onClick={onBack}
        disabled={currentStep === 1}
        className={`
          absolute left-0 z-20 w-8 h-8 rounded-full
          flex items-center justify-center
          font-semibold text-gray-700
          bg-white shadow
          ${currentStep === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300 cursor-pointer'}
        `}
        aria-label="Go to step 1"
      >
        1
      </button>

      {/* Progress bar container */}
      <div className="flex-1 h-3 bg-gray-300 rounded-full mx-12 relative">
        <div
          className="bg-gray-700 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Next button - "5" */}
      <button
        onClick={onNext}
        disabled={currentStep === steps}
        className={`
          absolute right-0 z-20 w-8 h-8 rounded-full
          flex items-center justify-center
          font-semibold text-white
          shadow
          ${currentStep === steps ? 'cursor-not-allowed opacity-50 bg-gray-500' : 'bg-orange-500 hover:bg-orange-600 cursor-pointer'}
        `}
        aria-label={`Go to step ${steps}`}
      >
        {steps}
      </button>
    </div>
  );
}

export default function About() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = 5;

  const handleNext = () => {
    if (activeStep < steps) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep((prev) => prev - 1);
  };

  return (
    <section className="bg-white m-0 p-0">
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative text-white text-5xl font-extrabold tracking-wide z-10">
          About Us
        </h1>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 mt-16 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
      </div>

      {/* Our Sneaker Journey Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/3">
              <img
                src="/images/nike-5020608_1280.jpg"
                alt="Sneaker Side Left"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="w-full lg:w-1/3 text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Sneaker Journey</h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Sneaker story began with a love for sneakers. We've evolved into a hub for innovation,
                style, and community — uniting enthusiasts globally with our curated selection and
                passion-driven approach.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
                Let's Go —
              </button>
            </div>
            <div className="w-full lg:w-1/3">
              <img
                src="/images/istockphoto-1346094881-1024x1024.jpg"
                alt="Sneaker Side Right"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative flex justify-center">
            <img
              src="/images/nike-5020608_1280.jpg"
              alt="Sneaker production"
              className="rounded-xl shadow-lg w-[60%] h-[280px] object-cover"
            />
            <img
              src="/images/sneaker2.jpg"
              alt="Sneaker community"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/8 -translate-y-1/8 w-[50%] rounded-xl z-10"
            />
          </div>
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-3xl font-bold text-gray-800 leading-snug">
              Our Commitment <br /> To Sneaker Culture
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-0.5">
              <p>We don’t just sell sneakers — we live them.</p>
              <p>Every pair in our collection tells a story of style and innovation.</p>
              <p>We’re committed to authenticity, design, and community spirit.</p>
              <p>Join us as we shape the future of sneaker culture.</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-200">
              Let's Go
            </button>
          </div>
        </div>
      </section>

      {/* What Our Customers Say Section */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-500 mb-2">Our Customers Say</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              What Our <br /> Customers Say
            </h2>
          </div>
          <div className="flex flex-col md:flex-row bg-gray-100 rounded-l shadow-lg overflow-hidden">
            <div className="md:w-1/3 h-72 md:h-auto">
              <img
                src="/images/men ph.jpg"
                alt="Customer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center space-y-5">
              <p className="text-gray-600 text-lg leading-relaxed mb-3">
                “As a sneaker enthusiast, I appreciate the attention to detail and quality of Sneak Haven's collection. Each pair feels like a work of art.”
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-3">10/10 recommend</p>
              <div>
                <h4 className="font-semibold text-gray-800 text-xl">Jason M.</h4>
                <p className="text-sm text-gray-500">Market Analytics</p>

                {/* Stepper Section with buttons inside linear bar */}
                <div className="py-16">
                  <StepProgressBar
                    steps={steps}
                    currentStep={activeStep}
                    onBack={handleBack}
                    onNext={handleNext}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
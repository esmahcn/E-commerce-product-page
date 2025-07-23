import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function StepProgressBar({ steps, currentStep, onBack, onNext }) {
  const progressPercent = ((currentStep - 1) / (steps - 1)) * 100;

  return (
    <div className="relative w-40 h-3 flex items-center">
      <div className="flex-1 h-3 bg-gray-300 rounded-full relative">
        <div
          className="bg-gray-700 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
        <button
          onClick={onBack}
          disabled={currentStep === 1}
          className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full z-10
            flex items-center justify-center font-semibold text-gray-700 bg-white shadow
            ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          1
        </button>
        <button
          onClick={onNext}
          disabled={currentStep === steps}
          className={`absolute -right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full z-10
            flex items-center justify-center font-semibold text-white shadow
            ${currentStep === steps ? 'bg-gray-500 opacity-50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
        >
          {steps}
        </button>
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    name: 'Jason M.',
    role: 'Market Analytics',
    image: '/images/men ph.jpg',
    text: '“As a sneaker enthusiast, I appreciate the attention to detail and quality of Sneak Haven\'s collection. Each pair feels like a work of art.”',
    rating: '10/10 recommend',
  },
  {
    id: 2,
    name: 'Alice K.',
    role: 'Product Designer',
    image: '/images/m1.jpg',
    text: '“The variety and authenticity here is unmatched. I always find something unique to add to my sneaker collection.”',
    rating: '9/10 recommend',
  },
  {
    id: 3,
    name: 'Mark T.',
    role: 'Fashion Blogger',
    image: '/images/m2.jpg',
    text: '“Great service and quality. The community feel is what keeps me coming back.”',
    rating: '10/10 recommend',
  },
  {
    id: 4,
    name: 'Sophia L.',
    role: 'Athlete',
    image: '/images/m3.jpg',
    text: '“From performance to style, this brand covers it all. Highly recommended for any sneakerhead.”',
    rating: '10/10 recommend',
  },
  {
    id: 5,
    name: 'David W.',
    role: 'Entrepreneur',
    image:'/images/m4.jpg',
    text: '“I love how the culture and passion are embedded in every pair. True sneaker lovers’ paradise.”',
    rating: '9/10 recommend',
  },
];

export default function About() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = testimonials.length;

  const handleNext = () => {
    if (activeStep < steps) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep((prev) => prev - 1);
  };

  const current = testimonials[activeStep - 1];

  return (
    <section className="bg-white">
      {/* Hero */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <h1 className="relative text-white text-5xl font-extrabold z-10">About Us</h1>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 mt-16 mb-4">
        <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
      </div>

      {/* Sneaker Journey */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <img
            src="/images/nike-5020608_1280.jpg"
            alt="Sneaker Left"
            className="w-full lg:w-1/3 rounded-2xl shadow-lg"
          />
          <div className="w-full lg:w-1/3 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Sneaker Journey</h2>
            <p className="text-gray-600">
              Sneaker story began with a love for sneakers. We've evolved into a hub for innovation,
              style, and community — uniting enthusiasts globally with our curated selection and
              passion-driven approach.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
              Let's Go —
            </button>
          </div>
          <img
            src="/images/istockphoto-1346094881-1024x1024.jpg"
            alt="Sneaker Right"
            className="w-full lg:w-1/3 rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Commitment */}
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

      {/* Testimonials */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto px-5">
          {/* Title and navigation buttons */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl text-gray-500 mb-1 font-semibold">Our Customers Say</h2>
              <h2 className="text-4xl font-bold text-gray-700">
                What Our <br /> Customers Say
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                disabled={activeStep === 1}
                className={`w-8 h-8 p-2 rounded-full bg-white shadow ${
                  activeStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                }`}
              >
                <FaArrowLeft className="text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeStep === steps}
                className={`w-8 h-8 p-2 rounded-full bg-white shadow ${
                  activeStep === steps ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                }`}
              >
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Testimonial box */}
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-72 md:h-auto">
              <img
                src={current?.image}
                alt={current?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center space-y-5 relative">
              <p className="text-gray-600 text-lg">{current?.text}</p>
              <p className="text-gray-600 text-lg">{current?.rating}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800 text-xl">{current?.name}</h4>
                  <p className="text-sm text-gray-500">{current?.role}</p>
                </div>
               <StepProgressBar steps={steps} currentStep={activeStep} />
                </div>
              </div>
            </div>
          </div>
     
      </section>
    </section>
  );
}
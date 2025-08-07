import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import StepProgressBar from "./StepProgressBar"; // صحح المسار حسب مكان StepProgressBar

// بيانات التوصيات
const testimonials = [
  {
    id: 1,
    name: "Jason M.",
    role: "Market Analytics",
    image: "/images/men ph.jpg",
    text: "“As a sneaker enthusiast, I appreciate the attention to detail and quality of Sneak Haven's collection. Each pair feels like a work of art.”",
    rating: "10/10 recommend",
  },
  {
    id: 2,
    name: "Alice K.",
    role: "Product Designer",
    image: "/images/m1.jpg",
    text: "“The variety and authenticity here is unmatched. I always find something unique to add to my sneaker collection.”",
    rating: "9/10 recommend",
  },
  {
    id: 3,
    name: "Mark T.",
    role: "Fashion Blogger",
    image: "/images/m2.jpg",
    text: "“Great service and quality. The community feel is what keeps me coming back.”",
    rating: "10/10 recommend",
  },
  {
    id: 4,
    name: "Sophia L.",
    role: "Athlete",
    image: "/images/m3.jpg",
    text: "“From performance to style, this brand covers it all. Highly recommended for any sneakerhead.”",
    rating: "10/10 recommend",
  },
  {
    id: 5,
    name: "David W.",
    role: "Entrepreneur",
    image: "/images/m4.jpg",
    text: "“I love how the culture and passion are embedded in every pair. True sneaker lovers’ paradise.”",
    rating: "9/10 recommend",
  },
];

export default function Testimonials() {
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
                activeStep === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeStep === steps}
              className={`w-8 h-8 p-2 rounded-full bg-white shadow ${
                activeStep === steps ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonial box */}
        <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 h-72 md:h-auto">
            <img src={current?.image} alt={current?.name} className="w-full h-full object-cover" />
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
  );
}
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SneakerJourney from '../components/About/SneakerJourney';
import SneakerCommitment from '../components/About/SneakerCommitment';
import Testimonials from '../components/About/TestimonialsSection';
import StepProgressBar from '../components/About/StepProgressBar'; // Adjust the path as necessary


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
    image: '/images/m4.jpg',
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
      <SneakerJourney />
      <SneakerCommitment />
      <Testimonials />


    </section>
  );
}
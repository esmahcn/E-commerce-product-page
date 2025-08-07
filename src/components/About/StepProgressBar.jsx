import React from 'react';

export default function StepProgressBar({ steps, currentStep, onBack, onNext }) {
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
import React from 'react';

export default function StepProgressBar({ steps, currentStep }) {
  const progressPercent = ((currentStep - 1) / (steps - 1)) * 100;

  return (
    <div className="relative w-full h-8">
      {/* Numbers labels */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-700 font-semibold select-none">
        1
      </span>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 font-semibold select-none">
        {steps}
      </span>

      {/* Progress bar container */}
      <div className="w-full bg-gray-300 rounded-full h-3 mt-2">
        <div
          className="bg-gray-700 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
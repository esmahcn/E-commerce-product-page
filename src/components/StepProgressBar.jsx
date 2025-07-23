function StepProgressBar({ steps, currentStep }) {
  const progressPercent = ((currentStep - 1) / (steps - 1)) * 100;

  return (
    <div className="relative w-40 h-[4px] bg-gray-300 rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-gray-700 transition-all duration-300"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
}
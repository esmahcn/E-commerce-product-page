import React from 'react';

function QuantityControl({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 sm:w-32">
      <button onClick={onDecrease}>
        <img src="/images/icon-minus.svg" alt="minus" className="h-3 w-3" />
      </button>
      <span className="font-bold">{quantity}</span>
      <button onClick={onIncrease}>
        <img src="/images/icon-plus.svg" alt="plus" className="h-3 w-3" />
      </button>
    </div>
  );
}

export default QuantityControl;
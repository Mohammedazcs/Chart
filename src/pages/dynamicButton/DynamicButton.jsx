import React, { useState } from 'react';
import "./DynamicButton.scss"

const DynamicButton = () => {
  const sizes = [
    { size: 'S', qty: 15, price: 17 },
    { size: 'M', qty: 1414, price: 19 },
    { size: 'L', qty: 0, price: 21 },
    { size: 'XL', qty: 1423, price: 28 }
  ];

  const [selectedSize, setSelectedSize] = useState(null);

  const handleButtonClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="form-container">
      <h2>Select a Size:</h2>
      <div className="size-buttons-container">
        {sizes.map((sizeData) => (
          <button
            key={sizeData.size}
            className="size-button"
            onClick={() => handleButtonClick(sizeData)}
          >
            {sizeData.size}
          </button>
        ))}
      </div>
      {selectedSize && (
        <div className="selected-size-container">
          <div className="selected-size-details">
            <h3>Selected Size: {selectedSize.size}</h3>
            <p>Quantity: {selectedSize.qty}</p>
            <p>Price: {selectedSize.price}</p>
          </div>
          {/* Additional information container can be added here */}
        </div>
      )}
    </div>
  );
};

export default DynamicButton;

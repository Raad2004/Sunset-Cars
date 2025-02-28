import React from 'react';
import './CarComparison.css';

const CarComparison = ({ selectedCars }) => {
  if (!selectedCars || selectedCars.length < 2) {
    return (
      <div className="comparison-container">
        <h2>Car Comparison</h2>
        <p>Please select two cars to compare.</p>
      </div>
    );
  }

  const [car1, car2] = selectedCars;

  return (
    <div className="comparison-container">
      <h2>Car Comparison</h2>
      <div className="comparison-cards">
        <div className="comparison-card">
          <img src={car1.image} alt={car1.name} className="comparison-image" />
          <h3>{car1.name}</h3>
          <p><strong>Brand:</strong> {car1.brand}</p>
          <p><strong>Horsepower:</strong> {car1.horsepower}</p>
          <p><strong>Torque:</strong> {car1.torque}</p>
          <p><strong>0-60:</strong> {car1.zeroToSixty} sec</p>
          <p><strong>Price:</strong> {car1.price}</p>
          <p><strong>Engine:</strong> {car1.engine}</p>
          <p><strong>Displacement:</strong> {car1.displacement}</p>
        </div>
        <div className="comparison-card">
          <img src={car2.image} alt={car2.name} className="comparison-image" />
          <h3>{car2.name}</h3>
          <p><strong>Brand:</strong> {car2.brand}</p>
          <p><strong>Horsepower:</strong> {car2.horsepower}</p>
          <p><strong>Torque:</strong> {car2.torque}</p>
          <p><strong>0-60:</strong> {car2.zeroToSixty} sec</p>
          <p><strong>Price:</strong> {car2.price}</p>
          <p><strong>Engine:</strong> {car2.engine}</p>
          <p><strong>Displacement:</strong> {car2.displacement}</p>
        </div>
      </div>
    </div>
  );
};

export default CarComparison;

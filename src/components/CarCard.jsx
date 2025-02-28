const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h3>{car.name}</h3>
      <p>Horsepower: {car.horsepower}</p>
      <p>0-60: {car.zeroToSixty} seconds</p>
      <p>Torque: {car.torque}</p>
      {/* Add more specifications as needed */}
    </div>
  );
};

export default CarCard; 
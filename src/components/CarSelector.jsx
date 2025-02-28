import { useState, useEffect } from 'react';

const CarSelector = ({ setSelectedCars }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar1, setSelectedCar1] = useState(null);
  const [selectedCar2, setSelectedCar2] = useState(null);

  useEffect(() => {
    // Fetch car data from your backend or a static list
    const fetchCars = async () => {
      const response = await fetch('/api/cars'); // Adjust the API endpoint as needed
      const data = await response.json();
      setCars(data);
    };
    fetchCars();
  }, []);

  const handleSelect = (car, index) => {
    if (index === 1) {
      setSelectedCar1(car);
    } else {
      setSelectedCar2(car);
    }
    setSelectedCars([selectedCar1, selectedCar2]);
  };

  return (
    <div className="car-selector">
      <h2>Select Cars to Compare</h2>
      <div className="car-dropdowns">
        <select onChange={(e) => handleSelect(cars[e.target.value], 1)}>
          <option value="">Select Car 1</option>
          {cars.map((car, index) => (
            <option key={car.id} value={index}>{car.name}</option>
          ))}
        </select>
        <select onChange={(e) => handleSelect(cars[e.target.value], 2)}>
          <option value="">Select Car 2</option>
          {cars.map((car, index) => (
            <option key={car.id} value={index}>{car.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarSelector; 
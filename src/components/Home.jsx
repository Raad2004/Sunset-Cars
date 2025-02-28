import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const cars = [
  {
    id: 1,
    brand: 'BMW',
    name: 'BMW M4',
    horsepower: 473,
    torque: '406 lb-ft',
    zeroToSixty: '4.1',
    price: '$70,000',
    engine: '3.0L Twin-Turbo Inline-6',
    displacement: '3.0L',
    image: 'https://images.unsplash.com/photo-1580551060937-28ccd45935ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fallbackImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#1c69d3' // BMW blue
  },
  {
    id: 2,
    brand: 'Porsche',
    name: 'Porsche 911 Carrera',
    horsepower: 379,
    torque: '331 lb-ft',
    zeroToSixty: '3.8',
    price: '$100,000',
    engine: '3.0L Twin-Turbo Flat-6',
    displacement: '3.0L',
    image: 'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=1769720',
    fallbackImage: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/AU_local/2022/Products_AU/911-GTS--Product-Highlights/911-GTS-Australian-images---exterior-static/PORSCHE_TAYCANGTS_911GTS_DKIMG_0920.jpg/jcr:content/PORSCHE_TAYCANGTS_911GTS_DKIMG_0920.jpg',
    color: '#c00' // Porsche red
  },
  {
    id: 3,
    brand: 'Lamborghini',
    name: 'Lamborghini Huracan',
    horsepower: 631,
    torque: '442 lb-ft',
    zeroToSixty: '2.5',
    price: '$240,000',
    engine: '5.2L V10',
    displacement: '5.2L',
    image: 'https://images.unsplash.com/photo-1507767439269-2c64f107e609?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fallbackImage: 'https://images.unsplash.com/photo-1507767439269-2c64f107e609?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#ffd700' // Lamborghini gold
  }
];

const Home = ({ onSelectCar, selectedCars }) => {
  const [imageErrors, setImageErrors] = useState({});
  const [hoveredCar, setHoveredCar] = useState(null);

  const handleImageError = (carId) => {
    setImageErrors(prev => ({
      ...prev,
      [carId]: true
    }));
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h2>Performance Car Showcase</h2>
          <p className="header-subtitle">Discover the latest high-performance cars</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Luxury Brands</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1400+</span>
              <span className="stat-label">Total Horsepower</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2.5s</span>
              <span className="stat-label">Fastest 0-60</span>
            </div>
          </div>
        </div>
      </header>

      <section className="cars-section">
        {cars.map(car => {
          const isSelected = selectedCars && selectedCars.find(selected => selected.id === car.id);
          return (
            <div 
              key={car.id} 
              className={`car-card ${isSelected ? 'selected' : ''} ${hoveredCar === car.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCar(car.id)}
              onMouseLeave={() => setHoveredCar(null)}
              style={{'--card-accent-color': car.color}}
            >
              <div className="car-image-container">
                <div className="car-badge" style={{ backgroundColor: car.color }}>
                  {car.brand}
                </div>
                <img
                  src={imageErrors[car.id] ? car.fallbackImage : car.image}
                  alt={car.name}
                  className="car-image"
                  onError={() => handleImageError(car.id)}
                  loading="lazy"
                />
                <div className="car-overlay">
                  <div className="car-quick-stats">
                    <div className="quick-stat">
                      <span className="stat-label">HP</span>
                      <span className="stat-value">{car.horsepower}</span>
                    </div>
                    <div className="quick-stat">
                      <span className="stat-label">0-60</span>
                      <span className="stat-value">{car.zeroToSixty}s</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-info">
                <h3>{car.name}</h3>
                <div className="car-specs">
                  <p><strong>Brand:</strong> {car.brand}</p>
                  <p><strong>Horsepower:</strong> {car.horsepower}</p>
                  <p><strong>Torque:</strong> {car.torque}</p>
                  <p><strong>0-60:</strong> {car.zeroToSixty} sec</p>
                  <p><strong>Price:</strong> {car.price}</p>
                  <p><strong>Engine:</strong> {car.engine}</p>
                  <p><strong>Displacement:</strong> {car.displacement}</p>
                </div>
                <button 
                  onClick={() => onSelectCar(car)} 
                  className="select-button"
                  style={{'--button-hover-color': car.color}}
                >
                  {isSelected ? 'Selected' : 'Select for Compare'}
                </button>
              </div>
            </div>
          );
        })}
      </section>

      <footer className="home-footer">
        <Link to="/compare" className="compare-button">
          Compare Selected Cars
          <span className="arrow">→</span>
        </Link>
      </footer>
    </div>
  );
};

export default Home;

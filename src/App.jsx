import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CarComparison from './components/CarComparison';
import './App.css';

function App() {
  const [selectedCars, setSelectedCars] = useState([]);

  const handleSelectCar = (car) => {
    // Prevent duplicates and allow only two selections
    if (selectedCars.find(selected => selected.id === car.id)) return;
    if (selectedCars.length < 2) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const resetComparison = () => {
    setSelectedCars([]);
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1>Performance Car Hub</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/compare" className="nav-link" onClick={resetComparison}>
              Compare
            </Link>
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home onSelectCar={handleSelectCar} selectedCars={selectedCars} />}
            />
            <Route
              path="/compare"
              element={<CarComparison selectedCars={selectedCars} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import BusCard from './BusCard';
import './BusList.css';
import img1 from '../Images/bus1.jpeg';
const BusList = () => {
  const [buses, setBuses] = useState([{
    url:img1,
    id:1234,
    title:'AshokLeyland'
  }]);

  useEffect(() => {
    // Simulate API call
    fetch('https://jsonplaceholder.typicode.com/photos') // Temporary API link
      .then(response => response.json())
      .then(data => setBuses(data.slice(0, 10))); // Simulate a list of 10 buses
  }, []);

  return (
    <div className="bus-list">
      <h2>Available Buses</h2>
      <div className="bus-list-grid">
        {buses.map(bus => (
          <BusCard
            key={bus.id}
            imgSrc={bus.url}
            busName={bus.title}
            price={Math.floor(Math.random() * 100) + 50} // Random price for demonstration
            ratings={Math.floor(Math.random() * 5) + 1} // Random ratings for demonstration
          />
        ))}
      </div>
    </div>
  );
};

export default BusList;

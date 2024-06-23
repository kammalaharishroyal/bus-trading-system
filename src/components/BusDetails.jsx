import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BusDetails.css';

const BusDetails = () => {
  const { busId } = useParams();
  const [bus, setBus] = useState(null);

  useEffect(() => {
    // Simulate API call
    fetch(`https://jsonplaceholder.typicode.com/posts/${busId}`) // Temporary API link
      .then(response => response.json())
      .then(data => setBus(data));
  }, [busId]);

  if (!bus) return <p>Loading...</p>;

  return (
    <div className="bus-details">
      <h2>{bus.title}</h2>
      <p>{bus.body}</p>
      <button>Rent this Bus</button>
    </div>
  );
};

export default BusDetails;

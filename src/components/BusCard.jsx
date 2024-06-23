import React from 'react';
import './BusCard.css';
import { useNavigate } from 'react-router-dom';

const BusCard = ({ imgSrc, busName, price, ratings }) => {
    const navigate = useNavigate();
    function detail(event){
        event.preventDefault();
        console.log("clicked");
        navigate('1');
    }
  return (
    <div className="bus-card" onClick={detail}>
      <img src={imgSrc} alt={busName} className="bus-card-image" />
      <div className="bus-card-content">
        <h3 className="bus-card-title">{busName}</h3>
        <p className="bus-card-price">${price}</p>
        <div className="bus-card-ratings">
          {Array(ratings).fill().map((_, i) => (
            <span key={i} className="star">&#9733;</span>
          ))}
        </div>
        <div className="bus-card-buttons">
          <button className="bus-card-button bus-card-add-to-cart">Add to Cart</button>
          <button className="bus-card-button bus-card-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BusCard;

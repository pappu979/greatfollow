import React from 'react';
import './Card.css'; 

const Card = ({ image, title, paragraph, buttonText }) => {
  return (
    <div className="blog-card">
      <img src={image} alt='links-image' className="blog-card-image" />
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-paragraph">{paragraph}</p>
        <button className="blog-card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;

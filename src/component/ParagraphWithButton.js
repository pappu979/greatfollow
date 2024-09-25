import React from 'react';
import './ParagraphWithButton.css'; // Make sure to create this CSS file

const ParagraphWithButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="ParagraphWithButton-container">
      <p className="responsive-paragraph">
      We give the best customer support to our clients, our team is always live. 
      "Add Ticket" option for instant and prompt Problem solution. 
We     will solve your problems within minutes
      </p>
      <button className="responsive-button" onClick={handleClick}>
        Contact Us
      </button>
    </div>
  );
};

export default ParagraphWithButton;

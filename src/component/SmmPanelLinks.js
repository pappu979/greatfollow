import React from 'react';
import './smmPanelLinks.css';

const SmmPanelLinks = () => {
     
    const listItem = ['Best SMM Panel', "Real SMM panel", "Indian SMM Panel", 
        "Cheapest SMM Panel", "Best smm panel for instagram", "Best SMM panel for Youtube",
    "Best SMM panel for Telegaram ", "Instagram SMM Panel", "indian best smm panel",
"best indian smm panel for instagram", "best cheapest smm panel", "best indian smm panel",
"best and trusted smm panel", "Paytm SMM panel", "Gpay SMM panel"];

const contactDatails = ["- 24*7 Support", "- Live Chat option ", "- Mail: teamcheapsmmglobal",
     "- Contact us"];

  return (
    <div className="contact-container">
      <div className="contactlist-container">
        <ul>
            {listItem.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
         <p>Website Link: https://cheapsmmglobal.com/</p>
      </div>
      <div className="contacttext-container">
        <h3>Cheapsmmglobal - Best SMM Panel</h3>
        <p>Our SMM panel will provide you with effective marketing services to help 
            you surpass your competitors. 
            The services we offer are affordable and designed to suit various needs.</p>
          <ul>
            {contactDatails.map((contact, index) => (
                <li key={index}>{contact}</li>
            ))}
          </ul>
          <h4>What is an SMM panel?</h4>
          <p>SMM panel will help in boosting your social media account to the next level. </p>
          <h4>SMM Panel is Safe?</h4>
          <p>Cheapsmmglobal gives a 100% safety and security guarantee. </p>
          <h4>Where to find the SMM panel</h4>
          <p>Search cheapsmmglobal on Google or click on the link given below.</p>
      </div>
    </div>
  );
};

export default SmmPanelLinks;

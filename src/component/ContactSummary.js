import React from 'react';
import './ContactSummary.css'; // Link to the CSS file

const ContactSummary = () => {
  return (
    <div className="contactsummary-container">
      <div className="contactSummaty-box">
        <p className='difftent-color'>Contact Us Anytime</p>
        <p><span className='difftent-color'>Skype</span>: Cheapsmmglobal</p>
        <p className='difftent-color'>Mail:  teamcheapsmmglobal@gmail.com</p>
        <p><span className='difftent-color'>Ticket</span>: Add Ticket with your Registered account ( Priority )</p>
      </div>
      <div className="contactSummaty-box">
        <p>24*7 Customer Support </p>
        <p className='difftent-color'>Always Available to Solve your Problems.</p>
      </div>
    </div>
  );
};

export default ContactSummary;

import React from 'react';
import './videoHighlight.css';
import qulityImg from '../image/quality.png'

const VideoHighlight = () => {
  return (
    <div className="image-section">
      <h2 className="section-heading">Learn More About Our Services</h2>
      
      <div className="content-wrapper">
        <div className="image-container">
          <img 
            className="responsive-image" 
            src={qulityImg}
            alt="Service Overview" 
          />
        </div>

        <div className="text-content">
            <h4 style={{color: "#034a74"}}>Best SMM Panel of India - cheapsmmglobal</h4>
          <p>
          We guarantee that we are <strong>the best SMM panel in India</strong> in Support and SMM Services. 
          We give the best and cheapest SMM Services in the world, 
          cheapsmmglobal can beat any price in the SMM Market and give the best rates to our clients.
          </p>
          <p>
          Lakhs of People trust only Cheapsmmglobal for SMM Services because of its 
          <strong> Best Support and Trusted non-drop Services.</strong>
          </p>
          <p>
          SMM (Social Media Marketing) is the use of social media platforms such as Instagram, 
          Facebook, Twitter, Youtube, and many more to promote yourself or your company. 
          If you are looking for a way to boost your online presence, then your best choice is our 
          SMM panel where we offer services to help 
          you boost your online presence across all social media platforms at the cheapest prices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHighlight;

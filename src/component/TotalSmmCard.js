import React from 'react';
import SmmPanelCard from './SmmPanelCard.js';
//  Import Font Awesome icons from react-icons;
 import { FaMedal, FaCommentDots, FaHeadset, FaDollarSign} from 'react-icons/fa';
 import { Link } from 'react-router-dom';

function TotalSmmCard() {
  return (
    <div className="container mt-5">
        {/* Section Heading */}
      <h1 className="text-center mb-4"><span style={{color: "#0c305b"}}>Cheapsmmglobal </span> - <Link style={{color: "#1e79e4", textDecoration: "none"}} to="/smmpanel"> Best SMM Panel</Link></h1>

      <div className="row">
        {/* Card 1: Medal Icon */}
        <div className="col-md-3 mb-4">
          <SmmPanelCard
            icon={<FaMedal />}
            title="Real Quality"
            text="You will be impressed with the real Indian quality services we offer.."
            color="#034a74"
          />
        </div>

        {/* Card 2: Comment Icon */}
        <div className="col-md-3 mb-4">
          <SmmPanelCard
            icon={<FaCommentDots />}
            title="Live Chat Support"
            text="We give Live chat Support to our client."
            color="#990099"
          />
        </div>

        {/* Card 3: Headset Icon */}
        <div className="col-md-3 mb-4">
          <SmmPanelCard
            icon={<FaHeadset />}
            title="24*7 Support"
            text="Cheapsmmglobal Team gives 24*7 customer support to our client."
            color="#034a74"
          />
        </div>

        {/* Card 4: Badge Dollar Icon */}
        <div className="col-md-3 mb-4">
          <SmmPanelCard
            icon={<FaDollarSign />}
            title="Cheapest Price"
            text="Cheapsmmglobal offer extremely cheap SMM Panel services in India Market."
            color="#034a74"
          />
        </div>
      </div>
    </div>
  );
}

export default TotalSmmCard;

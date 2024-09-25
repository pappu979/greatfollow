import React from 'react';
import './signupVideoSction.css';

const SignupVideoSection = () => {
    return (
        <div className="video-section">
            {/* Video Container */}
            <div className="video-container">
                <video width="100%" height="auto" controls>
                    <source src="your-video-url.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Heading and List Container */}
            <div className="text-container">
                <h2>Easy Sign up on SMM Panel</h2>
                <ul>
                    <li>- Top Real Support 24*7 [ Chat + Ticket ] </li>
                    <li>- India SMM Panel</li>
                    <li>- Top Rating SMM Panel of India</li>
                    <li>- Top SMM Panel</li>
                    <li>- 5/5 Start Rating panel in the world</li>
                    <li>- All Payment Accepted [ Gpay, Paytm, Phonepe, All Cards, Paypal, Payoneer, etc.]</li>
                </ul>
            </div>
        </div>
    );
};

export default SignupVideoSection;

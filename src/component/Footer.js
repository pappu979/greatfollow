import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4><a href='https://cheapsmmglobal.com/'>Cheapsmmglobal - India Reseller SMM Panel</a></h4>
                        <ul>
                            <li><Link to="/contact" style={{textDecoration: "none"}} target='_blank'>Contact Us</Link></li>
                            <li><Link to="/about" style={{textDecoration: "none"}} target='_blank'>About Us</Link></li>
                            <li><Link to="/services" style={{textDecoration: "none"}} target='_blank'>Services</Link></li>
                            <li><Link to="/" style={{textDecoration: "none"}} target='_blank'>Sign In</Link></li>
                        </ul>

                        <div className="footer-section">
                            <h4>Contact Us</h4>
                            <p>Email: <a href="mailto:teamcheapsmmglobal@gmail.com">teamcheapsmmglobal@gmail.com</a></p>
                            <p><a href="#chat">Chat With Us</a></p>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Blog:</h4>
                        <ul>
                            <li><a href="#blog1">Grow Instagram Reel views & Likes</a></li>
                            <li><a href="#blog2">Buy cheapest Instagram Followers & Likes</a></li>
                            <li><a href="#blog3">Instagram reels par views Kaise Badhaye</a></li>
                            <li><a href="#blog4">Instagram Par followers kessa badhaye</a></li>
                            <li><a href="#blog5">Free Instagram followers</a></li>
                            <li><a href="#blog6">Cheapest reels views</a></li>
                            <li><a href="#blog7">Buy telegram members and Views</a></li>
                            <li><a href="#blog8">Buy telegram channel members</a></li>
                            <li><a href="#blog9">Reel views</a></li>
                            <li><a href="#blog10">Best smm panel</a></li>
                        </ul>

                        <div className="footer-section">
                            <h4 style={{color: "#D2E5FA"}}>Cheapsmmglobal - Best SMM Panel Of India | SMM Panel</h4>
                            <div className="social-links">
                                <a href="#instagram">Instagram</a> |
                                <a href="#twitter">Twitter</a> |
                                <a href="#facebook">Facebook</a> |
                                <a href="#pinterest">Pinterest</a> |
                                <a href="#youtube">YouTube</a> |
                                <a href="#linkedin">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;

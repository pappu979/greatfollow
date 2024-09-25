import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheapsmmGlobalImg from "../image/logo512.png"

function ImageOverlay() {
    return (
        <div style={{backgroundColor: "#d2e5fa", width: "100%"}}>
        <div className="container pt-5 pb-3">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={CheapsmmGlobalImg}
                        className="img-fluid"
                        alt="Example"
                        style={{height: "320px", width: "320px"}}
                    />
                </div>
                <div className="col-md-8">
                    <p style={{color: "#990099", fontWeight: "700"}}>Boost Your Social Media </p>
                    <h1 style={{color: "#034a74"}} className='mt-4'>Higher Then Ever </h1>
                    <p className='mt-2 image-content' style={{lineHeight: "2.2rem"}}>Cheapsmmglobal is one of the fastest-growing platforms all over India, 
                        for which we have the expertise to grow your account. We have All Social 
                        Media Marketing Services for YouTube, Facebook, Twitter, Instagram, Tiktok, Website Traffic, Linkedin, etc.
                        We Implemented the strategy to gain more and more followers, reach, Likes and views on Your post. 
                        Cheapsmmglobal is the best SMM Panel in India. </p>
                        <p style={{color: "#1d83eb", fontSize: "1rem", fontWeight: "700"}}>"Be the best among others"</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ImageOverlay;

import React from "react";
import logoGlobalImg from '../image/cheapSMMLogo.png';
import './choose.css';
const ChooseUs = () => {
    return (
        <div className="choose-container">
            <div className="choose-section">
                <div className="choose-textSection">
                <h1 style={{textAlign: "center",color: "#4da872", fontWeight: "bold" }}>Why Choose Us</h1>
                    <p style={{color: "#0c305b",  paddingTop: "15px"}}>
                        We are the best SMM Panel in India with the cheapest rates for all social media platforms.
                        Being a partner in success, We aim to establish long-lasting
                        business relations for Search engine marketing with every client.
                        No matter whether you have a small-scale or big enterprise business.
                    </p>
                    <p style={{color: "#0c305b", paddingTop: "15px"}}>
                        Our team is dedicated to each customer who wants to get in touch with us.
                        Our experienced staff is always there to support every client. We have got salient 
                        features and distinctive service benefits that make us the Top Marketing Service!
                    </p>
                    <ul style={{ paddingTop: "15px"}}>
                        <li style={{color: "#0c305b"}}>Best SMM panel in India</li>
                        <li style={{color: "#0c305b"}}>Cheapsmmglobal - Best SMM Panel</li>
                        <li style={{color: "#0c305b"}}>SMM Panel</li>
                        <li style={{color: "#0c305b"}}>5 out 5 star SMM Panel</li>
                    </ul>
                </div>
                <div className="chhose-imageSection">
                    <img src={logoGlobalImg} alt="logo"></img>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs;
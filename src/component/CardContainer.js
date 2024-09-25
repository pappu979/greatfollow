import Card from "./Card";
import React from "react";
import './Card.css';
import firstImg from "../image/1.png";
import secoundImg from "../image/2.png";
import thirdImg from "../image/quality.png";
import fourthImg from "../image/4.jpg";
import fifthImg from "../image/5.png";
import sixthImg from "../image/6.jpg";
import seventhImg from "../image/7.png";
import eighthImg from "../image/8.png";
import ninthImg from "../image/9.png";
import tenthImg from "../image/10.jpg";


const cardsData = [
    {
      image: firstImg,
      title: 'How to Add funds through Gpay & Upi on Cheapsmmglobal - 100% Fund Add Guarantee - Trusted SMM Panel in the world with 5/5 star Rating [ ⭐️⭐️⭐️⭐️⭐️ ]',
      paragraph: "It's super easy to add fund on cheapsmmglobal now you can add funds through gpay, Paytm, Fampay, Amazon Pay, WhatsApp Pay, etc.",
      buttonText: 'Read More'
    },
    {
      image: secoundImg,
      title: 'Buy Instagram Reel views India - 100% Real and working',
      paragraph: 'If you want more than a Lakhs plus viewership on your reel video then you can buy Instagram reel views via our website at the cheapest rates in India....',
      buttonText: 'Read More'
    },
    {
      image: thirdImg,
      title: 'Best SMM Panel of India - Cheapsmmglobal',
      paragraph: "Cheapsmmglobal is India's best SMM panel given a 5/5 star rating. SMM panel which accepts all Indian payments [ Paytm, Gpay, Phone pe, Amazon Pay, Fam...",
      buttonText: 'Read More'
    },
    {
        image: fourthImg,
        title: 'Cheapest reels views 0.03rs - Best Instagram SMM Panel',
        paragraph: 'With the immense popularity of Instagram reels, having a substantial number of views on your videos can make a significant difference. Reel views not...',
        buttonText: 'Read More'
      },
      {
        image: fifthImg,
        title: 'Buy Telegram Members and Views - Buy Telegram channel Members',
        paragraph: 'Best telegram SMM panel for members. How to increase telegram members at the cheapest price Grow telegram members in just 40rs for 1000 and 0.24rs for...',
        buttonText: 'Read More'
      },
      {
        image: sixthImg,
        title: 'Free Instagram followers | 100% Real & Active Non Drop followers',
        paragraph: 'Free Instagram followers to achieve the best target of 1k to 1m non-drop followers. Cheapsmmglobal gives the cheapest Instagram followers in the world...',
        buttonText: 'Read More'
      },
      {
        image: seventhImg,
        title: 'Buy Instagram Reels Views - Start from just 0.001rs',
        paragraph: 'Cheapsmmglobal Reels Views Service works in all Instagram updates. Our Instagram SMM panel proudly offers the most cost-effective reel view packages i...',
        buttonText: 'Read More'
      },
      {
        image: eighthImg,
        title: 'Instagram Par followers kessa badhaye - Buy Instagram followers',
        paragraph: 'Kiya apko bhi apne instagram par Followers badhane hein? Cheapsmmglobal apko sirf 21rs mein 1000 followers deta hein! Cheapsmmglobal india sabse sasta...',
        buttonText: 'Read More'
      },
      {
        image: ninthImg,
        title: 'Instagram reels par views Kaise Badhaye',
        paragraph: 'Instagram reels par views badhaye sirf asan tarike se, sirf apna reel ka link dijiye or sirf 2-3 min mein apko views aa jayga. Cheapsmmglobal duniya k...',
        buttonText: 'Read More'
      },
      {
        image: tenthImg,
        title: 'Grow Instagram Reels Views and Likes',
        paragraph: 'Cheapest Instagram reel views in India starting with 0.001rs with 24*7 Customer support to our client. Cheapsmmglobal gives the best cheapest reel vie...',
        buttonText: 'Read More'
      }
  ];

const CardContainer = () => {
    return (
        <div className="card-container-blog">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            paragraph={card.paragraph}
            buttonText={card.buttonText}
          />
        ))}
      </div> 
    )
}

export default CardContainer;
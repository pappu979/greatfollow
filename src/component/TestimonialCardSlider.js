import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function TestimonialSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center" style={{color: "#0c305b", fontSize: "33px", fontWeight: "bold"}}>"Top Reviews"</h2>
      <Slider {...settings}>
        <div className="testimonial-card mt-5">
          <div className="p-3">
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50" 
                alt="reviewer"
                className="rounded-circle"
                style={{ width: '50px', height: '50px', marginRight: '15px',}}
              />
            </div>
            <h5 className="mb-0 mt-1" style={{color: "#0c305b", fontSize: "15px", fontWeight: "bold"}}>Priyanka Sharma</h5>
            <p className="mt-3" style={{color: "#0c305b", fontSize: "15px"}}>
              I buy 500k followers from Cheapsmmglobal, not a single drop in followers. 
              I'm very impressed with your services. 
              <strong>Best recommendation and Best support team. </strong> 
               My followers are maintained.
            </p>
          </div>
        </div>
        <div className="testimonial-card mt-5">
          <div className=" p-3">
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50" 
                alt="reviewer"
                className="rounded-circle"
                style={{ width: '50px', height: '50px', marginRight: '15px' }}
              />
            </div>
            <h5 className="mb-0 mt-1" style={{color: "#0c305b", fontSize: "15px", fontWeight: "bold"}}>Vikram Rathore</h5>
            <p className="mt-3" style={{color: "#0c305b", fontSize: "15px"}}>
              Cheapsmmglobal team, I'm impressed with your services. 
              <strong>Your support is best in India, no doubt about that!</strong> 
              Best and cheapest SMM panel in the world.
            </p>
          </div>
        </div>

        <div className="testimonial-card mt-5">
          <div className=" p-3">
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50" 
                alt="reviewer"
                className="rounded-circle"
                style={{ width: '50px', height: '50px', marginRight: '15px' }}
              />
            </div>
            <h5 className="mb-0 mt-1" style={{color: "#0c305b", fontSize: "15px", fontWeight: "bold"}}>Lata Mishra</h5>
            <p className="mt-3" style={{color: "#0c305b", fontSize: "15px"}}>
              Cheapsmmglobal SMM services I got here did exactly what I expected them to do, they helped my business 
              get more attention and increased my sales. Thank you!
               
            </p>
          </div>
        </div>

        <div className="testimonial-card mt-5">
          <div className=" p-3">
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50" 
                alt="reviewer"
                className="rounded-circle"
                style={{ width: '50px', height: '50px', marginRight: '15px' }}
              />
            </div>
            <h5 className="mb-0 mt-1" style={{color: "#0c305b", fontSize: "15px", fontWeight: "bold"}}>Roy John</h5>
            <p className="mt-3" style={{color: "#0c305b", fontSize: "15px"}}>
            Wow! What a great SMM service company, i'm getting reel views in just 0.30rs for 1000 never expected it's 
            real. Thank you so much, Team!
            </p>
          </div>
        </div>

        <div className="testimonial-card mt-5">
          <div className=" p-3">
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/50" 
                alt="reviewer"
                className="rounded-circle"
                style={{ width: '50px', height: '50px', marginRight: '15px' }}
              />
            </div>
            <h5 className="mb-0 mt-1" style={{color: "#0c305b", fontSize: "15px", fontWeight: "bold"}}>Shweta</h5>
            <p className="mt-3" style={{color: "#0c305b", fontSize: "15px"}}>
            Cheapsmmglobal - Best Cheapest Telegram SMM Services in the world. I increase my telegram non-drop channel members,
            honestly never check such a Cheapest SMM panel before. So happy with your services dude. You grow my business from 0 to 1 lakh 
            I'm so taankful.
            </p>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          padding: '20px',
          right: '-25px',
          zIndex: 1,
          color: "#000",
          fontSize: "2rem"
        }}
        onClick={onClick}
      >
        <FaChevronRight color="#000" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          padding: '30px',
          left: '-70px',
          zIndex: 1,
          color: "#000",
          fontSize: "2rem"
        }}
        onClick={onClick}
      >
        <FaChevronLeft color="#000" />
      </div>
  );
}

export default TestimonialSlider;


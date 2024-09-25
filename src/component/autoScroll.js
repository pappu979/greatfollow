import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './autoScroll.css'; // Ensure you have this CSS file for styling

const AutoScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const interval = setInterval(() => {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += container.offsetWidth / 2; // Scroll by half the container width
        }
      }, 3000); // Adjust scroll interval as needed

      return () => clearInterval(interval);
    }
  }, []);

  const services = [
    {
      icon: faInstagram,
      title: 'Instagram',
      Iconcolor: '#E4405F',
      titleColor: '#d81010',
      description: [
        'Instagram Real Likes',
        'Instagram Real Followers',
        'Instagram Real Views',
        'Instagram Reels Views',
        'Grow Instagram Reach & Engagement',
      ],
    },
    {
      icon: faYoutube,
      title: 'YouTube',
      Iconcolor: '#FF0000',
      titleColor: '#0c305b',
      description: [
        'Youtube Monetization Views',
        'Youtube Likes',
        'Youtube Subscriber',
        'Youtube Comments',
        'Youtube Dislike',
        'Youtube Live Views',
      ],
    },
    {
      icon: faTiktok,
      title: 'TikTok',
      Iconcolor: '#000000',
      titleColor: '#0c305b',
      description: [
        'TikTok Real Likes',
        'TikTok Followers',
        'TikTok Views',
        'TikTok Video Shares',
        'TikTok Dislike',
        'Grow TikTok Reach',
      ],
    },
    {
      icon: faTwitter,
      title: 'Twitter',
      Iconcolor: '#1DA1F2',
      titleColor: '#274bc4',
      description: [
        'Twitter Retweets',
        'Twitter Followers',
        'Twitter Likes',
        'Twitter Comments',
        'Twitter Engagement',
      ],
    },
    {
      icon: faFacebook,
      title: 'Facebook',
      Iconcolor: '#3B5998',
      titleColor: '#274bc4',
      description: [
        'Facebook Likes',
        'Facebook Followers',
        'Facebook Shares',
        'Facebook Comments',
        'Grow Facebook Engagement',
      ],
    },
    {
      icon: faLinkedin,
      title: 'LinkedIn',
      Iconcolor: '#0077B5',
      titleColor: '#274bc4',
      description: [
        'LinkedIn Endorsements',
        'LinkedIn Connections',
        'LinkedIn Shares',
        'LinkedIn Comments',
        'Grow LinkedIn Reach',
      ],
    },
  ];

  return (
    <div className="auto-scroll-container">
      <div className="services-wrapper" ref={containerRef}>
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <FontAwesomeIcon icon={service.icon} size="2x" style={{color: service.Iconcolor}} />
            <p className='mt-2' style={{color: service.titleColor}}>{service.title}</p>
            <ul>
              {service.description.map((item, i) => (
                <li key={i} style={{color: "#034a74"}}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        {/* Duplicate the list for seamless infinite scrolling */}
        {services.map((service, index) => (
          <div key={index + services.length} className="service-box">
            <FontAwesomeIcon icon={service.icon} size="2x" style={{color: service.Iconcolor}} />
            <p className='mt-2' style={{color: service.titleColor}}>{service.title}</p>
            <ul>
              {service.description.map((item, i) => (
                <li key={i} style={{color: "#034a74"}}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScroll;

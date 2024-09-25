import React from 'react';
import './socialmediaBoost.css';

const SocialMediaBoost = ({title, text, titleColor, textColor}) => {
  return (
    <div id="block_149">
      <div className="block-bg"></div>
      <div className="container">
        <div className="header-with-text">
          <div className="row">
            <div className="col-12">
              <div className="text-block__title">
                <h2 className="text-center">
                  <span style={{ textAlign: 'center', color: titleColor }}>{title}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-block__description">
                <p className="text-center" style={{color: textColor}}>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBoost;

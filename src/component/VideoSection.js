import React from 'react';

function VideoSection({ videoSrc, title, listItems}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Video Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="ratio ratio-16x9">
            <video controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h4 style={{color: "#0c305b"}}>{title}</h4>
          <ul>
            {/* Dynamically render list items */}
            {listItems.map((item, index) => (
              <li style={{color: "#0c305b"}} key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;

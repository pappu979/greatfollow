import React from 'react';

function SmmPanelCard({ icon, title, text, color }) {
  return (
    <div className="card text-center shadow-lg h-100">
      <div className="card-body">
        <div className="icon mb-3" style={{ fontSize: '3.5rem', color: color}}>
          {icon}
        </div>
        <h5 className="card-title" style={{color: color}}>{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default SmmPanelCard;

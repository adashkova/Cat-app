import React from 'react';

const Popup = ({ handleHideDescription, description }) => (
  <div className="description-block">
    <div>{description}</div>
    <button onClick={handleHideDescription} className="cat-info-btn">
      Hide
    </button>
  </div>
);

export default Popup;

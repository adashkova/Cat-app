import React from 'react';
import { createPortal } from 'react-dom';

const Popup = ({ handleHideDescription, description, coords }) => {
  const mount = document.getElementById('portal-root');

  return createPortal(
    <div className="description-block" style={{ ...coords }}>
      <div>{description}</div>
      <button onClick={handleHideDescription} className="cat-info-btn">
        Hide
      </button>
    </div>,
    mount
  );
};

export default Popup;

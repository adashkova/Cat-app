import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const SIDE_SPACING = 10;

const Popup = ({ handleHideDescription, description, coords }) => {
  const mount = document.getElementById('portal-root');
  const el = document.createElement('div');

  useEffect(() => {
    mount.appendChild(el);
    return () => {
      mount.removeChild(el);
    };
  }, [mount, el]);

  return createPortal(
    <div
      className="description-block"
      style={{ top: coords.top, left: SIDE_SPACING, right: SIDE_SPACING }}
    >
      <div>{description}</div>
      <div className="popup-button-wrapper ">
        <button onClick={handleHideDescription} className="cat-info-btn">
          Hide
        </button>
      </div>
    </div>,
    mount
  );
};

export default Popup;

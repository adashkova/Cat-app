import React, { useState } from 'react';
import Popup from '../Popup';

const Cat = ({ cat }) => {
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [coords, setCoords] = useState({});

  const handleShowDescription = e => {
    const rect = e.target.getBoundingClientRect();

    setCoords({
      left: rect.x + rect.width / 2 - rect.x - 40,
      top: rect.y + window.scrollY,
    });

    setIsVisiblePopup(true);
  };

  const handleHideDescription = () => {
    setIsVisiblePopup(false);
  };

  const { name, image, description } = cat;

  return (
    <div className="cat-block">
      <img
        src={image}
        alt={name}
        className={`cat-img ${isVisiblePopup ? ' animation' : ''}`}
      />
      <div>{name}</div>
      <button onClick={e => handleShowDescription(e)} className="cat-info-btn">
        More info...
      </button>

      {isVisiblePopup && (
        <Popup
          description={description}
          handleHideDescription={handleHideDescription}
          coords={coords}
        />
      )}
    </div>
  );
};

export default Cat;

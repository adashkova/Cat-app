import React, { useState } from 'react';
import Popup from '../Popup';

const Cat = ({ cat }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [coords, setCoords] = useState({});

  const handleShowDescription = e => {
    const rect = e.target.getBoundingClientRect();

    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY,
    });

    setIsPopupVisible(true);
  };

  const handleHideDescription = () => {
    setIsPopupVisible(false);
  };

  const { name, image, description } = cat;

  return (
    <div className="cat-block">
      <img
        src={image}
        alt={name}
        className={`cat-img ${isPopupVisible ? ' animation' : ''}`}
      />
      <div>{name}</div>

      {isPopupVisible ? (
        <Popup
          description={description}
          handleHideDescription={handleHideDescription}
          coords={coords}
        />
      ) : (
        <button onClick={handleShowDescription} className="cat-info-btn">
          More info...
        </button>
      )}
    </div>
  );
};

export default Cat;

import React, { useState } from 'react';
import Popup from '../Popup';

const Cat = ({ cat }) => {
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const handleShowDescription = () => {
    setIsVisiblePopup(true);
  };

  const handleHideDescription = () => {
    setIsVisiblePopup(false);
  };

  const { name, image, description } = cat;

  return (
    <div className="container">
      <div className="cat-block">
        <img
          src={image}
          alt={name}
          className={`cat-img ${isVisiblePopup ? ' animation' : ''}`}
        />
        <div>{name}</div>
        <button onClick={handleShowDescription} className="cat-info-btn">
          More info...
        </button>
      </div>
      {isVisiblePopup && (
        <Popup
          isVisiblePopup={isVisiblePopup}
          description={description}
          handleHideDescription={handleHideDescription}
        />
      )}
    </div>
  );
};

export default Cat;

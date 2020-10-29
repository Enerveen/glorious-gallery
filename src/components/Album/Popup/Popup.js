import React from 'react';
import SVG from 'react-inlinesvg';

import s from './Popup.module.css';

const Popup = ({ popUp, setPopUp, photos }) => {
  const LeftArrowIcon = () => (
    <SVG
      src={require('../../../icons/left.svg')}
      onClick={(e) => {
        setPopUp({
          isPopUp: true,
          popUpSrc: popUp.popUpSrc - 1,
        });
        e.stopPropagation();
      }}
    />
  );

  const RightArrowIcon = () => (
    <SVG
      src={require('../../../icons/right.svg')}
      onClick={(e) => {
        setPopUp({
          isPopUp: true,
          popUpSrc: popUp.popUpSrc + 1,
        });
        e.stopPropagation();
      }}
    />
  );

  if (popUp.isPopUp) {
    return (
      <div
        className={s.popup}
        onClick={() => setPopUp({ isPopUp: false, popUpSrc: '' })}
      >
        {popUp.popUpSrc && <LeftArrowIcon />}
        <img src={photos[popUp.popUpSrc].url} alt={photos[popUp.popUpSrc]} />
        {popUp.popUpSrc !== photos.length - 1 ? <RightArrowIcon /> : 0}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Popup;

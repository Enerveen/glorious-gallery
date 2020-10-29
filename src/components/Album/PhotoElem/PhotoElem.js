import React from 'react';

import s from './PhotoElem.module.css';

const PhotoElem = ({ props, setPopUp, i }) => {
  return (
    <div className={s.container}>
      <img
        src={props.url}
        alt={props.id}
        onClick={() => {
          setPopUp({ isPopUp: true, popUpSrc: i });
        }}
      />
    </div>
  );
};

export default PhotoElem;

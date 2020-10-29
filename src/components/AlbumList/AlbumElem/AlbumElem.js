import React from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import s from './AlbumElem.module.css';

const PhotoIco = () => <SVG src={require('../../../icons/photo.svg')} />;

const AlbumElem = ({ props, userId, albumId }) => {
  console.log(props);
  return (
    <Link to={`/album/${userId}/${albumId + 1}`}>
      <div
        className={s.container}
        style={{
          backgroundImage: `url(${props.photos[0].url})`,
        }}
      >
        <div className={s.infoContainer}>
          <h2>{props.title}</h2>
          <div>
            <span>{props.photos.length}</span>
            <PhotoIco />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlbumElem;

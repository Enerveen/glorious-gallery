import React from 'react';
import { Link } from 'react-router-dom';

import s from './AuthorElem.module.css';

const AuthorElem = ({ props }) => {
  return (
    <Link to={`albumList/${props.id}`}>
      <div className={s.container}>
        <h2>{props.username}</h2>
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

export default AuthorElem;

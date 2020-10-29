import React from 'react';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <React.Fragment>
      <span className={s.loader}>Loading...</span>
    </React.Fragment>
  );
};

export default Loader;

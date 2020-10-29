import React from 'react';
import SVG from 'react-inlinesvg';

import { connect } from 'react-redux';

import s from './Navbar.module.css';

const BackIco = () => <SVG src={require('../../icons/back.svg')} />;

const Navbar = ({ location }) => {
  return (
    <div className={s.container}>
      <h1>{location}</h1>
      <a href='javascript:history.back()'>
        <BackIco />
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps, null)(Navbar);

import React from 'react';

import { connect } from 'react-redux';

import AuthorElem from './AuthorElem/AuthorElem';
import Loader from '../Loader/Loader';

import s from './Authors.module.css';

const Authors = ({ users, loading }) => {
  return (
    <div className={s.container}>
      {loading && <Loader />}
      {users.map((item, index) => (
        <AuthorElem key={index} props={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.data.users,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(Authors);

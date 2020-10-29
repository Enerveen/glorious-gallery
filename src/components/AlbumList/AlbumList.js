import React from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { setLocation } from '../../redux/actions';

import AlbumElem from './AlbumElem/AlbumElem';

import s from './AlbumList.module.css';

const Albums = ({ users, loading, setLocation }) => {
  const { id } = useParams();
  setLocation(`${users[id - 1]['username']}'s albums`);
  return (
    <div className={s.container}>
      {users[id - 1]['albums'].map((item, index) => (
        <AlbumElem key={index} userId={id} albumId={index} props={item} />
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

export default connect(mapStateToProps, { setLocation })(Albums);

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { setLocation } from '../../redux/actions';

import PhotoElem from './PhotoElem/PhotoElem';
import Popup from './Popup/Popup';

import s from './Album.module.css';

const Album = ({ users, loading, setLocation }) => {
  const { userId, albumId } = useParams();
  setLocation(users[userId - 1]['albums'][albumId - 1]['title']);
  const [popUp, setPopUp] = useState({
    isPopUp: false,
    popUpSrc: '',
  });

  return (
    <div className={s.container}>
      <Popup
        popUp={popUp}
        setPopUp={setPopUp}
        photos={users[userId - 1]['albums'][albumId - 1]['photos']}
      />
      {users[userId - 1]['albums'][albumId - 1]['photos'].map((item, index) => (
        <PhotoElem key={index} i={index} props={item} setPopUp={setPopUp} />
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

export default connect(mapStateToProps, { setLocation })(Album);

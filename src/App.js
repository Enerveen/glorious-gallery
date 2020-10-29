import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadData, setLoading } from './redux/actions';

import Authors from './components/Authors/Authors';
import AlbumList from './components/AlbumList/AlbumList';
import Album from './components/Album/Album';
import Navbar from './components/Navbar/Navbar';

function App({ loadData, setLoading }) {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((users) => users.json())
      .then((users) => {
        users.map((user) =>
          fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            .then((albums) => albums.json())
            .then((albums) => {
              albums.map((album) => {
                fetch(
                  `https://jsonplaceholder.typicode.com/photos/?albumId=${album.id}`
                )
                  .then((photos) => photos.json())
                  .then((photos) => (album.photos = photos));
              });
              return albums;
            })
            .then((albums) => (user.albums = albums))
        );
        return users;
      })
      .then((users) => {
        loadData(users);
        setLoading(false);
      });
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={Authors} />
        <Route path={'/albumList/:id'} exact component={AlbumList} />
        <Route path={'/album/:userId/:albumId'} exact component={Album} />
      </Switch>
    </BrowserRouter>
  );
}

export default connect(null, { loadData, setLoading })(App);

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyCxeBNCQKGCdnsyWGRVpYUKd0Hh3K4QmcE',
      authDomain: 'manager-c3849.firebaseapp.com',
      databaseURL: 'https://manager-c3849.firebaseio.com',
      projectId: 'manager-c3849',
      storageBucket: 'manager-c3849.appspot.com',
      messagingSenderId: '28784387628'
    };
    firebase.initializeApp(config);
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

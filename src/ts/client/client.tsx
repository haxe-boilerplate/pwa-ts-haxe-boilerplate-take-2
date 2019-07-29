import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { configureSocket } from './utils/socket';
import { createStore } from 'redux';
import reducer from './utils/reducer';
import { Provider } from 'react-redux';

import { client } from './hx';

const superClientComponent = new client.SuperClientComponent();
superClientComponent.saySomething('Hello from Haxe packaged by webpack and running from the client!');
superClientComponent.thisIsNice = {bar: 'foo', bow: 2};
console.log(superClientComponent.thisIsNice);

// typed api from tink, since the typing information is not really visible from TS,
// but at least you can consume it and refer to the Haxe code for typing information.

client.Client.call().handle(result =>
  console.log(result.slideshow)
);

const store = createStore(reducer);

export const socket = configureSocket(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/statics/service-worker.js');
  }
})();

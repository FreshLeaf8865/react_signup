'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routes from './routes'

let div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(
    <Provider store={store}>
        <Routes store={store}/>
  </Provider>,
  div
);
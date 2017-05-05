'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import store from './redux/store';
import Main from './components/MainComponent';
import MultiStepsForm from './containers/MultiStepsForm';
import ErrorPage from './containers/ErrorPage';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route name="home" component={Main}>
                <Route path="/" component={MultiStepsForm} />
                <Route path="*" component={ErrorPage} />
             </Route>
        </Router>
  </Provider>,
  document.getElementById('main')
);
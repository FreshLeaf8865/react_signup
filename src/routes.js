import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './redux/store';
import {hashHistory} from 'react-router';
import {Router, Route} from 'react-router';
import Main from './components/MainComponent';
import MultiStepsForm from './containers/MultiStepsForm';
import ErrorPage from './containers/ErrorPage';
const history = syncHistoryWithStore(hashHistory, store);

export default function (props = {}) {
    return (
      <Router history={history}>
          <Route name="home" component={Main}>
              <Route path="/" component={MultiStepsForm} />
              <Route path="*" component={ErrorPage} />
          </Route>
      </Router>
    )
}
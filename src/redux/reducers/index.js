'use strict';

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    form: reduxFormReducer,
    routing: routerReducer
})

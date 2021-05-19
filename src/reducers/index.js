// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import ErrorReducer from './error-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  errors: ErrorReducer,
  auth: AuthReducer,
});

export default rootReducer;

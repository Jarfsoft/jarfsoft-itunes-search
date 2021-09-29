import { combineReducers } from 'redux';

import song from './song';

const rootReducer = combineReducers({
  song,
});

export default rootReducer;
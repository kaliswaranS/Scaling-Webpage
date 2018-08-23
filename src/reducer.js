import { combineReducers } from 'redux';

import { reducer as DataListReducer } from './data-list';

const rootReducer = combineReducers({
  dataList: DataListReducer,
});

function indexReducer(state, action) {
  return rootReducer(state, action);
}

export default indexReducer;

import _ from 'lodash';
import * as actionTypes from '../constants/action-types';

const initialState = {
  data: [],
  filteredData: [],
};

function dataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SAVE_DATA: {
      return {
        ...state,
        data: _.uniqBy(action.dataList, 'userId'),
      };
    }
    case actionTypes.FIND_DATA: {
      return {
        ...state,
        filteredData: _.filter(state.data, (item) => _.includes(item.title, action.searchString)),
      };
    }
    default:
      return state;
  }
}

export default dataReducer;

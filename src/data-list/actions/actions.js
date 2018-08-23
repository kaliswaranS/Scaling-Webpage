import * as actionTypes from '../constants/action-types';

function fetchData() {
  return {
    type: actionTypes.FETCH_DATA,
  };
}

function saveData(dataList) {
  return {
    type: actionTypes.SAVE_DATA,
    dataList,
  };
}

function findData(searchString) {
  return {
    type: actionTypes.FIND_DATA,
    searchString,
  };
}

export {
  fetchData,
  saveData,
  findData,
};

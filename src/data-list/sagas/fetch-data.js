import _ from 'lodash';
import { put, call, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { FETCH_DATA } from '../constants/action-types';
import * as actions from '../actions/actions';
import { request } from '../../api/request';

import { mapResponseData } from '../mappers/data-list-mapper';

function* fetchAllData() {
  try {
    const response = yield call(request, 'get');
    if (response.status < 400) {
      const mappedData = mapResponseData(response.data);
      yield put(actions.saveData(mappedData));
    }
  } catch (e) {
    yield put(actions.saveData([]));
  }
}

function* fetchData() {
  yield call(fetchAllData);
}

function* watchFetchData() {
  yield call(takeLatest, FETCH_DATA, fetchData);
}

export {
  watchFetchData,
};

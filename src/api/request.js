import { call } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';

export function* request(method, body) {

  const url = 'https://jsonplaceholder.typicode.com/todos'; // Sample Data URL

  const headers = {};

  try {
    switch (method) {
      case 'get':
      case 'GET':
        return yield call(axios.get, url, headers);
    }
  } catch (error) {
    return error.response;
  }
}

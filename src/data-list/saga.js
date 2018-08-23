import { watchFetchData } from './sagas/fetch-data';

export function* getDataSaga() {
  yield [
    watchFetchData(),
  ];
}

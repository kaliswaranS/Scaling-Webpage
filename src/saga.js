import { saga as dataList } from './data-list';

export default function* indexSaga() {
  yield [
    dataList(),
  ];
}

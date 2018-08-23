import _ from 'lodash';

function mapResponseData(data = []) {
  return _.map(data, ({
    id,
    title,
    userId,
    completed,
    }) => ({
      id: id,
      title: title,
      userId: userId,
      completed: completed,
    }));
}

export {
  mapResponseData,
};

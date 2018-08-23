import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import dataPropertyTypes from '../constants/data-property-types';

const generateLabelWithValueNode = (label, value) => (
  <p>
    <span className="list-items__label-name">{label}:</span>
    <span className="list-items__label-value">{value}</span>
  </p>
);

const generateListCard = (card) => {
  const { id, title, userId, completed } = card;
  return (
    <div className="list-items__card" key={id} tabIndex="0">
      <p className="list-items__name">{title}</p>

      <div className="list-items__section">
        {generateLabelWithValueNode("UserID", userId)}
        {generateLabelWithValueNode("Status", completed ? 'Yes' : 'No')}
      </div>

    </div>
  );
};

const ListItems = ({ dataList }) => (
  <section className="list-items">
    {_.map(dataList, generateListCard)}
  </section>
);

ListItems.propTypes = {
  dataList: dataPropertyTypes.isRequired,
};

export default ListItems;

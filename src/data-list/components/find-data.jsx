import React from 'react';
import PropTypes from 'prop-types';

const getInputNode = (onSearch) => (
  <input
    type="text"
    id="search-box"
    placeholder="Search data"
    className="find-data__search-box"
    onChange={(e) => onSearch(e.target.value)}
  />
);

const FindData = ({ onSearch }) => (
  <section className="find-data">
    <label htmlFor="search-box" className="h3">Search here =></label>
    {getInputNode(onSearch)}
  </section>
);

FindData.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default FindData;

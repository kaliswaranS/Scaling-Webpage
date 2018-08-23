import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FindData from './find-data';
import ListItems from './list-items';

import {
  fetchData as fetchDataAction,
  findData as findDataAction,
} from '../actions/actions';

import dataPropertyTypes from '../constants/data-property-types';

export class DataListContainer extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const {
      data,
      onSearch,
      filteredData,
      clearFilters,
    } = this.props;

    const dataList = filteredData.length > 0 ? filteredData : data;

    return (
      <div className="container">
        <FindData
          onSearch={onSearch}
        />

        <article className="main-content">
          <ListItems
            dataList={dataList}
          />
        </article>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: _.get(state, 'dataList.data'),
    filteredData: _.get(state, 'dataList.filteredData'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData: fetchDataAction,
    onSearch: findDataAction,
  }, dispatch);
}

DataListContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  data: dataPropertyTypes.isRequired,
  filteredData: dataPropertyTypes.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataListContainer);

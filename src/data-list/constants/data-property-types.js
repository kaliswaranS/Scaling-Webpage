import PropTypes from 'prop-types';

const dataPropertytypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    style: PropTypes.string,
    completed: PropTypes.bool
  })
);

export default dataPropertytypes;
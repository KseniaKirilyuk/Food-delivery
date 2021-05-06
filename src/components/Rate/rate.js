import React from 'react';
import PropTypes from 'prop-types';

const Rate = ({ rate }) => {
  return <div>{rate}</div>;
};

Rate.propTypes = {
  rate: PropTypes.number.isRequired,
};
export default Rate;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ amount, onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick.decrement}> - </button>
      {amount}
      <button onClick={onButtonClick.increment}> + </button>
    </div>
  );
};

Button.propTypes = {
  decrement: PropTypes.func,
  increment: PropTypes.func,
  amount: PropTypes.number,
};
export default Button;

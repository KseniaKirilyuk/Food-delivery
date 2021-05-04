import React from 'react';
const Button = ({ amount, onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick.decrement}> - </button>
      {amount}
      <button onClick={onButtonClick.increment}> + </button>
    </div>
  );
};
export default Button;

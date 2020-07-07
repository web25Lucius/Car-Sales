import React from 'react';
import {useSelector} from 'react-redux';

const Total = () => {
  const {car: {price}, additionalPrice} = useSelector(state => state);

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

export default Total;

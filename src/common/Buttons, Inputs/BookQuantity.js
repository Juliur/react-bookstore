import React from 'react';
import {connect} from 'react-redux';
import {incrementBookQuantity, decrementBookQuantity} from '../../actions/index';
import "./bookQuantity.css";

const BookQuantity = ({
  id,
  availableQuantity, 
  incrementBookQuantity, 
  decrementBookQuantity,
  quantity,
}) => {

  const renderAvailableItems = (availableQuantity) =>
    (availableQuantity <=5) ? <p>Items available: {availableQuantity}</p> : ""

  return(
    <div>
       <button 
          disabled={quantity <= 1}
          className="quantity-btn m-1"
          onClick={() => decrementBookQuantity(id)}
        >-</button>
      <input type="text" value={quantity} className="quantity-input" readOnly/>
      <button 
        disabled={availableQuantity === 0}
        className="quantity-btn m-1"
        onClick={() => incrementBookQuantity(id)}
      >+</button>
      <div>
        {renderAvailableItems()}
      </div>
    </div>
  )
}

export default connect(
  null, 
  {incrementBookQuantity, decrementBookQuantity}
  )(BookQuantity)
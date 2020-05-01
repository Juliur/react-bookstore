import React from 'react';

const BookQuantity = ({
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
          onClick={decrementBookQuantity}
          disabled={quantity <= 1}
        >-</button>
      <input type="text" value={quantity} className="quantity-input" readOnly/>
      <button 
        disabled={availableQuantity === 0}
        onClick={incrementBookQuantity}
      >+</button>
      <div>
      {renderAvailableItems()}
      </div>
    </div>
  )
}

export default BookQuantity
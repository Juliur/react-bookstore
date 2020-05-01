import React from 'react';

const CartTotal = ({totalPrice}) =>{
  return(
    <div>
      <h4>Order summary</h4>
      {totalPrice}
    </div>
  )
}

export default CartTotal
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";

const Subtotal = () => {
    const[{basket}, dispatch]=useStateValue();
  return (
    <div className='subtotal'>
    <CurrencyFormat 
    renderText={(value)=>(
        <>
        <p> Subtotal({basket.length}items): <strong>'Rs.{value}'</strong></p>
        <small className='subttotal_gift'>
            <input type="checkbox"/>This order conatin gifts
        </small>
        </>
    )}
        decimalScale={1}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"Rs."}
    />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

import React from 'react'
import { useStateValue } from './StateProvider'
import Sale from './images/sale.png'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css';
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{basket}]=useStateValue();
  
  return(
    <div className='checkout'>
    <div className='checkout_left'>
    <img className='checkout_add'src={Sale} alt=''/>
    {basket?.length===0 ?(
      <div>
        <h2>
          Your Shopping Basket is empty 
        </h2>
        <p>
          You have no items in your basket.To buy one or more items click "Add to basket"next to the item.
        </p>
      </div>

    )
    : (
      <div>
      <h2 className='checkout_title'> Your Shopping Basket</h2>
      {basket?.map((item) => (     
        
        
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}/>
      )
        )}
      </div>
    )}
    </div>
    {basket.length > 0 &&(
      <div className='checkout_right'>
      <Subtotal/>
          </div>
    )}
    </div>
  );
}

export default Checkout;

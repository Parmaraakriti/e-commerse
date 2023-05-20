import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log()
  const removefrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      title: title,
      image: image,
      rating: rating,
    });
  }
  return (
    <div className='checkoutproduct'>
      <img className='checkoutproduct_image' src={image} alt='' />
      <div className='checkoutproduct_info'>
        <p className='checkoutproduct_title'>{title}</p>
        <p className='checkoutproduct_price'>
          <small>Rs.</small>
          <strong>{price}</strong></p>
        <div className='checkoutproduct_rating'>
          {
            Array(rating)
              .fill()
              .map((_) => (<p>&#11088;</p>))
          }
        </div><div style={{textAlign:"start"}}>
        <button onClick={removefrombasket}> Remove From Basket</button>
        </div>
        </div>
      
    </div>
  )
}

export default CheckoutProduct

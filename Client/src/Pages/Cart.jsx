import React, { useContext, useEffect } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const Cart = () => {
  const navigate=useNavigate();
  const { all_product,email} = useContext(ShopContext);
  useEffect(()=>{
    if(!email){
       navigate('/login')
   }
 },[])
  return (
    <div>
      <CartItems/>
    </div>
  )
}

export default Cart

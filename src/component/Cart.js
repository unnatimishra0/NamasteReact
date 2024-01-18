import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const cartItems=useSelector((store)=> store.cart.items)
//we dont select(selector) or  cannot  write like this also but this is an inefficient way
  // const store =useSelector((store)=> store);

  // const cartitems=store.cart.items;

  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart page</h1>
      <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg'
        onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length===0 && <h1>Cart is empty........ please add items to cart </h1>}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  )
}

export default Cart

import React from 'react'
import Button from '../../ui/button'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from './cartSlice';

function UpdateItemQuantity({pizzaId,currentQuantity}) {
  const dispatch = useDispatch();

  return (
    <div className='flex gap-1 items-center md:gap-3'>
        <Button type="round" onClick={()=> dispatch(decreaseQuantity(pizzaId))}>-</Button>
        <span className='text-sm font-bold'>{currentQuantity}</span>
        <Button type="round" onClick={()=> dispatch(increaseQuantity(pizzaId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity
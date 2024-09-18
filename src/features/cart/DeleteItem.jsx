import React from 'react'
import Button from '../../ui/button'
import { deleteItem } from './cartSlice'
import { useDispatch } from 'react-redux'

function DeleteItem({pizzaId}) {
  const dispatch = useDispatch();
  return (
    <Button type='small' onClick={()=> dispatch(deleteItem(pizzaId))} >Delete</Button>
  )
}

export default DeleteItem
import React,{useContext} from 'react'
import{cartContext} from "../Context/Cart"
function Cart() {
  const cart = useContext(cartContext)
  return (
    <>
    <h1>CART</h1>
    {cart && cart.items.map(item=><li>{item.name}-{item.price}</li>)}
    <h5>Total Bill: $</h5>
    </>
  )
}

export default Cart
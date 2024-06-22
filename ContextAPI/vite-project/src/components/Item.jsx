import React,{useContext} from 'react'
import {cartContext} from"../Context/Cart"
function Item(props) {
  const cart = useContext(cartContext);
  console.log(cart); 
  return (
    <>
   <div className="item-card">
    <h4>{props.itemName}</h4>
    <p>{props.pricee}</p>
    <button onClick ={()=>cart.setItems([...cart.items,{name:props.itemName,price:props.pricee}])}>Add to cart</button>
   </div>
    </>
  )
}

export default Item
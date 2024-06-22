import { useContext } from 'react'
import Item from './components/Item'
import './App.css'
import Cart from './components/Cart';


function App() {
  const amazonItems = [
    { itemName: "Wireless Bluetooth Headphones", price: 29.99 },
    { itemName: "Instant Pot Pressure Cooker", price: 89.99 },
    { itemName: "Fire TV Stick 4K", price: 39.99 },
    { itemName: "Echo Dot (4th Gen)", price: 49.99 },
    { itemName: "Kindle Paperwhite", price: 129.99 },
    { itemName: "Apple iPhone 13", price: 799.99 }
  ];

  return (
    
    <div className="App">
      {amazonItems.map((item,index)=>(
        <Item key={index} itemName ={item.itemName} pricee={item.price} />
      ))}
      <Cart/>
    </div>


    
  )
}

export default App

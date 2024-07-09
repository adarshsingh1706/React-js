import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counter';
import DummyComp from './component/DummyComp';

function App() {
  
  const count = useSelector((state)=>state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
    <h1>Count is {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <DummyComp/>
  </div>
  )
}

export default App

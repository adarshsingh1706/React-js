import React from 'react'
import { useSelector } from 'react-redux'

function DummyComp() {
  const count = useSelector((state) => state.counter);
  return (
    <div>
      <h2>Dummy Component</h2>
      <p>The count is: {count}</p>
    </div>
  )
}

export default DummyComp
import React from 'react'
import {useParams} from "react-router-dom"
function SayUser() {

  const params = useParams();
  console.log("params",params);
  return (
    <>
    <h1>
    Your name is {params.userid} 
    </h1>
    </>
  )
}

export default SayUser
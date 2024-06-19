import React from 'react'
import { useEffect,useState } from 'react';
import {useParams} from "react-router-dom"
function Postpage() {
  const params = useParams();
  console.log("params",params)
  const [description,setDescription] =useState({});


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    .then(response=>response.json())
    .then(data=>{setDescription(data);
     console.log("Data" ,data)})
   
  },[])

  if (Object.keys(description).length === 0) return <h2 style={{ color: "white" }}>Loading...</h2>;




  return (
    <>
    <h1>{description.title}</h1>
    <p>{description.body}</p>
    </>
  )
}

export default Postpage
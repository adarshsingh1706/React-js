import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes, Route, useParams} from "react-router-dom"
import Home from './components/Home.jsx'
import About from "./components/About.jsx"
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import SayUser from './components/SayUser.jsx'
import Postpage from './components/Postpage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element ={<About/>}/>
      //nested
      <Route path ="account">
        <Route path ="profile" element ={<Profile/>}/>
        <Route path ="login" element ={<Login/>}/>
      </Route>
      <Route path="/user/:userid" element ={<SayUser/>}/>
      <Route path="/post/:postid" element ={<Postpage/>}/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)

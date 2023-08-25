import React from 'react'
import { useNavigate } from 'react-router-dom'
import"../App.css"
function Home() {
  const navigate = useNavigate()
 
  return (
    <div className="boxes">
      <div className="box">
      <h1>Abhinav's Pizzeria</h1>
      <p>Pizza to fit any taste.</p>
      <button id='ordbtn' onClick={()=>{navigate('/menu')}}>Order Now</button>
      </div> 
    </div>
  )
}

export default Home
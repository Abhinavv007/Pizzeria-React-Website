import React from 'react'
import { useNavigate } from 'react-router-dom'
import"../App.css"
function ContactUs() {
  const navigate = useNavigate()
  return (
    
    <div className="cbox">
        
        <div className="cleft">
       
        </div>
        <div className="cright">
       
            <div className="opbox">
            <h1>Send us a message🚀</h1>
                <div className="name">
            <label htmlFor="Name">Name  </label>
            <input className='input'  type="text" /> <br /> </div>
            <div className="email">
            <label htmlFor="Email">Email  </label>
            <input className='input' type="text" /> <br /> </div>
            <div className="phone">
            <label htmlFor="Phone">Phone  </label>
            <input className='input' type="text" /> <br /> </div>
            <label id='lab'htmlFor="Opinion" >Opinion </label>
            <input className='input' id="inpt" placeholder='Write your opinion here...' type="text" /> <br />
            <button onClick={()=>{navigate('/thanks')}} id='sub-btn'>Submit</button>
            </div>

        </div>
    </div>
  )
}

export default ContactUs
import React from 'react'
import"../App.css"
import { useNavigate } from 'react-router-dom'


function Menu() {
  const navigate = useNavigate()
  return (
    <div className="menu">
        <div className="menu-title">
        <h1>Our Menu</h1>
        </div>
        <div className="menuList">
          <div className="mleft">
          
          </div>
          <div className="mright">
            <h3 className='h3t'>₹499
            
            </h3>
            <button onClick={()=>{navigate('/thanks')}} className='buybtn'>Buy</button>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, hic exercitationem, natus neque nam numquam voluptatibus eveniet, harum consectetur eius accusantium? Quas, voluptatibus!</p>
          </div>
        
           
        
        </div>
        <div className="menuList2">
        <div className="mleft mleft2">
          
          </div>
          <div className="mright">
          <h3 className='h3t'>₹599</h3>
          <button onClick={()=>{navigate('/thanks')}} className='buybtn'>Buy</button>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, hic exercitationem, natus neque nam numquam voluptatibus eveniet, harum consectetur eius accusantium? Quas, voluptatibus!</p>
          </div>
          
          
        
        </div>
        <div className="menuList3">
        <div className="mleft mleft3">
          
         
          </div>
          <div className="mright">
          <h3 className='h3t'>₹799</h3>
          <button onClick={()=>{navigate('/thanks')}} className='buybtn'>Buy</button>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, hic exercitationem, natus neque nam numquam voluptatibus eveniet, harum consectetur eius accusantium? Quas, voluptatibus!</p>
          </div>
          
          
        
        </div>
    </div>
  )
}

export default Menu
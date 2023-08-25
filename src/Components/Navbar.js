import React,{useState} from 'react'
import Logo from "../Assets/pizzaLogo.png"
import { Link } from 'react-router-dom'
import"../App.css"
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
    const [openLink,setOpenLink] = useState(true)
    const OpenLink = ()=>{
        setOpenLink(!openLink)
    }
  return (
    <div className="navbar">
    <div className="left">
        <img src={Logo} alt="Logo"/>
    </div>
    {openLink?(
    
    <div className="right">
    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/about">About</Link>
    <Link to="/contactus">Contact us</Link>
    <button onClick={OpenLink} id='rebtn2'> <ReorderIcon/></button>

   
    
    </div>
     ) : (
    <button onClick={OpenLink} id='rebtn'> <ReorderIcon/></button>
    )}
    </div>
    

  )
}

export default Navbar
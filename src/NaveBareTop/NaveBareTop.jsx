
import { Link } from "react-scroll";
import "./index.css";
import { useState } from "react";
import { useHistory } from "react-router-dom"



const NaveBareTop = () => {
  const [click,setClick]=useState(false)
  const history = useHistory()
   
  return (
   <div className="header">
          <div className='logo'>
            <span className='groupText'><img src="image/Logo.png" alt="" /></span>
          </div>
         <div className='mainBar'>
          <div className={click ? "mobil-nave" : "navLinks"} onClick={()=>setClick(false)}>
            <a onClick={()=>history.push("/")} className='navLink'>HOME</a>
            <Link spy={true} to="about" smooth={true} activeClass="activeClass"><a  className='navLink'>ABOUT US</a></Link>
            <a onClick={()=>history.push("/news")} className='navLink'>BLOG</a> 
            <a onClick={()=>history.push("/courses")} className='navLink'>COURSES</a> 
            <a className='navLink'>E- LEARN</a>
            <a onClick={()=>history.push("/verification")}  className='navLink'>VERIFICATION</a>
          </div>
           <button className="toggle"  onClick={()=>setClick(!click)}>
              {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
         
        </div>
       </div>
  )
}

export default NaveBareTop

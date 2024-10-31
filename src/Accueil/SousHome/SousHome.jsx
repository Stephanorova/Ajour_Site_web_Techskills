import React from 'react';
import'./index.css'
import Ourvalues from '../Ourvalues/Ourvalues';
import Service from '../Ourservice/Service';
import About from '../AboutUS/AboutUs';
import Referance from '../Referance/Referance';
import Pub from '../Pub/Pub';
import{ useHistory } from "react-router-dom"
import { Link } from "react-scroll";





const SousHome = () => {
    const history = useHistory()
  return (
 <>
    <div className="bonneraison">
       <div className="menue">
          <div className="newsmenu" onClick={()=>history.push("/news")}>
            <h3>NEWS</h3>
           <label> <i class="fa fa-arrow-right"/></label>
          </div>
          <div className="menucenter">
            <div className="hautemenu">
            <Link spy={true} to="about" smooth={true} activeClass="activeClass">
               <div className="contact">
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>Contact</h3>
                  <h4>Us</h4>
                  </div>
               </div>
               </Link>
               <Link spy={true} to="about" smooth={true} activeClass="activeClass">
               <div className="view">
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>About</h3>
                  <h4>Us</h4>
                  </div>
               </div>
                  </Link>
            </div>
            <div className="basmenu">
            <div className="calandarsmenu" onClick={()=>history.push("/news")}>
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>Training</h3>
                  <h4>calandar</h4>
                  </div>
               </div>
               <div className="viewsmenu" onClick={()=>history.push("/courses")}>
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>View all</h3>
                  <h4>courses</h4>
                  </div>
               </div>
            </div>
          </div>
          <div className="menuleftes">
            <div className="logmenu" onClick={()=>history.push("/news")}>
            <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>Blog</h3>
                  </div>
            </div>
            <div className="historymenu">
            <span><i class='fa fa-plus icon'></i></span>
                  <div className="us" onClick={()=>history.push("/news")}>
                  <h3>History</h3>
                  <h4>archive</h4>
                  </div>
            </div>
          </div>
       </div>
    </div>
    <div className="slide" id='about'>
        <About/>
    </div>
    <div className="ourvalue">
        <Ourvalues/>
    </div>
    <div className="service">
        <Service/>
    </div>
    <div className="referenc">
        <Referance/>
    </div>
    <div className="pub">
        <Pub/>
    </div>
</>
  )
}

export default SousHome

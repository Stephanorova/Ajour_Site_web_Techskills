import React from 'react';
import'./index.css'
import Ourvalues from '../Ourvalues/Ourvalues';
import Service from '../Ourservice/Service';
import About from '../AboutUS/AboutUs';
import Referance from '../Referance/Referance';
import { useHistory } from "react-router-dom"
import { Link } from 'react-scroll';
import Pub from '../Pub/Pub';






const SousHome = () => {
  const history = useHistory()
  return (
 <>
    <div className="bonneraison">
       <div className="menue">
          <div className="menuLeft">
            <div className="news" onClick={()=>history.push("/news")}>
                <span>NEWS</span>
                <i class="fa fa-arrow-right"/>
            </div>
          </div>
          <div className="menuCenter">
            <div className="menucentertop">
             <div className="contactes">
               <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                <div>
                <span>Contact</span>
                <p>us</p>
                </div>
             </div>
             <div className="training" onClick={()=>history.push("/courses")}>
             <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                <div>
                <span>Training</span>
                <p>Calandar</p>
                </div>
             </div>
             </div>
             <div className="menucenterbottom">
             <Link to='about' spy={true} smooth={true} activeClass="activeClass">
             <div className="calandare">
             <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                <div>
                <span>About</span>
                <p>us</p>
                </div>
             </div>
             </Link>
             <div className="view" onClick={()=>history.push("/courses")}>
             <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                <div>
                <span>View all our</span>
                <p>courses</p>
                </div>
             </div>
             </div>
          </div>
          <div className="menuRigth">
            <div className="blockmenu">
             <div className="blog" onClick={()=>history.push("/news")}>
             <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                <div>
                <span>Blog</span>
                </div>
             </div>
             <div className="story" onClick={()=>history.push("/news")}>
             <label> <i class="fa fa-plus" aria-hidden="true"></i></label>
                <div>
                <span>Story</span>
                <p>Archives</p>
                </div>
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

import { Link } from 'react-scroll'
import './index.css'
import SousCourse from './SousCours/SousCourse'





const Courses = () => {
   

 
  return (
    <>
    <div className='Coursfont'>
       <div className="row">
            <h1>Get started now!</h1>
            <p>Choose your course:</p>
             <div className="bouttonCours">
              <div className="haute">
             <div className='courschoix'>
                      <span>ICTNE TELECOM  →</span>
              </div>
              <div className='courschoix'>
                      <span>LCCTNE TELECOM →</span>
              </div>
              <div className='courschoix'>
                      <span>Work at Height and Fall Protection (WAH) →</span>
              </div>
              </div>
              <div className="centre">
              <div className='courschoix'>
                      <span>Electrical Safety and Authorization (ESA) →</span>
              </div>
              <div className='courschoix'>
                      <span>Defensive Driving (DD) →</span>
              </div>
              <div className='courschoix'>
                      <span>Fire Safety (FS) →</span>
              </div>
              </div>
              <div className="bas">
              <div className='courschoix'>
                      <span>Risk Analysis (RA) →</span>
              </div>
              <div className='courschoix'>
                      <span>Rope Rigging & Lifting →</span>
              </div>
              <div className='courschoix'>
                      <span>Fall Protection & Rescue (FPR)  →</span>
              </div>
              </div>
             </div>
        </div>
             <button className='buttons'>Learn more</button>
    </div>
    <div className="sousCourses">
       <SousCourse/>
    </div>
</>
  )
}

export default Courses

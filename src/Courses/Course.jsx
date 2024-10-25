import { Link } from 'react-scroll'
import './index.css'
import SousCourse from './SousCours/SousCourse'
import { useHistory } from 'react-router-dom'

let bouttonCours = [
  {
    id: 1,
    title : 'ICTNE TELECOM  →'
  },
  {
    id: 2,
    title : 'LCCTNE TELECOM →'
  },
  {
    id: 3,
    title : 'Work at Height and Fall Protection (WAH) →'
  },
  {
    id: 4,
    title : 'Electrical Safety and Authorization (ESA) →'
  },
  {
    id: 5,
    title : 'Defensive Driving (DD) →'
  },
  {
    id: 6,
    title : 'Fire Safety (FS) →'
  },
  {
    id: 7,
    title : 'Risk Analysis (RA) →'
  },
  {
    id: 8,
    title : 'Rope Rigging & Lifting →'
  },
  {
    id: 9,
    title : 'Fall Protection & Rescue (FPR)  →'
  },
]


const Courses = () => {
   
  const history = useHistory()
 
  return (
    <>
    <div className='Coursfont'>
       <div className="row">
            <h1>Get started now!</h1>
            <p>Choose your course:</p>
             <div className="bouttonCours">
                {
                  bouttonCours.map((val) => {
                    return(
                    <div className='courschoix' key={val.id} >
                      <span>{val.title}</span>
                    </div>
                  )})
                }
             </div>
        </div>
            <label>Learn More</label>
    </div>
    <div className="sousCourses">
       <SousCourse/>
    </div>
</>
  )
}

export default Courses

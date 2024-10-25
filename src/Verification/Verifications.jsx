import './index.css'
import Verification from './Sousverification/Verification'

const Verifications = () => {
  return (
    <>
    <div className='verification'>
      <div className="row">
            <h1>Verification</h1>
            <h1>STUDENT</h1>
            <p>who followed our</p>
            <p>training courses →</p>
        </div>
    </div>
    <div className="souverification">
        <Verification/>
    </div>
    </>
  )
}

export default Verifications

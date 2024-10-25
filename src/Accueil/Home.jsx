import'./index.css'
import SousHome from './SousHome/SousHome'


const Home = () => {
  


  return (
  <>
    <div className='home'>
        <div className="row">
            <h1>Get trained,</h1>
            <h1>BE SAFE</h1>
            <p>Professional and Technical Training</p>
            <p>Center in HSE &</p>
            <p>Telecommunications Networks & ISO</p>
            <button>Learn More</button>
        </div>
    </div>
    <div className="souhome">
      <SousHome/>
    </div>
    </>
  )
}

export default Home


import'./index.css'
import SousNews from './SousNews/SousNews'



const News = () => {

  return (
<>
    <div className='newsfont'>
       <div className="row">
            <h1>PECB &</h1>
            <h1>TECHSKILLS</h1>
            <p>PECB has signed a partnership </p>
            <p>agreement with TechSkills Learning</p>
            <button>Learn More</button>
        </div>
    </div>
    <div className="sousNews">
       <SousNews/>
    </div>
</>
  )
}

export default News
import "./index.css"
import { data4 } from "./data4";
import { ChevronRight } from "lucide-react";


const Referance = () => {



  return (
    <div className="referances">
        <div className="referanceAdverb">
            <h1>Reference</h1>
            <span>Want to know more about our partners?</span>
            <span>Get our catalog by email now</span>
            <div className="slids">
            {
            data4.map(index =>(   
             <section className='informations' key={index.id}>
                   <img src={index.image} alt="image" />
                   <div className="focus"/>
              </section>
            )
          )
           }
            </div>
            <form className="form">
               <input type="text" />
               <label ><ChevronRight/></label>
            </form>
        </div>
    </div>
  )
}

export default Referance

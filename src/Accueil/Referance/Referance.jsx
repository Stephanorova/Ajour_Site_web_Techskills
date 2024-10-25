import "./index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data4 } from "./data4";


const Referance = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        appendDots: (dots)=>{
          return <ul style={{margin:"-10px"}}>{dots}</ul>
        }
      };


  return (
    <div className="referances">
        <div className="referanceAdverb">
            <h1>Reference</h1>
            <span>Those who choose Us.</span>
            <div className="slids">
            <Slider {...settings}>
            {
            data4.map(index =>(   
             <section className='informations' key={index.id}>
                   <img src={index.image} alt="image" />
                   <div className="focus"/>
              </section>
            )
          )
           }
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default Referance

import { useRef, useState } from 'react'
import './index.css'
import  EmailJS  from "@emailjs/browser"


const About = () => {
    const [colaps,setColaps] = useState(false)
    const [saisir,setSaisire] = useState({
      nom: '',
      email : '',
      message: '',
   })
  
   const form = useRef();
  
   const sendEmail = (e)=>{
    e.preventDefault()
    const send =  EmailJS.sendForm('service_b1uyhcr','template_972lsef' ,form.current,'goflVDn8UP0myT3qG')
    .then((result) => {
      console.log(result.text);
      window.location.reload(true)
    })
    .catch(error =>console.log(error.text))
   
      if (send) {
           alert("success")
      } else{
       alert("erreur")
      }}

  return (
    <div className="flex flex-col md:flex-row p-8 mx-auto gap-[10rem]">
    <div className="about">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">About Us</h1>
      <p className="mb-8 text-gray-700 text-[16px]">
        TechSkills Learning Institute is a Professional and Technical Training
        Center based in Antananarivo, Madagascar. We specialize in Health,
        Safety, and Environment (HSE) and Network Telecommunications.
      </p>
      <p className="mb-6 text-gray-700 text-[16px]">
        Our mission is to empower individuals and organizations with the skills they
        need to thrive in dynamic and challenging work environments.
      </p>
      <button className="bouton" onClick={()=> setColaps(!colaps)}>
        CONTACT US
      </button>
        <div className="colaps">
        {
          colaps && 
            <form onSubmit={sendEmail} ref={form} className='formeColaps'>
              <label>Let us a message</label>
              <input type="text" name='user_name' placeholder='Enter your name' onChange={(e)=>setSaisire({...saisir , nom : e.target.value})}/>
              <input type="text" name='user_email' placeholder='Enter your email' onChange={(e)=>setSaisire({...saisir , email : e.target.value})}/>
              <textarea name="message" type="text" placeholder='Write your message' onChange={(e)=>setSaisire({...saisir , message : e.target.value})}/>
              <button>SEND</button>
            </form>
        }
        </div>
    </div>
    <div className="imagedroite">
      <img
        src="/image/Capture3.png"
        alt="Technician working on a telecommunications tower"
      />
    </div>
  </div>
  )
}

export default About

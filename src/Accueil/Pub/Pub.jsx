import './index.css'
import { useRef, useState } from "react"
import  EmailJS  from "@emailjs/browser"

const Pub = () => {
    
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
    <div className='pub'>
      <div className="pubCadre">
        <div className="pubLeft">
        <i class="fa fa-bell" aria-hidden="true"></i>
         <h3>SUBSCRIBE US</h3>
        </div>
        <form onSubmit={sendEmail} ref={form} className="pubRigth">
            <input type="email" name='user_email' placeholder='Enter you emil...' onChange={(e)=>setSaisire({...saisir , email : e.target.value})} />
            <button>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Pub

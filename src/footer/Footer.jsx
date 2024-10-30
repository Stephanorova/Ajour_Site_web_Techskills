import './index.css'
import { Globe, Facebook, Linkedin, Instagram, Phone,Mail } from 'lucide-react';

const Footer = () => {


  return (
    <div className="footer">
    <div className="bg-blue-950 text-white p-20 flex justify-between items-center">
    <div className="space-y-6">
      <div>
        <h2 className="text-xm font-bold mb-4 font-custom">Contact Us</h2>
        <p className="flex items-center mb-2">
          <span className="mr-2"><Phone size={18} /></span>
          (261) 38 46 503 32
        </p>
        <p className="flex items-center">
          <span className="mr-2"><Mail size={18} /></span>
          administration@tech-skills.co
        </p>
      </div>
      
      <div>
        <h2 className="text-xm font-bold mb-4 font-custom">Office Hours</h2>
        <p>Monday to Friday</p>
        <p>8:00 am to 5:00 pm</p>
        <p>Closed on Saturdays & Sundays</p>
      </div>
      
      <div className="flex space-x-4 mt-1">
        <h2 className="text-xl font-bold font-custom">Follow us online</h2>
        <div className="flex space-x-4">
          <Facebook size={22} />
          <Linkedin size={22} />
          <Instagram size={22} />
        </div>
      </div>
    </div>
    <div className="footerrigth">
    <div className="flex flex-col items-center">
        <img src="/image/Logo.png" alt="TechSkills Logo" className="footerLogo" />
      <div className="right-8 flex items-center text-sm">
        <Globe size={16} className="mr-2" />
        <span>All Rights reserved to TechSkills Learning Institute</span>
      </div>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Footer

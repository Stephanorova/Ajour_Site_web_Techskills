import "./index.css"
import { FileText } from 'lucide-react';


const ServiceItem = ({ text }) => (
  <div className="flex items-center mb-4">
    <FileText className="text-blue-900 mr-2" size={25} />
    <span className="text-xs text-gray-600">{text}</span>
  </div>
);

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white p-8 border border-purple-500 ml-[80px] ml-[16rem] gap-[1.5rem]">
    <div className="imagegauche">
      <img
        src="/image/bonjour.jpg"
        alt="Handshake in a business setting"
      />
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0">
      <h1 className="text-4xl font-bold text-blue-900 mb-9 flex justify-end">Our Services</h1>
      <p className="text-gray-600 mb-9 text-[18px] mt-[5rem]">
        We offer a wide range of training programs tailored to
        the needs of various industries, including:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[36vw]">
        <ServiceItem text="Expert Instructors" />
        <ServiceItem text="Flexible Learning Options" />
        <ServiceItem text="Real-World Training" />
        <ServiceItem text="Exclusive Training Facility" />
        <ServiceItem text="Travel to provinces possible" />
        <ServiceItem text="Program tailored to your needs and availability" />
      </div>
    </div>
  </div>
  )
}

export default Service

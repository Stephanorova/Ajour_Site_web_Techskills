import React from 'react'
import { Calendar, MapPin } from 'lucide-react';
import './index.css'



const Accord = () => {
  return (
  <div className="technicien">
    <div className="max-w-7xl mx-auto p-8">
      {/* Left Column - Text Content */}
      <div className="telecomtraining">
      <div className="pr-8 mt-20">
        <div className="bg-red-800  text-white py-2 px-4 rounded-full inline-block mb-4">
          OCTOBER 1ST, 2024 :
        </div>
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Enrollments Now Open for Wave 14 of "TELECOM TECHNICIAN" Training!"
        </h1>
        <p className="mb-4">
          We are excited to announce that registrations are now open for the 14th session of our "TELECOM TECHNICIAN" training program! If you're looking to kickstart your career in telecommunications and technology, this is your chance.
        </p>
        <div className="flex items-center mb-2">
          <Calendar className="mr-2 text-red-800" size={20} />
          <span>Start Date: November 4, 2024</span>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="mr-2 text-red-800" size={20} />
          <span>Location: TechSkills Learning Institute</span>
        </div>
        <p className="mb-4">
          Don't miss the opportunity to gain valuable skills and become a certified technician in the field. Join us and take the first step towards a brighter future!
        </p>
        <p className="font-semibold">
          For more information, feel free to contact us!
        </p>
      </div>
      
      {/* Right Column - Image */}
      <div className="md:w-1/2 mt-4 md:mt-20">
        <img src="/image/pecb.PNG" alt="Telecom Technician Training"  className="imagelefte"/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Accord

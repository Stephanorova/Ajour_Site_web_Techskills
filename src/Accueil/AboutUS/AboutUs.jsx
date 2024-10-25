import './index.css'


const About = () => {
    

  return (
    <div className="flex flex-col md:flex-row p-8 max-w-6xl mx-auto gap-[10rem]">
    <div className="w-[20vw] ">
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
      <button className="bouton">
        CONTACT US
      </button>
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

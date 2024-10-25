import { CalendarDays,Calendar, MapPin } from 'lucide-react';
import './index.css'


const SousNews = () => {


  return (
    <div className="souscours">
    <div className="flex flex-col bg-white p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="mt-20">
          <div className="text-7xl ml-20 font-bold text-red-800 mb-4">
           <h1>PECB</h1> 
          </div>
          <span className="ml-20 text-3xl  text-black p-3 flex items-center justify-center mb-4">BEYOND RECOGNITION</span>
          <div className=" ml-20  bg-red-800 text-white p-3 flex items-center justify-center rounded-full mb-4">
            <CalendarDays className="mr-2" />
            <span>SEPTEMBER 30, 2024</span>
          </div>
          <h1 className=" text-[33px] ml-20 text-blue-800 mt-8 ">
            PECB has signed a partnership agreement with TechSkills Learning
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-100 pl-4 text-[13px] mt-20 p-5 ml-20">
          <p className="mb-4">
            September 30, 2024 - PECB is pleased to announce the establishment of a mutually
            beneficial partnership with TechSkills Learning, aimed at offering training programs
            in Madagascar. This partnership combines PECB's professional services with
            TechSkills Learning's capabilities to deliver training courses with expertise,
            satisfactory results, and an exceptional learning experience.
          </p>
          <p className="mb-4">
            "We are excited to begin this partnership with TechSkills Learning. It will allow us to
            increase national awareness of the importance of ISO standards. I am personally
            very pleased and confident to sign this agreement with TechSkills Learning," said
            Tim Rama, CEO of PECB. "Over the past few years, our partnership program has
            experienced phenomenal growth, and the initiatives specifically aimed at developing
            and maintaining voluntary partnerships have been a significant factor in our success.
            I am very satisfied that we have reached an agreement that is beneficial for both
            companies," concluded Mr. Rama.
          </p>
          <p className="mb-4">
            Tsihoarana Rakotoniana, General Manager of TechSkills Learning Institute:
            "We are very enthusiastic about this partnership with PECB, which will allow us to
            expand our training offerings to include internationally recognized programs that
            meet the highest standards. Together, we will raise awareness of the importance of
            ISO standards in Madagascar, and we firmly believe that this collaboration will open
            doors for our learners to position themselves in the international market while
            enhancing their local expertise."
          </p>
          <h2 className="font-bold mb-2">About PECB</h2>
          <p>
            PECB is a global provider of training, examination, and certification services,
            offering expertise in various fields including information security, information
            technology, business continuity, service management, risk management, quality
            management, safety, environment, and health. Through its network of partners,
            PECB provides education that enables professionals and organizations to
            demonstrate their commitment and competence to international standards. For
            more information, visit PECB's website.
          </p>
        </div>
      </div>
    </div>
    <div className="technicien">
    <div className="flex flex-col md:flex-row  p-8 max-w-9xl mx-auto">
      {/* Left Column - Text Content */}
      <div className="md:w-1/2 pr-8 mt-20">
        <div className="bg-red-800 text-white py-2 px-4 rounded-full inline-block mb-4">
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
    <div className="techniciens">
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col items-center">
         <div className="photohaute">
         <img
            src="/image/Capture2-removebg-preview.png"
            alt="Huawei Logo"
            class="w-[120px] h-[100px] "
          />
           <img
              src="/image/ok.jpg"
              alt="Training Session 1"
               class="w-[140px] h-[90px]"
            />
         </div>
        
          
          {/* Training Images */}
          <div className="grid grid-cols-1 gap-4 mb-6">
           
            <img
              src="/image/terrain.jpg"
              alt="Training Session 2"
              class="w-[300px] h-[180px]"
            />
          </div>

          {/* Date Banner */}
          <div className="w-[300px] bg-red-800 text-white py-2 px-4 text-center rounded-md mb-4">
            MAY 30, 2024
          </div>

          {/* Title */}
          <h1 className="w-[300px] text-[17px] font-bold text-blue-800 text-left">
            TechSkills Learning Institute Partners with Huawei to Deliver Certified Training Programs in Madagascar
          </h1>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 pr-4 space-y-6">
          <p className="text-gray-800">
            We at TechSkills Learning Institute are thrilled to announce our partnership with Huawei, following a successful audit process that has officially recognized us as a trusted training provider in Madagascar.
          </p>

          <p className="text-gray-800">
            This partnership comes after Huawei's thorough evaluation of our training capabilities, including our curriculum, training environment, and the professional expertise of our teaching team. As a result, TechSkills Learning Institute is now authorized to deliver Huawei-certified training courses, providing a unique opportunity for professionals in Madagascar to gain qualifications that meet international standards.
          </p>

          <p className="text-gray-800">
            Our Huawei-approved courses will enable learners to gain industry-relevant certifications and deepen their understanding of the latest technologies in the telecommunications sector. With these certifications, professionals will have a competitive edge in the job market and contribute to the growth and modernization of Madagascar's ICT industry.
          </p>

          <p className="text-gray-800">
            Stay tuned for updates on our upcoming Huawei-certified training sessions, and don't miss the chance to enhance your skills with training that meets the highest standards.
          </p>
        </div>
      </div>
    </div>
    </div>
    <div className="technicines">
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8 p-[60px]">
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Colonne gauche - Logo NOKIA et Photos */}
            <div className="space-y-4">
              {/* Grand titre NOKIA */}
              <h1 className="text-[#124191] text-4xl font-bold tracking-wider font-times">
                NOKIA
              </h1>

              {/* Section des photos */}
              <div className="space-y-1">
                {/* Grande photo principale */}
                
                  <img 
                    src="/image/avecvazaha.jpg" 
                    alt="Main meeting" 
                    className="w-[380px] h-[170px]"
                  />
               

                {/* Conteneur flex pour les deux photos en dessous */}
                <div className="imageflex">
                  <div >
                    <img 
                      src="/image/menuback.jpg" 
                      alt="Team meeting 1" 
                      className="w-[185px] h-[110px]"
                    />
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/image/mivory.jpg" 
                      alt="Team meeting 2" 
                      className="w-[185px] h-[110px]"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="bg-red-900 text-white w-[380px] text-center py-2 rounded-md">
                  AUGUST 08, 2024
                </div>

                {/* Titre de l'annonce */}
                <h2 className="text-blue-900 w-[380px] text-[15px] font-bold">
                  TechSkills Learning Institute Receives Approval from Nokia Following Training Audit
                </h2>
              </div>
            </div>

            {/* Colonne droite - Contenu */}
            <div className="md:w-[500px] pr-4 space-y-[2.5rem] ml-[2rem]">
                <p className="text-gray-800">
                  October 08, 2024 - TechSkills Learning Institute is pleased to announce that Nokia, a prominent global provider of telecommunications equipment and services, has completed an audit of our training programs and approved our certification process.
                </p>

                <p className="text-gray-800">
                  The audit evaluated our training methodologies, course content, and the qualifications of our instructors. This recognition affirms TechSkills' commitment to delivering high-quality education and training in the telecommunications sector.
                </p>

                <p className="text-gray-800">
                  "We are honored to have our training programs approved by Nokia and to share together an unique goal, which is 'To save lives'" said Tsihoarana Rakotoniana, General Manager of TechSkills Learning Institute.
                </p>

                <p className="text-gray-800">
                  "This approval reflects our dedication to providing the highest standards of training and certification for professionals in Madagascar."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SousNews

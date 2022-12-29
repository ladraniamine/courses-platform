import React from 'react'

const About = () => {
  return (
    <div className='bg-[#151515] lg:bg-black pt-1 lg:pt-0'>
      {/* ----------------Share about the community------------- */}
      <h1 className='about-share-title text-white my-9 lg:my-[80px] text-xl font-bold text-[40px] lg:text-[47px]'>Share about the community.</h1>
      <div className='container m-auto'>
        <div className='w-[350px] lg:w-[442px] h-[350px] lg:h-[442px] bg-[#0000] border rounded-full m-auto flex'>
          <span className='m-auto text-white text-[48px] font-bold'>Network</span>
        </div>
        <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-6 w-[350px] lg:w-[442px] h-[350px] lg:h-[442px] bg-[#0000] border rounded-full mt-[-80px] lg:mt-0 m-auto flex'>
          <span className='m-auto text-white text-[48px] font-bold'>Grow</span>
        </div>
        <div className='col-span-12 lg:col-span-6 w-[350px] lg:w-[442px] h-[350px] lg:h-[442px] bg-[#0000] border rounded-full mt-[-80px] lg:mt-0 m-auto flex'>
          <span className='m-auto text-white text-[48px] font-bold'>Learn</span>
        </div>
        </div>
      </div>
      {/* ------------------------------------- */}
      <div className='container m-auto mt-[180px] mb-[120px]'>
          <div className='grid grid-cols-12  text-white'>
            <div className="col-span-6 flex items-center justify-start">
              <div>
                <span className='text-start block w-full text-gray-400'>step1</span>
                <h2 className='text-start text-[40px] w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                <p className='text-start text-[16px] w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                <button className='text-start flex items-center mt-[15px] '>
                  <span className='text-[20px]'>export</span>
                <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                </button>
              </div>
            </div>
            <div className="col-span-6 flex items-center justify-end">
              <img src={require("../assets/Group 1.png")} alt="img" />
            </div>
            
          </div>
          <div className='grid grid-cols-12  text-white mt-[180px]'>
            <div className="col-span-6 flex items-center justify-start">
              <img src={require("../assets/Group 2.png")} alt="img" />
            </div>
            <div className="col-span-6 flex items-center justify-end">
              <div>
                <span className='text-start block w-full text-gray-400'>step1</span>
                <h2 className='text-start text-[40px] w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                <p className='text-start text-[16px] w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                <button className='text-start flex items-center mt-[15px] '>
                  <span className='text-[20px]'>export</span>
                <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                </button>
              </div>
            </div>
            
          </div>
          <div className='grid grid-cols-12  text-white mt-[180px]'>
            <div className="col-span-6 flex items-center justify-start">
              <div>
                <span className='text-start block w-full text-gray-400'>step1</span>
                <h2 className='text-start text-[40px] w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                <p className='text-start text-[16px] w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                <button className='text-start flex items-center mt-[15px] '>
                  <span className='text-[20px]'>export</span>
                <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                </button>
              </div>
            </div>
            <div className="col-span-6 flex items-center justify-end">
              <img src={require("../assets/Group 3.png")} alt="img" />
            </div>
          </div>
          <div className='grid grid-cols-12  text-white mt-[180px]'>
            <div className="col-span-6 flex items-center justify-start">
              <img src={require("../assets/Group 4.png")} alt="img" />
            </div>
            <div className="col-span-6 flex items-center justify-end">
              <div>
                <span className='text-start block w-full text-gray-400'>step1</span>
                <h2 className='text-start text-[40px] w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                <p className='text-start text-[16px] w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                <button className='text-start flex items-center mt-[15px] '>
                  <span className='text-[20px]'>export</span>
                <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                </button>
              </div>
            </div>
            
          </div>
         
      </div>
    </div>
  )
}

export default About
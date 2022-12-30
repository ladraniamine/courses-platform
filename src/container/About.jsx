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
      <div className='bg-black  pt-6 lg:pt-0 mt-8 lg:mt-[180px]'>
        <div className='container m-auto  mb-[120px]'>
            <h2 className='lg:hidden text-white font-bold text-[40px] text-center mb-4'>We offer the plane and the pilot.</h2>
            <div className='grid grid-cols-12  text-white bg-[#151515] lg:bg-[#0000]  rounded-3xl lg:rounded-none mb-10 lg:mb-[180px] relative'>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-start order-1 lg:order-0">
                <div className='p-7 lg:p-0 w-full lg:w-auto'>
                  <span className='bg-[#F31D1D] lg:bg-[#0000] lg:text-start block w-[90px] lg:w-full lg:text-gray-400 rounded-3xl lg:rounded-none absolute lg:relative top-5'>step 1</span>
                  <h2 className='text-start lg:text-[40px] lg:w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                  <p className='text-start text-[16px] lg:w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                  <button className='hidden text-start lg:flex items-center mt-[15px] '>
                    <span className='text-[20px]'>export</span>
                    <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                  </button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-end lg:order-1">
                <img className='hidden lg:block' src={require("../assets/Group 1.png")} alt="img" />
                <img className='lg:hidden w-full' src={require("../assets/goup1mobile.png")} alt="img" />
              </div>
              
            </div>
            <div className='grid grid-cols-12  text-white bg-[#151515] lg:bg-[#0000]  rounded-3xl lg:rounded-none mb-10 lg:mb-[180px] relative'>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-start">
                <img className='hidden lg:block' src={require("../assets/Group 1.png")} alt="img" />
                <img className='lg:hidden w-full' src={require("../assets/goup1mobile.png")} alt="img" />
              </div>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-end">
                <div className='p-7 lg:p-0 w-full lg:w-auto'>
                <span className='bg-[#F31D1D] lg:bg-[#0000] lg:text-start block w-[90px] lg:w-full lg:text-gray-400 rounded-3xl lg:rounded-none absolute lg:relative top-5'>step 2</span>
                  <h2 className='text-start lg:text-[40px] lg:w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                  <p className='text-start text-[16px] lg:w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                  <button className='hidden text-start lg:flex items-center mt-[15px] '>
                    <span className='text-[20px]'>export</span>
                    <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                  </button>
                </div>
              </div>
              
            </div>
            <div className='grid grid-cols-12  text-white bg-[#151515] lg:bg-[#0000]  rounded-3xl lg:rounded-none mb-10 lg:mb-[180px] relative'>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-start order-1 lg:order-0">
                <div className='p-7 lg:p-0 w-full lg:w-auto'>
                  <span className='bg-[#F31D1D] lg:bg-[#0000] lg:text-start block w-[90px] lg:w-full lg:text-gray-400 rounded-3xl lg:rounded-none absolute lg:relative top-5'>step 3</span>
                  <h2 className='text-start lg:text-[40px] lg:w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                  <p className='text-start text-[16px] lg:w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                  <button className='hidden text-start lg:flex items-center mt-[15px] '>
                    <span className='text-[20px]'>export</span>
                    <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                  </button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-end lg:order-1">
                <img className='hidden lg:block' src={require("../assets/Group 1.png")} alt="img" />
                <img className='lg:hidden w-full' src={require("../assets/goup1mobile.png")} alt="img" />
              </div>
              
            </div>
            <div className='grid grid-cols-12  text-white bg-[#151515] lg:bg-[#0000]  rounded-3xl lg:rounded-none mb-10 lg:mb-[180px] relative'>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-start">
                <img className='hidden lg:block' src={require("../assets/Group 1.png")} alt="img" />
                <img className='lg:hidden w-full' src={require("../assets/goup1mobile.png")} alt="img" />
              </div>
              <div className="col-span-12 lg:col-span-6 flex items-center justify-end">
                <div className='p-7 lg:p-0 w-full lg:w-auto'>
                <span className='bg-[#F31D1D] lg:bg-[#0000] lg:text-start block w-[90px] lg:w-full lg:text-gray-400 rounded-3xl lg:rounded-none absolute lg:relative top-5'>step 4</span>
                  <h2 className='text-start lg:text-[40px] lg:w-[430px] font-bold my-[14px]'>We offer the plane and the pilot.</h2>
                  <p className='text-start text-[16px] lg:w-[410px] text-gray-300'>Come on, register yourself to join online classes with. register with your email account and submit now.</p>
                  <button className='hidden text-start lg:flex items-center mt-[15px] '>
                    <span className='text-[20px]'>export</span>
                    <img className='ml-[20px]' src={require("../assets/arrow.png")} alt="arrow" />
                  </button>
                </div>
              </div>
              
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default About
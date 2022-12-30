import React from 'react'

const Mentor = () => {
  return (
    <div className='text-white  bg-[#1F1F1F] py-[80px]'>
        <div className=' h-[122px] w-full'>
            <div className='container w-full m-auto  flex items-center justify-between '>
              <div className='text-start'>
                <h1 className='text-[36px] font-bold mb-[15px]'>Mentors available 24/7</h1>
                <p className='max-w-[420px]'>Mentors around the world  teach millions of participants
                   on Edumena. We provide the tools and skills</p>
              </div>
              <button className='bg-white text-black w-[165px] h-[56px] rounded-[100px]'>View More</button>
            </div>
        </div>
        {/* -----------------Mentors available------------------- */}
        <div className='mt-[75px]'>
            <div className='container m-auto grid grid-cols-12'>
                <div className="col-span-12 my-4 lg:my-0 lg:col-span-3 flex items-center justify-center">
                      <div className='w-[282px]  bg-[#151515] p-[24px] rounded-xl'>
                          <img className='w-[234px] h-[234px]' src={require("../assets/m1.png")} alt="m1" />
                          <h2 className='mt-[15px] text-[20px] font-bold text-start'>Mr. Sandi Tofang</h2>
                          <div className='w-full text-gray-600 flex justify-start items-center mt-[8px]'>
                            <span className='text-[14px]'>Mentoring</span>
                            <span className='block w-[8px] h-[8px] mx-4 rounded-full bg-gray-600'></span>
                            <span className='text-[14px]'>Artist class</span>
                          </div>
                          <button className='mt-[24px] w-full h-[52px] bg-[#F31D1D] rounded-xl'>View Details</button>
                      </div>
                </div>
                <div className="col-span-12 my-4 lg:my-0 lg:col-span-3 flex items-center justify-center">
                      <div className='w-[282px]  bg-[#151515] p-[24px] rounded-xl'>
                          <img className='w-[234px] h-[234px]' src={require("../assets/m2.png")} alt="m1" />
                          <h2 className='mt-[15px] text-[20px] font-bold text-start'>Mr. Sandi Tofang</h2>
                          <div className='w-full text-gray-600 flex justify-start items-center mt-[8px]'>
                            <span className='text-[14px]'>Mentoring</span>
                            <span className='block w-[8px] h-[8px] mx-4 rounded-full bg-gray-600'></span>
                            <span className='text-[14px]'>Artist class</span>
                          </div>
                          <button className='mt-[24px] w-full h-[52px] bg-[#F31D1D] rounded-xl'>View Details</button>
                      </div>
                </div>
                <div className="col-span-12 my-4 lg:my-0 lg:col-span-3 flex items-center justify-center">
                      <div className='w-[282px]  bg-[#151515] p-[24px] rounded-xl'>
                          <img className='w-[234px] h-[234px]' src={require("../assets/m3.png")} alt="m1" />
                          <h2 className='mt-[15px] text-[20px] font-bold text-start'>Mr. Sandi Tofang</h2>
                          <div className='w-full text-gray-600 flex justify-start items-center mt-[8px]'>
                            <span className='text-[14px]'>Mentoring</span>
                            <span className='block w-[8px] h-[8px] mx-4 rounded-full bg-gray-600'></span>
                            <span className='text-[14px]'>Artist class</span>
                          </div>
                          <button className='mt-[24px] w-full h-[52px] bg-[#F31D1D] rounded-xl'>View Details</button>
                      </div>
                </div>
                <div className="col-span-12 my-4 lg:my-0 lg:col-span-3 flex items-center justify-center">
                      <div className='w-[282px]  bg-[#151515] p-[24px] rounded-xl'>
                          <img className='w-[234px] h-[234px]' src={require("../assets/m4.png")} alt="m1" />
                          <h2 className='mt-[15px] text-[20px] font-bold text-start'>Mr. Sandi Tofang</h2>
                          <div className='w-full text-gray-600 flex justify-start items-center mt-[8px]'>
                            <span className='text-[14px]'>Mentoring</span>
                            <span className='block w-[8px] h-[8px] mx-4 rounded-full bg-gray-600'></span>
                            <span className='text-[14px]'>Artist class</span>
                          </div>
                          <button className='mt-[24px] w-full h-[52px] bg-[#F31D1D] rounded-xl'>View Details</button>
                      </div>
                </div>
              
            </div>
        </div>
        {/* ========================================================================================= */}
        <div className='mt-[80px] h-[122px] w-full'>
          
              <div className='container w-full m-auto text-start'>
                <h1 className='text-[36px] font-bold mb-[15px]'>Explore courses from industry leaders.</h1>
                <p className='max-w-[420px]'>Mentors around the world  teach millions of participants
                   on Edumena. We provide the tools and skills</p>
              </div>
              
        </div>
        <div className='mt-[75px]'>
            <div className='container m-auto grid grid-cols-12'>
                <div className="col-span-12 lg:col-span-4 flex items-center justify-center my-3 lg:my-0">
                      <div className='w-[384px]  bg-[#151515] p-[24px] rounded-3xl'>
                        <div className=' w-full h-[258px] relative'>
                          <img className='w-full h-full absolute top-0 left-0' src={require("../assets/e1.png")} alt="m1" />
                          <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/e.png")} alt="" />
                        </div>
                          <h2 className='mt-[15px] text-[20px] font-bold text-start'>Designing digital product for enterprise company</h2>
                          <p className='w-full text-gray-600  mt-[8px] text-start'> You can create a design by maintaining your content here. teach will provide facilities hope you like that
                          </p>
                          <div className='mt-[8px] flex items-center justify-start'>
                            <img className='mr-[8px]' src={require("../assets/Group.png")} alt="" />
                            <span className='text-[14px] text-gray-400'>5.0</span>
                          </div>
                      </div>
                </div>
                <div className="col-span-12 lg:col-span-4 flex items-center justify-center my-3 lg:my-0">
                      <div className='w-[384px]  bg-[#151515] p-[24px] rounded-3xl'>
                        <div className=' w-full h-[258px] relative'>
                          <img className='w-full h-full absolute top-0 left-0' src={require("../assets/e2.png")} alt="m1" />
                          <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/e.png")} alt="" />
                        </div>
                          <h2 className='mt-[15px] text-[20px] font-bold text-start'>Designing digital product for enterprise company</h2>
                          <p className='w-full text-gray-600  mt-[8px] text-start'> You can create a design by maintaining your content here. teach will provide facilities hope you like that
                          </p>
                          <div className='mt-[8px] flex items-center justify-start'>
                            <img className='mr-[8px]' src={require("../assets/Group.png")} alt="" />
                            <span className='text-[14px] text-gray-400'>5.0</span>
                          </div>
                      </div>
                </div>
                <div className="col-span-12 lg:col-span-4 flex items-center justify-center my-3 lg:my-0">
                      <div className='w-[384px]  bg-[#151515] p-[24px] rounded-3xl'>
                        <div className=' w-full h-[258px] relative'>
                          <img className='w-full h-full absolute top-0 left-0' src={require("../assets/e3.png")} alt="m1" />
                          <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/e.png")} alt="" />
                        </div>
                          <h2 className='mt-[15px] text-[20px] font-bold text-start'>Designing digital product for enterprise company</h2>
                          <p className='w-full text-gray-600  mt-[8px] text-start'> You can create a design by maintaining your content here. teach will provide facilities hope you like that
                          </p>
                          <div className='mt-[8px] flex items-center justify-start'>
                            <img className='mr-[8px]' src={require("../assets/Group.png")} alt="" />
                            <span className='text-[14px] text-gray-400'>5.0</span>
                          </div>
                      </div>
                </div>
               
            </div>
        </div>
        {/* ===================================================================== */}
        <div className='container m-auto mt-[65px]'>
          <div className='w-full lg:h-[217px] bg-[#F31D1D] rounded-3xl p-7 lg:p-[57px] flex items-center justify-between '>
            <h2 className='w-[359px] lg:text-[40px] font-bold'>Stream anywhere. Cancel anytime.</h2>
            <button className='w-[150px] lg:w-[327px] h-[54px] bg-white text-[#F31D1D] rounded-2xl'>Get started</button>
          </div>
        </div>
    </div>
  )
}

export default Mentor
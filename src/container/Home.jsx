import React from 'react'

const Home = () => {

  return (
    <section>
      <div className='w-full h-[100vh]  relative '>
        <img className='hidden lg:block w-full h-full' src={require("../assets/background home.png")} alt="background image" />
        <img className=' lg:hidden w-full h-full' src={require("../assets/bghomemobile.png")} alt="background image" />
        {/* layer for small screen */}
        <div className='layerbox lg:hidden top-[500px] w-[200%] h-[700px] bg-black absolute left-[50%] translate-x-[-50%] rounded-full '></div>
        {/* ---------------------------------- Your engine for answers ------------------------------  */}
        <div className=' w-full h-full lg:bg-[#000c]  absolute top-[330px] lg:top-0 lg:left-0 flex'>
            <div className='m-auto w-[80vw] '>
                <h1 className='text-white text-[44px] w-[280px] lg:w-full lg:text-[50px] text-start lg:text-center font-[600]'>Your engine for answers.</h1>
                <p className='text-gray-400 text-[18px] text-start lg:text-center w-full lg:w-[536px] h-[81px] lg:m-auto'>“ We're building the plane while we're flying it big data yet drop-dead date. Due diligence teams were able to drive and awareness currying ”</p>
                <div className='hidden lg:grid grid-cols-12 items-center justify-center w-[46%] m-auto text-white mt-2'>
                  <span className='col-span-5 font-bold'>Amine Ladrani</span>
                  <img className='col-span-5 justify-self-end mr-2' src={require("../assets/Group.png")} alt="stars" />
                  <span className='col-span-2 text-gray-400 text-[12px]'>5.0</span>
                </div>
                <div className='input-group mt-[41px] text-white' >
                  <input className=' h-[51px] w-full lg:w-[368px]  lg:rounded-tl-xl lg:rounded-bl-xl px-4  bg-[#0000] home-input' type="text" placeholder='Your email' />
                  <button className='bg-[#F31D1D]  lg:rounded-tr-xl lg:rounded-br-xl w-full lg:w-[189px] h-[51px] hover:bg-[#f31d1dad] mt-[20px] lg:mt-0'>Get started</button>
                </div>
                <div className='lg:hidden text-white text-center mt-[24px]'>
                    <p>“The explanation is very easy to understand, really cool, understandable and.” -John Doe</p>
                    <div className='flex items-center justify-center w-full m-auto text-white mt-2'>
                      <img  src={require("../assets/Group.png")} alt="stars" />
                      <span className=' text-gray-400 text-[12px] ml-2'>5.0</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
        {/* ---------------------------------- Why to choose Edumena? -------------------------------- */}
      <div className='w-full bg-black mt-[300px] lg:mt-2 relative'>
          {/* siparate line */}
        <span className='block w-full h-[2px] bg-[#313131] lg:hidden'></span>
        <div className='container m-auto grid grid-cols-12'>
            {/* content */}
            <div className="col-span-12 lg:col-span-6 text-white">
              <h1 className=' max-w-[518px] h-[126px] text-[48px] font-bold mt-[50px] text-start'>Why to choose Edumena?</h1>
              <p className='text-[15px] text-start mt-[38px] max-w-[518px]'> We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level.</p>
              <div className='mt-[35px] lg:mt-[57px] grid grid-cols-12'>
                  <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-3'>
                    <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                    <span className='text-[18px]'>Watch on any device</span>
                  </div>
                  <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-3'>
                    <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                    <span className='text-[18px]'>Progress 24/7</span>
                  </div>
                  <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-3'>
                    <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                    <span className='text-[18px]'>New courses each month</span>
                  </div>
                  <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-3'>
                    <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                    <span className='text-[18px]'>Multilingual platform</span>
                  </div>
                <button className='col-span-12 bg-[#F31D1D] rounded-xl rounded-br-xl w-full lg:w-[257px] h-[54px] hover:bg-[#f31d1dad] mt-[35px] lg:mt-[74px] mb-[92px]'>Discover all classes</button>
                
              </div>
            </div>
            {/* image */}
            <div className="hidden col-span-12 lg:col-span-6 lg:flex items-center justify-end">
              <div className='relative w-[447px] h-[550px] '>
              <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/image.png")} alt="img" />
              <span className='absolute bg-[#F31D1D] w-[487px] h-[415px] rounded-xl right-1 bottom-0 '></span>
              </div>
            </div>
        </div>
      </div>

      <div className='grid'>
          {/* ---------------------------------- Subscription and benefits ----------------------------- */}
          <div className='order-2 lg:order-1'>
                  {/* ----- */}
                <div className='w-full bg-[#F0F0F0] lg:bg-[#1F1F1F] text-black lg:text-white'>
                  <div className='container m-auto grid grid-cols-12'>
                  <div className="hidden col-span-6 lg:flex items-center justify-center">
                        <div className='relative w-[447px] h-[550px] '>
                        <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/image2.png")} alt="img" />
                        <span className='absolute bg-[#F31D1D] w-[487px] h-[282px] rounded-xl right-1 bottom-0 '></span>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-[110px]">
                        <h1 className=' max-w-[518px] h-[126px] text-[48px] font-bold mt-[50px] text-start'>Subscription and benefits.</h1>
                        <p className='text-gray-600 text-[15px] text-start mt-[38px] max-w-[518px]'> We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level.</p>
                        <div className='mt-6 lg:mt-[60px] grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-[40px]'>
                              <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                              <span className='text-[18px]  relative'>New proffesion.
                                <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                              </span>
                            </div>             
                            <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-[40px]'>
                              <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                              <span className='text-[18px]  relative'>Learn at your own pace.
                                <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                              </span>
                            </div>    
                            <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-[40px]'>
                              <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                              <span className='text-[18px]  relative'>New proffesion.
                                <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                              </span>
                            </div>             
                            <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-[40px]'>
                              <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                              <span className='text-[18px]  relative'>Learn at your own pace.
                                <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                              </span>
                            </div>    
                            <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-[40px]'>
                              <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                              <span className='text-[18px]  relative'>New proffesion.
                                <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                              </span>
                            </div>             
                            <div className='col-span-12 lg:col-span-6 flex items-center justify-start mb-[40px]'>
                              <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                              <span className='text-[18px]  relative'>Learn at your own pace.
                                <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                              </span>
                            </div>    
                            <button className='lg:hidden col-span-12 bg-[#F31D1D] h-[54px] rounded-3xl text-white font-bold'>Create an account</button>
                        </div>
                      </div>  
                  </div>
                </div>
          </div>
          {/* ---------------------------------- Share about the coummunity----------------------------  */}
          <div className='order-1 lg:order-2'>
                    {/* --- */}
              <div className='w-full bg-black'>
                <div className='lg:container m-auto grid grid-cols-12'>
                    {/* content */}
                    <div className="container m-auto lg:m-0 col-span-12 lg:col-span-6 text-white order-1 lg:order-none ">
                      <h1 className=' max-w-[518px] h-[126px] text-[48px] font-bold mt-[20px] lg:mt-[50px] text-start'> Share about the community.</h1>
                      <p className='text-[15px] text-start mt-[38px] max-w-[518px]'> We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level.</p>
                    <div className='grid grid-cols-12  items-center justify-start w-full'>
                    <button className='col-span-12 bg-[#F31D1D] rounded-xl rounded-br-xl w-full lg:w-[257px] h-[54px] hover:bg-[#f31d1dad] mt-[74px] '>Get started</button>
                    <button className='col-span-12 bg-[#0000] border rounded-xl rounded-br-xl w-full lg:w-[257px] h-[54px] hover:bg-gray-900 mt-[30px] mb-8 lg:mb-[92px]'>Learn more</button>
                    </div>
                    </div>
                    {/* images */}
                    <div className="col-span-12 lg:col-span-6 flex items-center justify-end">
                      <div className='relative w-full lg:w-[447px] h-[550px] '>
                        <img className='hidden lg:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/image3.png")} alt="img" />
                        <img className='lg:hidden w-full h-[536px] ' src={require("../assets/mobileshareabout.png")} alt="img" />
                        <span className='hidden lg:block absolute bg-[#F31D1D] w-[487px] h-[415px] rounded-xl right-1 bottom-0 '></span>
                      </div>
                    </div>
                </div>
              </div>
              <hr  className='hidden lg:block h-[3px] w-[80%] m-auto mt-10'/>
          </div>
      </div>
    </section>
  )
}

export default Home
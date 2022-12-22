import React from 'react'

const Home = () => {

  return (
    <section>
    <div className='w-full h-[100vh] bg-green-300 relative'>
      <img className='w-full h-full' src={require("../assets/background home.png")} alt="background image" />
      <div className='w-full h-full bg-[#000c] absolute top-0 left-0 flex'>
          <div className='m-auto'>
              <h1 className='text-white text-[50px] font-[600]'>Your engine for answers.</h1>
              <p className='text-gray-400 text-[18px] w-[536px] h-[81px] m-auto'>“ We're building the plane while we're flying it big data yet drop-dead date. Due diligence teams were able to drive and awareness currying ”</p>
              <div className='grid grid-cols-12 items-center justify-center w-[46%] m-auto text-white mt-2'>
                <span className='col-span-5 font-bold'>Amine Ladrani</span>
                <img className='col-span-5 justify-self-end mr-2' src={require("../assets/Group.png")} alt="stars" />
                <span className='col-span-2 text-gray-400 text-[12px]'>5.0</span>
              </div>
              <div className='mt-[41px] text-white' >
                <input className='h-[51px] w-[368px] rounded-tl-xl rounded-bl-xl px-4  bg-[#0000] home-input' type="text" placeholder='Your email' />
                <button className='bg-[#F31D1D] rounded-tr-xl rounded-br-xl w-[189px] h-[51px] hover:bg-[#f31d1dad]'>Get started</button>
              </div>
          </div>
      </div>
    </div>
    {/* ------------------------------------------------------------------------- */}
    <div className='w-full bg-black'>
      <div className='container m-auto grid grid-cols-12'>
          <div className="col-span-6 text-white">
            <h1 className=' max-w-[518px] h-[126px] text-[48px] font-bold mt-[50px] text-start'>Why to choose Edumena?</h1>
            <p className='text-[15px] text-start mt-[38px] max-w-[518px]'> We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level.</p>
            <div className='mt-[57px] grid grid-cols-12'>
                <div className='col-span-6 flex items-center justify-start mb-3'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]'>Watch on any device</span>
                </div>
                <div className='col-span-6 flex items-center justify-start mb-3'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]'>Progress 24/7</span>
                </div>
                <div className='col-span-6 flex items-center justify-start mb-3'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]'>New courses each month</span>
                </div>
                <div className='col-span-6 flex items-center justify-start mb-3'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]'>Multilingual platform</span>
                </div>
              <button className='bg-[#F31D1D] rounded-xl rounded-br-xl w-[257px] h-[54px] hover:bg-[#f31d1dad] mt-[74px] mb-[92px]'>Discover all classes</button>
            </div>
          </div>
          <div className="col-span-6 flex items-center justify-end">
            <div className='relative w-[447px] h-[550px] '>
            <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/image.png")} alt="img" />
            <span className='absolute bg-[#F31D1D] w-[487px] h-[415px] rounded-xl right-1 bottom-0 '></span>
            </div>
          </div>
      </div>
    </div>
    {/* ---------------------------------------------------------------------- */}
    <div className='w-full bg-[#1F1F1F]'>
      <div className='container m-auto grid grid-cols-12'>
      <div className="col-span-6 flex items-center justify-center">
            <div className='relative w-[447px] h-[550px] '>
            <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={require("../assets/image2.png")} alt="img" />
            <span className='absolute bg-[#F31D1D] w-[487px] h-[282px] rounded-xl right-1 bottom-0 '></span>
            </div>
          </div>
          <div className="col-span-6 text-white mb-[110px]">
            <h1 className=' max-w-[518px] h-[126px] text-[48px] font-bold mt-[50px] text-start'>Subscription and benefits.</h1>
            <p className='text-[15px] text-start mt-[38px] max-w-[518px]'> We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level.</p>
            <div className='mt-[60px] grid grid-cols-12'>
                <div className='col-span-6 flex items-center justify-start mb-[40px]'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]  relative'>New proffesion.
                    <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                  </span>
                </div>             
                <div className='col-span-6 flex items-center justify-start mb-[40px]'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]  relative'>Learn at your own pace.
                    <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                  </span>
                </div>    
                <div className='col-span-6 flex items-center justify-start mb-[40px]'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]  relative'>New proffesion.
                    <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                  </span>
                </div>             
                <div className='col-span-6 flex items-center justify-start mb-[40px]'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]  relative'>Learn at your own pace.
                    <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                  </span>
                </div>    
                <div className='col-span-6 flex items-center justify-start mb-[40px]'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]  relative'>New proffesion.
                    <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                  </span>
                </div>             
                <div className='col-span-6 flex items-center justify-start mb-[40px]'>
                  <img className='mx-2' src={require("../assets/Vector.png")} alt="icon" />
                  <span className='text-[18px]  relative'>Learn at your own pace.
                    <span className='absolute top-[25px] left-0 text-[14px] text-gray-400'>For new normal.</span>
                  </span>
                </div>    
              
            </div>
          </div>
          
      </div>
    </div>
    </section>
  )
}

export default Home
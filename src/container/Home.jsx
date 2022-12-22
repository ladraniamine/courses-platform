import React from 'react'

const Home = () => {

  return (
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
  )
}

export default Home
import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [opennavbar, setopennavebar] = useState(false)
  const handleclick = ()=>{
    setopennavebar(!opennavbar)
  }

  const li = (m)=>{
    return(
      <>
        <li className={`${m} p-2`}><a href="/home" className="text-white">Home</a></li>
        <li className={`${m} p-2`}><a href="/courses" className="text-white">Courses</a></li>
        <li className={`${m} p-2`}><a href="/mentor" className="text-white">Mentor</a></li>
        <li className={`${m} p-2`}><a href="/community" className="text-white">Community</a></li>
      </>
    )
  }
  
  return (
   <nav className='w-[100vw] py-5 fixed z-40 bg-[#000000a6]'>
      <div className='container h-full m-auto flex items-center justify-between lg:grid lg:grid-cols-12'>
          <div className='col-span-2 flex items-center justify-start'>
            <a href="/home" className='font-bold text-white text-[19px] '>Edumena</a>
          </div>
          <ul className='hidden col-span-7 lg:flex items-center justify-start'>
           {li("mx-[15px]")}
          </ul>
          <div className='hidden col-span-3 lg:flex items-center justify-end'>
            <button className='w-[180px] h-[50px] bg-[#F31D1D] text-white rounded-[15px] border-none hover:bg-[#f31d1dad]'>Register now</button>
          </div>
          {/* show navicon button when its small screen */}
          <button className='block lg:hidden' onClick={handleclick}>
            <img src={require("../assets/navicon.png")} alt="" />
          </button>
      </div>
      <div className={`lg:hidden text-white grid grid-cols-12 justify-center items-center overflow-hidden transition-[2s] ${opennavbar?"transition-[1s]":"h-0 transition-[1s]"}`}>
          <ul className='col-span-12'>
           {li("mt-[15px]")}
          </ul>
          <button className='col-span-12 m-auto mt-7 w-[180px] h-[50px] bg-[#F31D1D] text-white rounded-[15px] border-none hover:bg-[#f31d1dad]'>Register now</button>
      </div>
   </nav>
  )
}

export default Header
import React from 'react'

const Header = () => {
  return (
   <nav className='w-full py-5 fixed z-40'>
      <div className='container h-full m-auto grid grid-cols-12'>
          <div className='col-span-2 flex items-center justify-start'>
            <a href="/home" className='font-bold text-white text-[19px] '>Edumena</a>
          </div>
          <ul className='col-span-7 flex items-center justify-start'>
            <li className='mx-[15px] p-2'><a href="/home" className="text-white">Home</a></li>
            <li className='mx-[15px] p-2'><a href="/courses" className="text-white">Courses</a></li>
            <li className='mx-[15px] p-2'><a href="/mentor" className="text-white">Mentor</a></li>
            <li className='mx-[15px] p-2'><a href="/community" className="text-white">Community</a></li>
          </ul>
          <div className='col-span-3 flex items-center justify-end'>
            <button className='w-[180px] h-[50px] bg-[#F31D1D] text-white rounded-[15px] border-none hover:bg-[#f31d1dad]'>Register now</button>
            </div>
      </div>
   </nav>
  )
}

export default Header
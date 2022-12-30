import React from 'react'

const Footer = () => {
  
  return (
    <div className='text-white bg-[#1F1F1F] py-[50px] '>
      <div className="container m-auto grid grid-cols-12">
        <div className='col-span-6 lg:col-span-3 text-bold text-[30px] lg:text-[40px] text-start'>
        Edumena
        </div>
        <div className='col-span-6 lg:col-span-3 text-start'>
          <span className='block lg:w-[250px] text-[20px]'>123 Market St. #22B Charlottesville, California 44635</span>
          <span className='block mt-[50px]'>(434) 546-4356</span>
          <span className='block mt-[16px]'>contact@edumena.org</span>
        </div>
        <div className='col-span-6 lg:col-span-2 text-start'>
          <a  href="#yourLink" className='block mt-[16px]'>Home</a>
          <a  href="#yourLink" className='block mt-[16px]'>Courses</a>
          <a  href="#yourLink" className='block mt-[16px]'>Mentors</a>
          <a  href="#yourLink" className='block mt-[16px]'>Community</a>
          <span className='block mt-[58px] text-gray-500'>© Copyright 2022 - Edumena</span>

        </div>
        <div className='col-span-6 lg:col-span-2 text-start'>
          <a  href="#yourLink" className='block mt-[16px]'>Facebook</a>
          <a  href="#yourLink" className='block mt-[16px]'>Twiter</a>
          <a  href="#yourLink" className='block mt-[16px]'>Instargram</a>
          <a  href="#yourLink" className='block mt-[16px]'>Youtube</a>
        </div>
        <div className='col-span-12 lg:col-span-2 flex items-start justify-end'>
          <img src={require("../assets/Uparrow.png")} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'

const Client = () => {
  return (
    <div className='my-[80px]'>
        <h2 className='text-white text-[40px] font-bold text-center'>Client Say’s About Us</h2>
        <p className='w-[344px] text-gray-400 m-auto'>These are things that clients who have used our features and works says.</p>
        <div className='container m-auto mt-[52px] grid grid-cols-12 justify-items-center'>
          <div className="col-span-4 w-[384px]  p-[20px] bg-[#1F1F1F] rounded-3xl">
                <div className='flex items-start justify-between'>
                      <div className='flex items-center justify-start'>
                          <img className='mr-[16px]' src={require("../assets/user.png")} alt="img" />
                          <div className='text-start'>
                            <span className='block text-gray-200 font-bold'>Jane Jesss</span>
                            <span className='text[14px] text-gray-300'>Student</span>
                          </div>
                      </div>
                      <div className='flex items-center justify-end'>
                        <span className='bg-[#5ECB38] w-[9px] h-[9px] rounded-full mr-[7px]'></span>
                        <span className='text-gray-200'>Watched 73%</span>
                      </div>
                </div>
                <p className='text-start text-[#F3F3F3] mt-[15px]'>“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”</p>
                <div className='mt-[34px] flex items-center justify-between'>
                  <img className='mr-[14px]' src={require("../assets/c.png")} alt="c" />
                  <div className='text-start text-[#C4C4C4]'>
                    <h2 className='font-bold mb-[11px]'>Designing digital product for enterprise company</h2>
                    <span className='text-[#AAAAAA]'>Name Surname</span>
                  </div>
                </div>
          </div>
          <div className="col-span-4 w-[384px]  p-[20px] bg-[#1F1F1F] rounded-3xl">
                <div className='flex items-start justify-between'>
                      <div className='flex items-center justify-start'>
                          <img className='mr-[16px]' src={require("../assets/user.png")} alt="img" />
                          <div className='text-start'>
                            <span className='block text-gray-200 font-bold'>Jane Jesss</span>
                            <span className='text[14px] text-gray-300'>Student</span>
                          </div>
                      </div>
                      <div className='flex items-center justify-end'>
                        <span className='bg-[#5ECB38] w-[9px] h-[9px] rounded-full mr-[7px]'></span>
                        <span className='text-gray-200'>Watched 73%</span>
                      </div>
                </div>
                <p className='text-start text-[#F3F3F3] mt-[15px]'>“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”</p>
                <div className='mt-[34px] flex items-center justify-between'>
                  <img className='mr-[14px]' src={require("../assets/c.png")} alt="c" />
                  <div className='text-start text-[#C4C4C4]'>
                    <h2 className='font-bold mb-[11px]'>Designing digital product for enterprise company</h2>
                    <span className='text-[#AAAAAA]'>Name Surname</span>
                  </div>
                </div>
          </div>
          <div className="col-span-4 w-[384px]  p-[20px] bg-[#1F1F1F] rounded-3xl">
                <div className='flex items-start justify-between'>
                      <div className='flex items-center justify-start'>
                          <img className='mr-[16px]' src={require("../assets/user.png")} alt="img" />
                          <div className='text-start'>
                            <span className='block text-gray-200 font-bold'>Jane Jesss</span>
                            <span className='text[14px] text-gray-300'>Student</span>
                          </div>
                      </div>
                      <div className='flex items-center justify-end'>
                        <span className='bg-[#5ECB38] w-[9px] h-[9px] rounded-full mr-[7px]'></span>
                        <span className='text-gray-200'>Watched 73%</span>
                      </div>
                </div>
                <p className='text-start text-[#F3F3F3] mt-[15px]'>“This is the first time I found a professional online class h that they have many instructors to explain the material. Thanks”</p>
                <div className='mt-[34px] flex items-center justify-between'>
                  <img className='mr-[14px]' src={require("../assets/c.png")} alt="c" />
                  <div className='text-start text-[#C4C4C4]'>
                    <h2 className='font-bold mb-[11px]'>Designing digital product for enterprise company</h2>
                    <span className='text-[#AAAAAA]'>Name Surname</span>
                  </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Client
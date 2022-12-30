import React from 'react'

const Client = () => {
 
  const handleToggelClick = (e)=>{
      if(e.target.classList.contains("accorlist")){
          if(e.target.parentElement.offsetHeight >= 156){
            e.target.parentElement.style.height = "56px"
            e.target.parentElement.style.transition = "1s"
          }else{
            e.target.parentElement.style.height = `${e.target.parentElement.lastChild.offsetHeight + 56}px`
            e.target.parentElement.style.transition = "1s"
          }
      }
    }

  return (
    <div className='my-[80px]'>
        <h2 className='text-white text-[40px] font-bold text-center'>Client Say’s About Us</h2>
        <p className='w-[344px] text-gray-400 m-auto'>These are things that clients who have used our features and works says.</p>
        <div className='container m-auto mt-[52px] grid grid-cols-12 justify-items-center'>
          <div className="col-span-12 lg:col-span-4 w-[384px] my-4 lg:my-0 p-[20px] bg-[#1F1F1F] rounded-3xl">
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
          <div className="col-span-12 lg:col-span-4 w-[384px] my-4 lg:my-0 p-[20px] bg-[#1F1F1F] rounded-3xl">
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
          <div className="col-span-12 lg:col-span-4 w-[384px] my-4 lg:my-0 p-[20px] bg-[#1F1F1F] rounded-3xl">
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
          <hr className='w-[80%] m-auto mt-[70px]'/>
        <h2 className='text-[40px] text-white font-bold text-center mt-[47px]'>Frequently Asked Questions</h2>
        <p className='mt-[14px] w-[444px]  text-gray-400 m-auto'>Browser our faq’s below, if you can not find the answer at Edumena</p>
        {/* -----------------------------------------------fAQ---------------------- */}
        <div className='container m-auto mt-[50px]'>
          <div onClick={handleToggelClick}  className=" relative m-auto w-[70%] rounded-3xl overflow-hidden transition-[1s]">
          <div  className='accorlist w-full m-auto h-[56px] bg-black border text-white border-white  rounded-3xl p-5 flex items-center justify-between '>
            <span>How much should i pay for online class?</span>
            <img  src={require("../assets/faq.png")} alt="faq" />
          </div>
          <div  className='absolute bottom-3 left-0 text-white w-full border border-white rounded-b-3xl rounded-t-xl z-[-1] p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.</div>
          </div>
          <div onClick={handleToggelClick} className="mt-6 relative m-auto w-[70%] rounded-3xl overflow-hidden transition-[1s] ">
          <div className='accorlist w-full m-auto h-[56px] bg-black border text-white border-white  rounded-3xl p-5 flex items-center justify-between '>
            <span>Can i custumize my class learning online?</span>
            <img src={require("../assets/faq.png")} alt="faq" />
          </div>
          <div  className='absolute bottom-3 left-0 text-white w-full border border-white rounded-b-3xl rounded-t-xl z-[-1] p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.</div>
          </div>
           <div onClick={handleToggelClick} className="mt-6 relative m-auto w-[70%] rounded-3xl overflow-hidden transition-[1s] ">
          <div className='accorlist w-full m-auto h-[56px] bg-black border text-white border-white  rounded-3xl p-5 flex items-center justify-between '>
            <span>Can i choose a tutor or teacher for online class?</span>
            <img src={require("../assets/faq.png")} alt="faq" />
          </div>
          <div  className='absolute bottom-3 left-0 text-white w-full border border-white rounded-b-3xl rounded-t-xl z-[-1] p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.</div>
          </div>
          <div onClick={handleToggelClick} className="mt-6 relative m-auto w-[70%] rounded-3xl overflow-hidden transition-[1s] ">
          <div className='accorlist w-full m-auto h-[56px] bg-black border text-white border-white  rounded-3xl p-5 flex items-center justify-between '>
            <span>24/7 custemer services?</span>
            <img src={require("../assets/faq.png")} alt="faq" />
          </div>
          <div  className='absolute bottom-3 left-0 text-white w-full border border-white rounded-b-3xl rounded-t-xl z-[-1] p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.</div>
          </div>
          <div onClick={handleToggelClick} className="mt-6 relative m-auto w-[70%] rounded-3xl overflow-hidden transition-[1s] ">
          <div className='accorlist w-full m-auto h-[56px] bg-black border text-white border-white  rounded-3xl p-5 flex items-center justify-between '>
            <span>How do i get the online learning materials?</span>
            <img src={require("../assets/faq.png")} alt="faq" />
          </div>
          <div  className='absolute bottom-3 left-0 text-white w-full border border-white rounded-b-3xl rounded-t-xl z-[-1] p-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.sit, amet consectetur adipisicing elit. Repellendus numquam quod quasi eos quam aperiam molestiae officia. Ex omnis quaerat molestias, ratione doloremque voluptatum quasi cupiditate enim sapiente quisquam voluptatem.</div>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className='hidden lg:block container m-auto mt-[98px]'>
          <div className='relative w-[70%] m-auto h-[500px] shadow-sm shadow-[#0f1011] rounded-3xl'>
            <img className='absolute w-full h-full top-0 left-0' src={require("../assets/atheq.png")} alt="img" />
            <div className='absolute text-start top-0 left-0 pt-[104px] pl-[80px] bg-[#0f1011] w-[50%] h-full z-[1] text-white rounded-3xl'>
                <span className='text-[16px] mt-[104px]'>JOIN NOW</span>
                <h2 className='font-bold text-[40px] mt-[16px]'>Stream anywhere. Cancel anytime.</h2>
                <p className=' mt-[16px] text-gray-400'>Come on, register yourself to join online classes with. register with your email account and submit now,</p>
                <div className='mt-[41px] text-white text-sm' >
                  <input className='h-[45px] w-[220px] rounded-tl-xl rounded-bl-xl px-4  bg-[#0000] home-input' type="text" placeholder='Your email' />
                  <button className='bg-[#F31D1D] rounded-tr-xl rounded-br-xl w-[120px] h-[45px] hover:bg-[#f31d1dad]'>Get started</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Client
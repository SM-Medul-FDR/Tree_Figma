import React from 'react'

const Banner = () => {
  return (
    <>
    
        <div className=" pl-[5px] medul_Main_Banner  md:pb-[124px] pb-[60px]  ">
            <img className=' z-0 md:h-[813px] md:w-[835px] h-[380px] w-[300px] absolute right-0  ' src="imgs/bannerdg.png" alt="ss" />
              <div className="container">
                  <div className="flex justify-between md:pt-[64px]  pt-[30px] ">
                      <div className=" md:w-[453px] w-[200px] ">
                              <h1 className=' relative md:mb-[29px]  md:text-[45px] text-[23px] text-[#181820] font-lora font-medium md:w-[428px] '>Think positive
                              about our Climate <span> <div className=' h-2 w-[90px] bg-[#257251] absolute bottom-[2px] right-0 md:bottom-[10px] md:w-[180px] md:right-8 ' >
                                </div> </span></h1><hr />
                              <p className=' text-[#6F747B] md:text-[16px] text-[11px] mt-[15px] md:mt-[32px] font-medium font-lora  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget maecenas eget sit et rhoncus. Sit consectetur.</p>
                              <div className="md:flex justify-center mt-[20px] md:mt-[64px] items-center relative ml-[2px]   ">
                                  <input placeholder='name@company.com' className='border-gray-200 border-[1px]  rounded-[5px] px-[4px] h-[49px] md:w-[444px] w-[220px]  ' type="email" />
                                  <button className=' text-white mt-[10px] md:mt-0 hover:text-black hover:bg-white border-[2px] border-green-700 bg-[#257251] md:py-[10px]
                                  transition-all duration-[.2s] md:absolute right-[5px]  py-[6px] rounded-[5px] px-[19px] ' >Sign up</button>
                              </div>
                        </div>
                      <img className=' md:h-[512px] md:w-[569px] h-[250px] w-[260px] absolute right-4 md:right-[10%] ' src="imgs/bannerimg.png" alt="ss" />
                  </div>
              </div>
        </div>
    </>
  )
}

export default Banner
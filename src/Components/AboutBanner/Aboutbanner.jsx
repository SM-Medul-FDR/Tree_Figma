import React from 'react'

const Aboutbanner = () => {
  return (
    <>
    
          <div className="  ">
            <div className=" "> <img className=' absolute w-full max-h-[716px] min-h-[340px] ' src="imgs/abbg.png" alt="" /></div>
            <div className="md:pt-[67px] pt-[20px]">
              <div className=" container flex justify-between ">
                <div className=" md:w-[333px] w-[200px]  ">
                  <h1 className=' md:mb-[58px] relative  md:text-[45px] text-[23px] text-[#181820] font-lora font-medium md:w-[205px] w-[105px] '>Our story <span> <div className=' md:h-2 h-[7px] w-[55px] bg-[#34a071d3] absolute bottom-[2px] right-0 md:bottom-[10px] md:w-[113px]  ' ></div> </span></h1><hr />
                  <p className=' w-[300px] md:w-[467px] text-[#6F747B] md:text-[16px]  text-[11px] my-[20px] md:my-[30px] font-medium font-lora  '>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                  <p className=' w-[300px] md:w-[467px] text-[#6F747B] md:text-[16px]  text-[11px] my-[20px] md:my-[30px] font-medium font-lora  '>In that time, we’ve grown our network to include over 500 multinational businesses in 175 markets worldwide. The Under2 Coalition, for which we are the Secretariat, is made up of over 260 governments globally, representing 1.75 billion people and 50% of the global economy.</p>
                  <button className=' text-white mt-[10px] md:mt-0 hover:text-black hover:bg-white border-[2px] border-green-700 bg-[#257251f6] md:py-[12px] transition-all duration-[.2s] 
                  py-[6px] rounded-[5px] px-[19px] md:px-[38px]  ' >Join the cause</button>
                </div>
                <div className=""><img className='h-[110px] md:h-[280px] ' src="imgs/abig.png" alt="" /></div>
              </div>
            </div>
          </div>
    
    </>
  )
}

export default Aboutbanner
import React from 'react'

const Aboutteam = () => {
  return (
    <>
    
            <div className=" mt-[50px] px-2 ">
                <div className=" container ">
                    <div className="md:w-[453px] w-[199px]  ">
                        <hr />
                        <h1 className=' md:mb-[58px] mb-7 relative  md:text-[45px] text-[23px] text-[#181820] font-lora font-medium md:w-[210px] w-[110px] mt-[34px] md:mt-[64px] '>Our Team<span> <div className=' md:h-2 h-[7px] w-[55px] bg-[#34a071d3] absolute bottom-[2px] right-0 md:bottom-[10px] md:w-[113px]  ' ></div> </span></h1>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-between">
                        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
                        <div className="hover:scale-[1.03] transition-all duration-[.2s]">
                            <img className=' md:h-[252px] h-[152px] ' src="imgs/ti1.png" alt="" />
                            <h2 className=' md:mt-[24px] mt-[5px] md:text-[32px] text-[23px] font-lora font-normal ' >John Doe</h2>
                            <p className=' md:my-[24px] my-[5px] font-montserrat  text-[#2c2c2cd7]  ' >CEO & Founder</p>
                            <p className=' md:text-[16px] text-[12px] md:w-[267px] w-[190px]  font-montserrat text-[#59595959]  ' >We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                           
                        </div>
                        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 2*/}
                        <div className="hover:scale-[1.03] transition-all duration-[.2s]">
                            <img className=' md:h-[252px] h-[152px] ' src="imgs/ti2.png" alt="" />
                            <h2 className=' md:mt-[24px] mt-[5px] md:text-[32px] text-[23px] font-lora font-normal ' >Jane Doe</h2>
                            <p className=' w-[170px] md:w-full md:my-[24px] my-[5px] font-montserrat  text-[#2c2c2cd7]  ' >Co-Founder & Head of Marketing</p>
                            <p className=' md:text-[16px] text-[12px] md:w-[267px] w-[190px]  font-montserrat text-[#59595959]  ' >We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                           
                        </div>
                        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 3*/}
                        <div className="hover:scale-[1.03] transition-all duration-[.2s]">
                            <img className=' md:h-[252px] h-[152px] ' src="imgs/ti3.png" alt="" />
                            <h2 className=' md:mt-[24px] mt-[5px] md:text-[32px] text-[23px] font-lora font-normal ' >Jonh Smith</h2>
                            <p className=' md:my-[24px] my-[5px] font-montserrat  text-[#2c2c2cd7]  ' >CTO</p>
                            <p className=' md:text-[16px] text-[12px] md:w-[267px] w-[190px]  font-montserrat text-[#59595959]  ' >We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                           
                        </div>
                        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 4*/}
                        <div className="hover:scale-[1.03] transition-all duration-[.2s]">
                            <img className=' md:h-[252px] h-[152px] ' src="imgs/ti4.png" alt="" />
                            <h2 className=' md:mt-[24px] mt-[5px] md:text-[32px] text-[23px] font-lora font-normal ' >Jane Smith</h2>
                            <p className=' md:my-[24px] my-[5px] font-montserrat  text-[#2c2c2cd7]  ' >Head of Data</p>
                            <p className=' md:text-[16px] text-[12px] md:w-[267px] w-[190px]  font-montserrat text-[#59595959]  ' >We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Aboutteam
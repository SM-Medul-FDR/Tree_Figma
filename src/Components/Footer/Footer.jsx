import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
            <div className=" container md:px-3 px-2   ">
                        <div className=" md:ml-[12%] md:mb-[38px] mb-[20px] "><img src="imgs/logo.png" alt="w" /></div>
                <div className=" flex gap-[38px] flex-wrap justify-center  ">

                    <div className="">
                        <div className="">
                            <h2 className='  mb-[10px] md:mb-[20px] text-[16px] md:text-[18px] font-lora font-semibold text-[#161C1E]  ' >Product</h2>
                            <div className="flex flex-col gap-[10px] md:gap-[16px] ">
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Individuals</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Team</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Enterprise</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Pricing</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Technology</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Security</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Integrations</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="">
                            <h2 className=' mb-[10px] md:mb-[20px] text-[16px] md:text-[18px] font-lora font-semibold text-[#161C1E]  ' >Company</h2>
                            <div className="flex flex-col gap-[10px] md:gap-[16px] ">
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >About</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Careers </p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Login</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Sign Up</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >News</p>
                                
                            </div>
                    </div>
                    <div className="">
                    <h2 className=' mb-[10px] md:mb-[20px] text-[16px] md:text-[18px] font-lora font-semibold text-[#161C1E]  ' >Resources</h2>
                            <div className="flex flex-col gap-[10px] md:gap-[16px] ">
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >How-tos</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Case studies</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Help</p>
  
                            </div>
                    </div>
                    <div className="">
                    <h2 className=' mb-[10px] md:mb-[20px] text-[16px] md:text-[18px] font-lora font-semibold text-[#161C1E]  ' >Headquarters</h2>
                            <div className="flex flex-col ">
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Your company </p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >address, Street,</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >& name</p>

                            </div>
                    </div>
                    <div className="">
                    <h2 className=' mb-[10px] md:mb-[20px] text-[16px] md:text-[18px] font-lora font-semibold text-[#161C1E]  ' >North America</h2>
                            <div className="flex flex-col  ">
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >Your company </p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >address, Street,</p>
                                <p className=' text-[12px] md:text-[14px] font-lora font-normal ' >& name</p>

                            </div>
                    </div>
                    <div className="">
                    <h2 className=' mb-[10px] md:mb-[20px] text-[16px] md:text-[18px] font-lora font-semibold text-[#161C1E]  ' >Connect</h2>
                            <div className="flex md:gap-4 gap-2 ">
                                <Link to=''><img src="imgs/tw.png" alt="f" /></Link>
                                <Link to=''><img src="imgs/fb.png" alt="f" /></Link>
                                <Link to=''><img src="imgs/in.png" alt="f" /></Link> 

                            </div>
                    </div>
                    <div className="  ">
                    <h2 className=' mb-[10px] md:mb-[20px] text-[16px] md:text-[18px] font-lora font-semibold text-[#161C1E]  ' >Apps</h2>
                            <div className="flex flex-col items-center  ">
                                <Link to='' className=' ' ><img src="imgs/apple.png" alt="" /></Link>
                                <Link to='' className=' ' ><img src="imgs/play.png" alt="" /></Link>
                            </div> 
                    </div>

                </div>
                {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
                <div className="">
                    <div className=" w-full h-[2px] bg-[#918e8e] md:mt-[72px] md:mb-[22px] "></div>
                    <div className=" flex justify-between  ">
                        <div className=""><p>Copyright 2022 Dan Williams™</p></div>
                        <div className="flex gap-4 flex-col md:flex-row md:mb-[82px] ">
                            <p>Privacy Policy </p>
                            <p>Terms of Use </p>
                            <p> DMCA and Copyright Abuse Policy</p>
                        </div>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Footer
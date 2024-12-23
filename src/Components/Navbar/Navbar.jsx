import React from 'react'
import { Link } from 'react-router-dom'
import Help from '../Help/Help'

const Navbar = () => {
  return (
    <>
        <div className="medul_main_Nav py-[8px] drop-shadow-sm bg-white ">

            <div className="container">
                <div className="Main_Nav px-2 md:px-0  ">
                    <div className="flex justify-between items-center">
                        <div className="logo "><img className=' h-[30px] md:h-[46px] ' src="imgs/logo.png" alt="" /></div>
                        <div className="menus">
                            <ul className=' flex gap-[20px] md:gap-[64px] ' >
                                {/* Single menu 1 */}
                                <li>
                                <div className=" relative h-6 w-[40px] bg--white  ">
                                    <Link className="text-[12px] md:text-[14px]  font-semibold font-lora group flex justify-center text-[#272A5A]  hover:text-[#257251] transition-all duration-[.2s] ">Home
                                    <div className='h-1 w-0 group-hover:md:w-[64px] group-hover:w-[50px] absolute bottom-0 rounded-[4px] bg-[#257251] transition-all duration-[.2s]' ></div>
                                    </Link>
                                </div>
                                </li>
                                {/* Single menu 2 */}
                                <li>
                                <div className=" relative h-6 w-[40px] bg--white  ">
                                    <Link to='/about' className="text-[12px] md:text-[14px]  font-semibold font-lora group flex justify-center text-[#272A5A]  hover:text-[#257251] transition-all duration-[.2s] ">About
                                    <div className='h-1 w-0 group-hover:md:w-[64px] group-hover:w-[50px] absolute bottom-0 rounded-[4px] bg-[#257251] transition-all duration-[.2s]' ></div>
                                    </Link>
                                </div>
                                </li>
                                {/* Single menu 3 */}
                                <li>
                                <div className=" relative h-6 w-[40px] bg--white  ">
                                    <Link className="text-[12px] md:text-[14px]  font-semibold font-lora group flex justify-center text-[#272A5A]  hover:text-[#257251] transition-all duration-[.2s] ">Contact
                                    <div className='h-1 w-0 group-hover:md:w-[64px] group-hover:w-[50px] absolute bottom-0 rounded-[4px] bg-[#257251] transition-all duration-[.2s]' ></div>
                                    </Link>
                                </div>
                                </li>
                                {/* Single menu 4 */}
                                <li>
                                <div className=" relative h-6 w-[40px] bg--white  ">
                                    <Link className="text-[12px] md:text-[14px]  font-semibold font-lora group flex justify-center text-[#272A5A]  hover:text-[#257251] transition-all duration-[.2s] ">Help
                                    <div className='h-1 w-0 group-hover:md:w-[64px] group-hover:w-[50px] absolute bottom-0 rounded-[4px] bg-[#257251] transition-all duration-[.2s]' ></div>
                                    </Link>
                                </div>
                                </li>
                              
                            </ul>
                        </div>
                        <div className="Buttons flex gap-[6px] md:gap-[13px]  ">
                            <button className='hover:bg-white bg-[#257251] hover:text-black text-white border-[2px] border-[#257251] px-[5px] md:px-[20px] py-[6px] md:py-[13px] rounded-[4px] font-lora font-semibold text-[8px] md:text-[14px] transition-all duration-[.2s] '>Start Free Trial</button>
                            <button className='bg-white hover:bg-[#257251] text-black hover:text-white border-[2px] border-[#257251] px-[5px] md:px-[20px] py-[6px] md:py-[13px] rounded-[4px] font-lora font-semibold text-[8px] md:text-[14px] transition-all duration-[.2s] w-[85px] md:w-[143px] '>Login</button>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    
    </>
  )
}

export default Navbar
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoArrowForward } from "react-icons/io5";


const Help = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        // className: "center",
        // centerMode: true,
        infinite: true,
        centerPadding: "0px",

        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

      };



  return (
    <>
    
        <div className=" ">
            <div className="">
                <div className="container">

                <div className=" pl-[20px] ml-[29px] md:ml-[59px] ">
                    <h2 className=' text-[32px] font-montserrat font-semibold text-[#19191A]  ' >How to help</h2>
                    <p className=' text-[#6F747B] text-[14px] font-lora font-medium my-[20px] w-[300px] md:w-[410px]  '>Our goal is a world of net zero carbon emissions by 2050, with greater prosperity for all.</p>
                </div>
                </div>
                <div className="slider-container px-7">
                    <Slider {...settings}>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/help1.png" alt="" />
                            <div className=" absolute top-[8%] md:top-[118px] left-[6px] md:left-[32px]  ">
                                <h2 className=' text-white text-[18px] md:text-[30px] font-montserrat font-medium   ' >Title</h2>
                                <div className=" h-[2px]  w-[45px] md:w-[75px] bg-[#E6E9EF] my-[5px] md:my-[16px] "></div>
                                <p className=' text-[8px]  md:text-[16px] font-montserrat text-white  ' >We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <button className=' bg-white h-[25px] w-[25px] md:h-[47px] md:mt-[16px] md:w-[47px] flex justify-center items-center rounded-full hover:scale-[1.1] transition-all duration-[.1s] ' ><IoArrowForward />
                                </button>
                            </div>
                        </div>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/help2.png" alt="" />
                            <div className=" absolute top-[8%] md:top-[118px] left-[6px] md:left-[32px]  ">
                                <h2 className=' text-white text-[18px] md:text-[30px] font-montserrat font-medium   ' >Title</h2>
                                <div className=" h-[2px]  w-[45px] md:w-[75px] bg-[#E6E9EF] my-[5px] md:my-[16px] "></div>
                                <p className=' text-[8px]  md:text-[16px] font-montserrat text-white  ' >We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <button className=' bg-white h-[25px] w-[25px] md:h-[47px] md:mt-[16px] md:w-[47px] flex justify-center items-center rounded-full hover:scale-[1.1] transition-all duration-[.1s] ' ><IoArrowForward />
                                </button>
                            </div>
                        </div>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/help3.png" alt="" />
                            <div className=" absolute top-[8%] md:top-[118px] left-[6px] md:left-[32px]  ">
                                <h2 className=' text-white text-[18px] md:text-[30px] font-montserrat font-medium   ' >Title</h2>
                                <div className=" h-[2px]  w-[45px] md:w-[75px] bg-[#E6E9EF] my-[5px] md:my-[16px] "></div>
                                <p className=' text-[8px]  md:text-[16px] font-montserrat text-white  ' >We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <button className=' bg-white h-[25px] w-[25px] md:h-[47px] md:mt-[16px] md:w-[47px] flex justify-center items-center rounded-full hover:scale-[1.1] transition-all duration-[.1s] ' ><IoArrowForward />
                                </button>
                            </div>
                        </div>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/help4.png" alt="" />
                            <div className=" absolute top-[8%] md:top-[118px] left-[6px] md:left-[32px]  ">
                                <h2 className=' text-white text-[18px] md:text-[30px] font-montserrat font-medium   ' >Title</h2>
                                <div className=" h-[2px]  w-[45px] md:w-[75px] bg-[#E6E9EF] my-[5px] md:my-[16px] "></div>
                                <p className=' text-[8px]  md:text-[16px] font-montserrat text-white  ' >We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <button className=' bg-white h-[25px] w-[25px] md:h-[47px] md:mt-[16px] md:w-[47px] flex justify-center items-center rounded-full hover:scale-[1.1] transition-all duration-[.1s] ' ><IoArrowForward />
                                </button>
                            </div>
                        </div>
                       
                    </Slider>
                </div>


            
            </div>
        </div>
    
    
    </>
  )
}

export default Help
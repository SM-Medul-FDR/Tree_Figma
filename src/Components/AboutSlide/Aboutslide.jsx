import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoArrowForward } from "react-icons/io5";

const Aboutslide = () => {



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
    
        <div className=" md:mt-[50px] mt-[15px]">
            <div className="">
                <div className="">
                <div className="md:w-[453px] w-[199px]  md:mb-[63px] mb-[20px]  ">
                        <hr />
                    </div>
                <div className="slider-container px-7">
                    <Slider {...settings}>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/abs1.png" alt="" />
                            <div className=" absolute top-[17%] md:top-[38px] left-[25px] md:left-[45px]  ">
                               <h2 className=" font-lora font-normal md:text-[45px] text-[25px] text-white  ">3,456</h2>
                                <p className=" font-normal text-[10px] md:text-[16px] md:mt-2 mt-1 text-white "> Tree’s planted </p>
                            </div>
                        </div>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/abs2.png" alt="" />
                            <div className=" absolute top-[17%] md:top-[38px] left-[25px] md:left-[45px]  ">
                               <h2 className=" font-lora font-normal md:text-[45px] text-[25px] text-white  ">£10.5M</h2>
                                <p className=" font-normal text-[10px] md:text-[16px] md:mt-2 mt-1 text-white "> Raised in 2022 </p>
                            </div>
                        </div>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/abs3.png" alt="" />
                            <div className=" absolute top-[17%] md:top-[38px] left-[25px] md:left-[45px]  ">
                               <h2 className=" font-lora font-normal md:text-[45px] text-[25px] text-white  ">30,000</h2>
                                <p className=" font-normal text-[10px] md:text-[16px] md:mt-2 mt-1 text-white "> Another stat </p>
                            </div>
                        </div>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/abs4.png" alt="" />
                            <div className=" absolute top-[17%] md:top-[38px] left-[25px] md:left-[45px]  ">
                               <h2 className=" font-lora font-normal md:text-[45px] text-[25px] text-white  ">3,456</h2>
                                <p className=" font-normal text-[10px] md:text-[16px] md:mt-2 mt-1 text-white "> Another stat </p>
                            </div>
                        </div>
                        {/* --- */}
                        <div className='relative  w-full ' >
                            <img className=' rounded-lg ' src="imgs/abs2.png" alt="" />
                            <div className=" absolute top-[17%] md:top-[38px] left-[25px] md:left-[45px]  ">
                               <h2 className=" font-lora font-normal md:text-[45px] text-[25px] text-white  ">£10.5M</h2>
                                <p className=" font-normal text-[10px] md:text-[16px] md:mt-2 mt-1 text-white "> Raised in 2022 </p>
                            </div>
                        </div>
                       
                       
                    </Slider>
                </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Aboutslide